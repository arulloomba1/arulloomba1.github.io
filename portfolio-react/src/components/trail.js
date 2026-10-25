// Flowing path: measured from [data-node] anchors, drawn as you scroll, with a dot riding the tip.
import React, { useEffect, useRef, useState } from 'react';

const ACCENT = '#2f6d5c';
const INK = '#1a1a18';
const PAPER = '#f7f5f0';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function computeTrail(root) {
  if (!root) return null;
  const off = (el) => {
    let x = 0, y = 0;
    while (el && el !== root) { x += el.offsetLeft; y += el.offsetTop; el = el.offsetParent; }
    return { x, y };
  };
  const pts = [...root.querySelectorAll('[data-node]')]
    .filter((e) => e.offsetParent !== null)
    .sort((a, b) => parseFloat(a.dataset.node) - parseFloat(b.dataset.node))
    .map((e) => { const o = off(e); return { x: o.x + 1, y: o.y + 1, ghost: e.dataset.node.includes('.') }; });
  if (pts.length < 2) return null;
  // Every node is entered and left vertically, so segments join without corners.
  let d = 'M' + pts[0].x + ' ' + pts[0].y;
  const C = (c1x, c1y, c2x, c2y, x, y) =>
    ' C' + c1x.toFixed(1) + ' ' + c1y.toFixed(1) + ', ' + c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ', ' + x.toFixed(1) + ' ' + y.toFixed(1);
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], dy = b.y - a.y;
    if (Math.abs(a.x - b.x) > 60) {
      const k = dy * 0.7;
      d += C(a.x, a.y + k, b.x, b.y - k, b.x, b.y);
    } else {
      // same lane: swing out to a midpoint and back, tangents stay vertical
      const s = i % 2 ? 1 : -1, sw = a.x < 400 ? 38 : 90, my = a.y + dy / 2, mx = a.x + s * sw, k = dy * 0.28;
      d += C(a.x, a.y + k, mx, my - k, mx, my) + C(mx, my + k, b.x, b.y - k, b.x, b.y);
    }
  }
  return { d, pts, w: root.offsetWidth, h: root.offsetHeight };
}

