import React, { useEffect, useRef, useState } from 'react';
import { SitePage, Rail } from './SiteLayout';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../data/site';
import './Terminal.css';

// One rendered output line. `pre` is plain text shown before an optional link.
const L = (text, o = {}) => ({ text, pre: o.pre || '', href: o.href || '', tone: o.tone || '', indent: !!o.indent });
const H = (text) => L(text, { tone: 'head' });
const item = (t) => L('- ' + t);

const openTab = (url) => window.open(url, '_blank', 'noopener,noreferrer');

const COMMANDS = {
  help: () => [
    H('System'),
    L('help, h          show available commands', { indent: true }),
    L('clear, cls       clear the terminal', { indent: true }),
    L('neofetch, fetch  display system info', { indent: true }),
    H('Personal'),
    L('whoami  skills  projects  awards  others', { indent: true }),
    H('Profiles'),
    L('linkedin, ln     github, gh', { indent: true }),
    H('Documents'),
    L('resume, r        download my resume', { indent: true }),
  ],
  neofetch: () => [
    L('User: arulloomba', { pre: '      /\\        ' }),
    L('OS: Arch Linux', { pre: '     /  \\       ' }),
    L('Hostname: arulloomba.com', { pre: '    /    \\      ' }),
    L('Time: ' + new Date().toLocaleTimeString(), { pre: '   /  /\\  \\     ' }),
    L(EMAIL, { pre: '  /  (--)  \\    Email: ', href: `mailto:${EMAIL}` }),
    L('GitHub.com/arulloomba1', { pre: ' /  /    \\  \\   GitHub: ', href: GITHUB_URL }),
    L('LinkedIn.com/in/arul-loomba', { pre: '/___\\    /___\\  LinkedIn: ', href: LINKEDIN_URL }),
  ],
  whoami: () => [L('Arul Loomba | Software Engineer', { tone: 'head' })],
  projects: () => [
    'Voice Recognition & Object Detection: YOLO-v8 model for 250+ household objects with FPGA-based voice synthesis',
    'RISC-V Neural Network: Assembly-level implementation with stock market analysis applications',
    'MAE Encoder Pipeline: Triple-stream architecture processing 500+GB of multimodal data',
    'Robot Arm Simulator: Mujoco-based system supporting multiple robot arms with inverse kinematics',
    'Snek Game: Feature-rich snake game with 30+ characters and 75+ map layouts, built in C/C++ with OpenGL',
    'S1XT33N: Voice-controlled robot car with custom circuits and PCA-based voice classification',
  ].map(item),
  awards: () => [
    "4x Dean's List Award (2023-2025) UC Berkeley, EECS",
    '2nd Place MOOC AI Hackathon 2025, UC Berkeley (Historical AI Debate Agent)',
    'Cal Leadership Award, UC Berkeley',
  ].map(item),
  skills: () => [
    'Backend Development',
    'Python: PyTorch, FastAPI, discord.py',
    'Java: Spring Boot (learning)',
    // eslint-disable-next-line no-script-url -- plain text, not a URL
    'JavaScript: NodeJs, discord.js, passport.js',
    'Database: MySQL',
    'Version Control: Git',
    'CI/CD: Docker, GitHub CI/CD',
    'Cloud: Azure, AWS, GCP, Oracle Cloud',
    'Tools: Postman, BurpSuite, Nmap, Cloudflared',
    'OS: Arch Linux, Ubuntu, Windows',
  ].map(item),
  others: () => [
    'Rapid learner with a strong ability to adapt to new technologies',
    'Strong communication and interpersonal skills',
    'Strong problem-solving skills',
  ].map(item),
  github: () => { openTab(GITHUB_URL); return [L('GitHub/arulloomba1', { pre: 'Opening ', href: GITHUB_URL })]; },
  linkedin: () => { openTab(LINKEDIN_URL); return [L('LinkedIn/arul-loomba', { pre: 'Opening ', href: LINKEDIN_URL })]; },
  resume: () => [L('Arul_Resume.pdf', { pre: 'Downloading resume... ', href: RESUME_URL })],
  clear: null,
  exit: null,
};

const ALIASES = { gh: 'github', ln: 'linkedin', r: 'resume', cls: 'clear', h: 'help', fetch: 'neofetch' };
const NAMES = Object.keys(COMMANDS).concat(Object.keys(ALIASES));
const BAR = Object.keys(COMMANDS).sort();

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);
  const [hi, setHi] = useState(-1);
  const inRef = useRef(null);
  const outRef = useRef(null);

  useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [output]);

  const run = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    const name = (ALIASES[cmd.toLowerCase()] || cmd).toLowerCase();
    const nextHistory = [...history, cmd];
    setHistory(nextHistory);
    setHi(nextHistory.length);
    setInput('');
    if (name === 'clear' || name === 'exit') {
      setOutput([]);
      return;
    }
    let lines;
    if (COMMANDS[name]) lines = COMMANDS[name]();
    else {
      const guess = NAMES.find((c) => c.startsWith(name));
      lines = [L(guess ? `Did you mean ${guess}?` : `Command not found: ${name}`, { tone: 'error' })];
    }
    setOutput((o) => [...o, { cmd, lines, key: o.length + ':' + cmd }]);
  };

  const match = input ? NAMES.find((c) => c.startsWith(input.toLowerCase()) && c !== input.toLowerCase()) : '';

  const onKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      run(input);
    } else if ((e.key === 'Tab' || e.key === 'ArrowRight') && match) {
      e.preventDefault();
      setInput(match);
    } else if (e.key === 'ArrowUp' && hi > 0) {
      e.preventDefault();
      setHi(hi - 1);
      setInput(history[hi - 1]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const n = hi + 1;
      if (n < history.length) { setHi(n); setInput(history[n]); } else { setHi(history.length); setInput(''); }
    }
  };

  return (
    <SitePage className="terminal-page" showTerminalLink={false} compactFooter>
      <Rail node="0" top={40} ghost="1" className="terminal-section">
        <div className="terminal-stack">
          <h1 className="page-title">Terminal</h1>
          <div className="term-window" onClick={() => inRef.current && inRef.current.focus()}>
            <div className="term-bar"><span>arulloomba@berkeley ~</span><span>type help</span></div>
            <div className="term-out" ref={outRef}>
              <div className="term-muted">Type 'help' to see available commands.</div>
              {output.map((o) => (
                <div key={o.key} className="term-block">
                  <div><span className="term-prompt">λ</span> {o.cmd}</div>
                  {o.lines.map((l, i) => (
                    <div key={i} className={`term-line ${l.tone} ${l.indent ? 'indent' : ''}`}>
                      {l.pre}
                      {l.href ? <a href={l.href} target="_blank" rel="noopener noreferrer">{l.text}</a> : l.text}
                    </div>
                  ))}
                </div>
              ))}
              <div className="term-input-row">
                <span className="term-prompt">λ</span>
                <input
                  ref={inRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  spellCheck="false"
                  autoComplete="off"
                  autoCapitalize="off"
                  aria-label="Terminal command"
                />
                <span className="term-hint">{match ? `tab → ${match}` : ''}</span>
              </div>
            </div>
          </div>
          <div className="pill-row">
            {BAR.map((name) => (
              <button key={name} type="button" className="term-chip" onClick={() => run(name)}>{name}</button>
            ))}
          </div>
        </div>
      </Rail>
    </SitePage>
  );
};

export default Terminal;
