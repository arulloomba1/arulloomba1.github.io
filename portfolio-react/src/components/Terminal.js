import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import './Terminal.css';

const Terminal = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [hint, setHint] = useState('');
  const [hintPosition, setHintPosition] = useState(0);
  const [previousInputLength, setPreviousInputLength] = useState(0);
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const measureRef = useRef(null);

  const helpMessage = `
    <b>💻 System Commands:</b><br>
    <b>help or h</b>        - Show available commands<br>
    <b>clear or cls</b>       - Clear the terminal<br>
    <b>neofetch or fetch</b>    - Display system info (Arch Linux style)<br>
    <br>
    <b>👤 Personal Information:</b><br>
    <b>whoami</b>      - Display my identity<br>
    <b>skills</b>      - Show my technical skills<br>
    <b>projects</b>    - List my featured projects<br>
    <b>awards</b>      - Display my achievements<br>
    <b>others</b>      - Show my management/soft skills<br>
    <br>
    <b>🌐 Online Profiles:</b><br>
    <b>linkedin or ln</b>    - Open my LinkedIn profile<br>
    <b>github or gh</b>      - Open my GitHub profile<br>
    <br>
    <b>📄 Documents:</b><br>
    <b>resume or r</b>      - Download my resume<br>
  `;

  const commands = {
    help: helpMessage,
    neofetch: () => {
      let currentTime = new Date().toLocaleTimeString();
      return `<pre>
        <span>      /\\      </span>  User: arulloomba
        <span>     /  \\     </span>  OS: Arch Linux
        <span>    /    \\    </span>  Hostname: arulloomba.github.io
        <span>   /  /\\  \\   </span>  Time: ${currentTime}
        <span>  /  (--)  \\  </span>  Email: <a href="mailto:arulloomba@berkeley.edu" class="custom-link">arulloomba@berkeley.edu</a>
        <span> /  /    \\  \\ </span>  GitHub: <a href="https://GitHub.com/arulloomba1" target="_blank" class="custom-link">GitHub.com/arulloomba1</a>
        <span>/___\\    /___\\</span>  LinkedIn: <a href="https://LinkedIn.com/in/arul-loomba" target="_blank" class="custom-link">LinkedIn.com/in/arul-loomba</a>
        </pre>`;
    },
    github: () => {
      window.open("https://github.com/arulloomba1", "_blank");
      return `Opening <a href="https://github.com/arulloomba1" target="_blank" class="custom-link">GitHub/arulloomba1</a>...`;
    },
    linkedin: () => {
      window.open("https://www.linkedin.com/in/arul-loomba/", "_blank");
      return `Opening <a href="https://linkedin.com/in/arul-loomba" target="_blank" class="custom-link">LinkedIn/arul-loomba</a>...`;
    },
    projects: `
      - Voice Recognition & Object Detection: YOLO-v8 model for 250+ household objects with FPGA-based voice synthesis<br>
      - RISC-V Neural Network: Assembly-level implementation with stock market analysis applications<br>
      - MAE Encoder Pipeline: Triple-stream architecture processing 500+GB of multimodal data<br>
      - Robot Arm Simulator: Mujoco-based system supporting multiple robot arms with inverse kinematics<br>
      - Snek Game: Feature-rich snake game with 30+ characters and 75+ map layouts, built in C/C++ with OpenGL<br>
      - S1XT33N: Voice-controlled robot car with custom circuits and PCA-based voice classification<br>
    `,
    awards: `
      - 4x Dean's List Award (2023-2025) UC Berkeley, EECS <br>
      - 2nd Place MOOC AI Hackathon 2025, UC Berkeley (Historical AI Debate Agent) <br>
      - Cal Leadership Award, UC Berkeley <br>
    `,
    skills: `
      - Backend Development<br>
      - Python: PyTorch, FastAPI, discord.py<br>
      - Java: Spring Boot (learning)<br>
      - JavaScript: NodeJs, discord.js, passport.js<br>
      - Database: MySQL<br>
      - Version Control: Git<br>
      - CI/CD: Docker, GitHub CI/CD<br>
      - Cloud: Azure, AWS, GCP, Oracle Cloud<br>
      - Tools: Postman, BurpSuite, Nmap, Cloudflared<br>
      - OS: Arch Linux, Ubuntu, Windows
    `,
    others: `
      - Rapid learner with a strong ability to adapt to new technologies<br>
      - Strong communication and interpersonal skills<br>
      - Strong problem-solving skills<br>
    `,
    whoami: `<a href="arulloomba1.github.io" class="custom-link">Arul Loomba</a> | Software Engineer`,
    resume: () => {
      const link = document.createElement("a");
      link.href = "/resume1.pdf";
      link.download = "Arul_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return "Downloading resume...";
    },
    clear: () => {
      setOutput([]);
      return null;
    },
    exit: () => {
      setOutput([]);
      return null;
    }
  };

  const aliases = {
    gh: "github",
    ln: "linkedin",
    r: "resume",
    cls: "clear",
    h: "help",
    fetch: "neofetch"
  };

  const commandList = Object.keys(commands).concat(Object.keys(aliases));

  const processCommand = (cmd) => {
    if (cmd === "") return;

    const newHistory = [...commandHistory, cmd];
    setCommandHistory(newHistory);
    setHistoryIndex(newHistory.length);

    let actualCmd = aliases[cmd] || cmd;
    actualCmd = actualCmd.toLowerCase();

    if (actualCmd === "clear" || actualCmd === "exit") {
      setOutput([]);
      return;
    }

    let response = typeof commands[actualCmd] === "function" ? commands[actualCmd]() : commands[actualCmd] || getClosestCommand(actualCmd);
    
    if (response !== null) {
      const newOutput = [...output, { command: cmd, result: response }];
      setOutput(newOutput);
    }
  };

  const getClosestCommand = (inputCmd) => {
    let closestMatch = commandList.find(cmd => cmd.startsWith(inputCmd));
    return closestMatch ? `Did you mean <b>${closestMatch}</b>?` : `Command not found: ${inputCmd}`;
  };

  const updateAutocompleteHint = (value) => {
    const currentLength = value.length;
    const isDeleting = currentLength < previousInputLength;
    
    if (!value || isDeleting) {
      setHint('');
      setHintPosition(0);
      setPreviousInputLength(currentLength);
      return;
    }
    
    let match = commandList.find(cmd => cmd.startsWith(value));
    if (match) {
      setHint(match.slice(value.length));
      // Calculate position for hint
      if (measureRef.current) {
        measureRef.current.textContent = value;
        setHintPosition(measureRef.current.offsetWidth);
      }
    } else {
      setHint('');
      setHintPosition(0);
    }
    
    setPreviousInputLength(currentLength);
  };

  const autocompleteCommand = () => {
    if (!inputValue) return;
    let match = commandList.find(cmd => cmd.startsWith(inputValue));
    if (match) {
      setInputValue(match);
      setHint('');
      setHintPosition(0);
      setPreviousInputLength(match.length);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      processCommand(inputValue.trim());
      setInputValue('');
      setHint('');
    } else if (event.key === "ArrowRight" || event.key === "Tab") {
      event.preventDefault();
      autocompleteCommand();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      } else {
        setHistoryIndex(commandHistory.length);
        setInputValue('');
      }
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleCommandClick = (cmd) => {
    processCommand(cmd);
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    updateAutocompleteHint(inputValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="terminal-page">
      <div id="terminal-wrapper">
        <div id="terminal-container" onClick={() => inputRef.current?.focus()}>
          <div id="terminal" ref={outputRef}>
            <div id="output">
              <div className="help-message">Type 'help' to see available commands.</div>
              {output.map((item, index) => (
                <div key={index}>
                  <div className="command-line">
                    <span className="prompt">λ</span> {item.command}
                  </div>
                  <div 
                    className="command-result"
                    dangerouslySetInnerHTML={{ __html: item.result }}
                  />
                </div>
              ))}
            </div>
            <div className="input-line">
              <div className="autocomplete-container">
                <span className="prompt">λ</span>
                <div className="input-wrapper">
                  <span 
                    ref={measureRef}
                    className="measure-text"
                    style={{
                      position: 'absolute',
                      visibility: 'hidden',
                      whiteSpace: 'pre',
                      fontFamily: "'SF Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace",
                      fontSize: '14px'
                    }}
                  />
                  <input
                    ref={inputRef}
                    id="commandInput"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder=""
                    autoFocus
                  />
                  <span 
                    id="autocompleteHint"
                    style={{ left: `${hintPosition}px` }}
                  >
                    {hint}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="command-bar">
          {Object.keys(commands).sort().map(cmd => (
            <button
              key={cmd}
              onClick={() => handleCommandClick(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