// Measures the trail inside rootRef and animates it against scroll position.
export function useTrail(rootRef) {
  const [trail, setTrail] = useState(null);
  const trailRef = useRef(null);
  const refs = { soft: useRef(null), ink: useRef(null), dot: useRef(null) };
  const { soft: softRef, ink: inkRef, dot: dotRef } = refs;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const reduce = prefersReducedMotion();
    let lut = null, lutD = '', cur = 0, raf = 0, q = 0, alive = true;
    const reached = new Set();

    const run = () => {
      if (!alive) return;
      const t = computeTrail(root), c = trailRef.current;
      if (t && (!c || c.d !== t.d || c.h !== t.h)) { trailRef.current = t; setTrail(t); }
      if (!t && c) { trailRef.current = null; setTrail(null); }
    };
    const schedule = () => { cancelAnimationFrame(q); q = requestAnimationFrame(() => requestAnimationFrame(run)); };

    const build = (t, soft) => {
      const total = soft.getTotalLength(), N = Math.max(200, Math.round(total / 6)), ys = new Float32Array(N + 1);
      for (let i = 0; i <= N; i++) ys[i] = soft.getPointAtLength(total * i / N).y;
      for (let i = 1; i <= N; i++) if (ys[i] < ys[i - 1]) ys[i] = ys[i - 1];
      const lenAtY = (y) => {
        if (y <= ys[0]) return 0;
        if (y >= ys[N]) return total;
        let lo = 0, hi = N;
        while (hi - lo > 1) { const m = (lo + hi) >> 1; if (ys[m] < y) lo = m; else hi = m; }
        const f = (y - ys[lo]) / Math.max(1e-6, ys[hi] - ys[lo]);
        return total * (lo + f) / N;
      };
      const nodeLen = t.pts.map((p) => lenAtY(p.y - 0.5));
      const firstStop = t.pts.findIndex((p, i) => i > 0 && !p.ghost);
      return { total, lenAtY, nodeLen, min: firstStop > 0 ? nodeLen[firstStop] : total * 0.15 };
    };

    const tick = () => {
      if (!alive) return;
      const t = trailRef.current, ink = inkRef.current, soft = softRef.current, dot = dotRef.current;
      if (t && ink && soft && dot) {
        if (lutD !== t.d) { lut = build(t, soft); lutD = t.d; }
        const rect = root.getBoundingClientRect();
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        let target = atBottom ? lut.total : lut.lenAtY(window.innerHeight * 0.62 - rect.top);
        target = Math.max(target, lut.min);
        if (reduce) cur = target;
        else { cur += (target - cur) * 0.09; if (Math.abs(target - cur) < 0.4) cur = target; }
        ink.style.strokeDashoffset = String(1 - cur / lut.total);
        const pt = soft.getPointAtLength(cur);
        dot.setAttribute('transform', 'translate(' + pt.x.toFixed(1) + ' ' + pt.y.toFixed(1) + ')');
        dot.style.opacity = cur > 2 ? '1' : '0';
        t.pts.forEach((p, i) => {
          if (p.ghost || i === 0) return;
          const on = cur >= lut.nodeLen[i] - 1;
          if (on === reached.has(i)) return;
          if (on) reached.add(i); else reached.delete(i);
          const stop = root.querySelector('[data-stop="' + i + '"]'), ring = root.querySelector('[data-ring="' + i + '"]');
          if (stop) { stop.style.fill = on ? ACCENT : PAPER; stop.setAttribute('r', on ? 8 : 7); }
          if (ring && on) {
            ring.style.transition = 'none'; ring.setAttribute('r', 8); ring.style.opacity = '.6';
            ring.getBoundingClientRect();
            ring.style.transition = ''; ring.setAttribute('r', 26); ring.style.opacity = '0';
          }
        });
      }
      raf = requestAnimationFrame(tick);
    };

    const watchImgs = () => root.querySelectorAll('img,video').forEach((im) => {
      if (im.dataset.trailWatch) return;
      im.dataset.trailWatch = '1';
      im.addEventListener('load', schedule, { once: true });
      im.addEventListener('loadedmetadata', schedule, { once: true });
    });

    run();
    if (document.fonts) document.fonts.ready.then(run);
    const ro = new ResizeObserver(schedule);
    ro.observe(root);
    watchImgs();
    const mo = new MutationObserver((m) => {
      if (m.every((r) => r.target.closest && r.target.closest('svg'))) return;
      schedule();
      watchImgs();
    });
    mo.observe(root, { childList: true, subtree: true });
    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      cancelAnimationFrame(q);
      ro.disconnect();
      mo.disconnect();
    };
  }, [rootRef, softRef, inkRef, dotRef]);

  return { trail, refs };
}

export function TrailSvg({ trail, refs }) {
  if (!trail) return null;
  const reduce = prefersReducedMotion();
  const stops = trail.pts.map((p, i) => ({ p, i })).filter((o) => !o.p.ghost);
  return (
    <svg
      className="trail"
      width={trail.w}
      height={trail.h}
      viewBox={`0 0 ${trail.w} ${trail.h}`}
      aria-hidden="true"
    >
      <path ref={refs.soft} d={trail.d} fill="none" stroke={ACCENT} strokeOpacity={0.08} strokeWidth={14} strokeLinecap="round" />
      <path ref={refs.ink} d={trail.d} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={reduce ? 0 : 1} />
      {stops.map(({ p, i }, k) => (
        <g key={'n' + k}>
          <circle data-ring={i} cx={p.x} cy={p.y} r={8} fill="none" stroke={ACCENT} strokeWidth={1.5} className="trail-ring" />
          <circle data-stop={i} cx={p.x} cy={p.y} r={k === 0 ? 5 : 7} fill={k === 0 ? INK : PAPER} stroke={ACCENT} strokeWidth={2} className="trail-stop" />
        </g>
      ))}
      <g ref={refs.dot} style={{ opacity: 0 }}>
        <circle r={11} fill={ACCENT} fillOpacity={0.14} />
        <circle r={4.5} fill={ACCENT} />
      </g>
    </svg>
  );
}
