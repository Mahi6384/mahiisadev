import React, { useState, useEffect } from "react";

// --- SVG Components ---

const Laptop = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 15L2 17V18H22V17L20 15H4Z" stroke="#f472b6" fill="#130f18" />
    <rect x="5" y="6" width="14" height="9" rx="1" stroke="#f472b6" />
  </svg>
);

const BinaryTree = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100">
    <g stroke="#f472b6" strokeWidth="2" fill="none">
      <circle cx="50" cy="10" r="5" fill="#130f18" />
      <path d="M 50 15 V 35 L 30 55" />
      <path d="M 50 15 V 35 L 70 55" />
      <circle cx="30" cy="60" r="5" fill="#130f18" />
      <circle cx="70" cy="60" r="5" fill="#130f18" />
    </g>
  </svg>
);

const LinkedList = ({ className }) => (
  <svg className={className} viewBox="0 0 200 50">
    <g fill="#130f18" stroke="#f472b6" strokeWidth="1">
      <rect x="5" y="15" width="40" height="20" rx="2" />
      <text x="15" y="29" fill="#f5d0fe" fontSize="10">
        Data
      </text>
      <line x1="25" y1="15" x2="25" y2="35" />
      <line x1="45" y1="25" x2="65" y2="25" />
      <polygon points="65,22 70,25 65,28" fill="#f472b6" />
      <rect x="70" y="15" width="40" height="20" rx="2" />
      <text x="80" y="29" fill="#f5d0fe" fontSize="10">
        Data
      </text>
      <line x1="90" y1="15" x2="90" y2="35" />
      <line x1="110" y1="25" x2="130" y2="25" />
      <polygon points="130,22 135,25 130,28" fill="#f472b6" />
      <rect x="135" y="15" width="40" height="20" rx="2" />
      <text x="140" y="29" fill="#f5d0fe" fontSize="10">
        NULL
      </text>
    </g>
  </svg>
);

// --- Terminal Component ---

const Terminal = () => {
  const [text, setText] = useState("");
  const fullText = "npm create vite@latest ummm...somethingNew";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 120);
      } else {
        setTimeout(() => {
          setText("");
          i = 0;
          typeWriter();
        }, 3000);
      }
    };
    const timeoutId = typeWriter();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: "#ED594A" }}></div>
        <div className="terminal-dot" style={{ background: "#FDD800" }}></div>
        <div className="terminal-dot" style={{ background: "#5AC05A" }}></div>
      </div>
      <div className="terminal-body">
        <span className="prompt">$ </span>
        <span id="terminal-text">{text}</span>
        <span className="cursor"></span>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function MahiCoder() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&display=swap');
                
                .mahi-container-wrapper {
                    background-color: #130f18;
                    color: #e0e0e0;
                    font-family: 'VT323', monospace;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100vw;
                    height: 100vh;
                    margin: 0;
                }

                .container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    max-width: 1200px;
                }
                
                .background-code {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    font-size: 14px;
                    line-height: 1.2;
                    color: #3c1e4a;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                    opacity: 0.6;
                    z-index: 1;
                    filter: blur(1.5px);
                    text-shadow: 0 0 5px rgba(236, 72, 153, 0.5);
                    animation: code-scroll 60s linear infinite;
                }

                @keyframes code-scroll {
                    from { transform: translate(-50%, -60%); }
                    to { transform: translate(-50%, -40%); }
                }

                .main-title {
                    position: absolute;
                    top: 3%;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 30;
                    font-family: 'Press Start 2P', cursive;
                    font-size: clamp(1.2rem, 4vw, 2rem);
                    color: #f5d0fe;
                    text-shadow: 0 0 5px #f472b6, 0 0 10px #f472b6, 0 0 20px #d946ef;
                    white-space: nowrap;
                    overflow: hidden;
                    border-right: .15em solid #f472b6;
                    animation: typing 4s steps(40, end) infinite, blink-caret .75s step-end infinite;
                }

                @keyframes typing {
                  from { width: 0 }
                  to { width: 100% }
                }

                @keyframes blink-caret {
                  from, to { border-color: transparent }
                  50% { border-color: #f472b6; }
                }

                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }

                .code-snippet {
                    position: absolute;
                    background: rgba(49, 28, 69, 0.5);
                    backdrop-filter: blur(5px);
                    border-left: 3px solid #f472b6;
                    padding: 10px 15px;
                    border-radius: 8px;
                    font-size: 14px;
                    z-index: 15;
                    animation: float 8s ease-in-out infinite;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                }

                .binary-tree, .linked-list {
                    position: absolute;
                    z-index: 5;
                    opacity: 0.3;
                    animation: float 12s ease-in-out infinite;
                }

                .data-string {
                    position: absolute;
                    z-index: 20;
                    font-size: clamp(1rem, 2vw, 1.2rem);
                    color: #d49f00;
                    text-shadow: 0 0 3px #d49f00;
                    animation: float 10s ease-in-out infinite alternate;
                    background: rgba(20, 15, 24, 0.6);
                    padding: 5px 10px;
                    border-radius: 5px;
                }

                .floating-laptop {
                    position: absolute;
                    z-index: 12;
                    width: clamp(80px, 10vw, 120px);
                    opacity: 0.7;
                    animation: float 15s ease-in-out infinite;
                }
                
                .keyword {
                    position: absolute;
                    z-index: 25;
                    font-family: 'Press Start 2P', cursive;
                    font-size: clamp(0.8rem, 2vw, 1.2rem);
                    color: #f5d0fe;
                    text-shadow: 0 0 8px #f472b6;
                    animation: float 9s ease-in-out infinite alternate;
                }
                
                .system-design {
                    position: absolute;
                    z-index: 15;
                    background: rgba(49, 28, 69, 0.5);
                    backdrop-filter: blur(5px);
                    border-left: 3px solid #f472b6;
                    padding: 10px;
                    border-radius: 8px;
                    font-size: 12px;
                    animation: float 10s ease-in-out infinite -5s;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    color: #f5d0fe;
                }
                
                .terminal {
                    position: absolute;
                    z-index: 25;
                    width: clamp(320px, 50vw, 450px);
                    height: 100px;
                    background: #0d0c0f;
                    border: 1px solid #3c1e4a;
                    border-radius: 8px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    font-family: 'VT323', monospace;
                    animation: float 11s ease-in-out infinite;
                }

                .terminal-header {
                    background: #3c1e4a;
                    height: 20px;
                    border-top-left-radius: 7px;
                    border-top-right-radius: 7px;
                    display: flex;
                    align-items: center;
                    padding: 0 8px;
                }

                .terminal-dot { height: 8px; width: 8px; border-radius: 50%; margin-right: 4px; }
                .terminal-body { padding: 10px; color: #f5d0fe; font-size: 16px; }
                .terminal-body .prompt { color: #f472b6; }
                #terminal-text { white-space: pre; overflow: hidden; display: inline-block; vertical-align: middle; }
                .cursor { display: inline-block; background-color: #f5d0fe; width: 8px; height: 1.2em; animation: terminal-blink 1s infinite; vertical-align: middle; }
                @keyframes terminal-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

                .girl-image {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 65vh;
                    max-height: 450px;
                    z-index: 10;
                    filter: drop-shadow(0 0 20px rgba(244, 114, 182, 0.4)) contrast(1.05);
                    opacity: 0.95;
                    -webkit-mask-image: linear-gradient(to top, black 60%, transparent 100%);
                    mask-image: linear-gradient(to top, black 60%, transparent 100%);
                }

                /* --- Element Positioning --- */
                .snippet-1 { top: 60%; left: 2%; animation-delay: 0s; }
                .snippet-2 { top: 75%; right: 2%; animation-delay: -4s; }
                .snippet-3 { top: 20%; left: 5%; animation-delay: -2s; }
                .snippet-4 { top: 20%; right: 5%; animation-delay: -6s; }
                
                .tree-1 { top: 40%; left: 25%; width: 100px; animation-delay: -2s;}
                .tree-2 { top: 40%; right: 25%; width: 100px; animation-delay: -8s; }

                .string-1 { top: 85%; left: 15%; animation-delay: -3s;}
                .string-2 { top: 12%; left: 50%; transform: translateX(-50%); animation-delay: -7s;}

                .laptop-1 { top: 45%; left: 5%; transform: rotate(-15deg); animation-delay: -5s; }
                .laptop-2 { top: 45%; right: 5%; transform: rotate(15deg); animation-delay: -12s; }
                
                .keyword-1 { top: 32%; left: 15%; animation-delay: -1s; }
                .keyword-2 { top: 90%; left: 50%; transform: translateX(-50%); animation-delay: -5s; }
                .keyword-3 { top: 70%; right: 18%; animation-delay: -8s; }
                .keyword-4 { top: 32%; right: 15%; animation-delay: -11s; }
                .keyword-5 { top: 55%; left: 50%; transform: translateX(-50%); animation-delay: -3s; }

                .linked-list { top: 75%; left: 20%; width: 200px; animation-delay: -14s; }

                .system-design { top: 88%; right: 15%; }
                
                .terminal {
                    bottom: auto;
                    top: 60%;
                    left: 50%;
                    transform: translateX(-50%);
                    animation-delay: -3s;
                }

            `}</style>
      <div className="mahi-container-wrapper">
        <div className="container">
          <pre className="background-code">{`
function bubbleSort(arr) { let n = arr.length; for (let i = 0; i < n - 1; i++) { for (let j = 0; j < n - i - 1; j++) { if (arr[j] > arr[j + 1]) { [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; } } } return arr; }
const array = [5, 3, 8, 4, 2];
class Node { constructor(data) { this.data = data; this.left = null; this.right = null; } }
<div className="container"><H1>Hello, World!</H1></div>
body { background-color: #2c3e50; color: #ecf0f1; }
const fetchData = async () => { const response = await fetch('api/data'); const data = await response.json(); console.log(data); };
const newSkills = ['React.js', 'Next.js', 'Express.js'];
SELECT * FROM users WHERE status = 'active';
git commit -m "feat: Initial commit"
// Mahi is a coder...
console.log("Compiling...");
// System.out.println("Java is verbose");
# Python is cool
def greet(name): print(f"Hello, {name}!")
const promise = new Promise((resolve, reject) => { setTimeout(() => { resolve("Success!"); }, 1000); });
                    `}</pre>
          <img
            src="/Gemini_Generated_Image_uovpc9uovpc9uovp.jpg"
            alt="Mahi, the coder"
            className="girl-image"
          />
          <h1 className="main-title">&lt;MAHI IS A CODER&gt;</h1>
          {/* Code Snippets */}
          <div
            className="code-snippet snippet-1"
            dangerouslySetInnerHTML={{
              __html: `<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">name</span> = <span style="color: #ce9178;">"Mahi"</span>;<br/><span style="color: #d49f00;">console</span>.<span style="color: #9cdcfe;">log</span>(<span style="color: #ce9178;">\`Hello, \${name}!\`</span>);`,
            }}
          />
          <div
            className="code-snippet snippet-2"
            dangerouslySetInnerHTML={{
              __html: `<span style="color: #c586c0;">&lt;style&gt;</span><br/>&nbsp;&nbsp;<span style="color: #9cdcfe;">.coder</span> { <span style="color: #569cd6;">color</span>: <span style="color: #f472b6;">#f472b6</span>; }<br/><span style="color: #c586c0;">&lt;/style&gt;</span>`,
            }}
          />
          <div
            className="code-snippet snippet-3"
            dangerouslySetInnerHTML={{
              __html: `<span style="color: #c586c0;">public</span> <span style="color: #569cd6;">class</span> <span style="color: #4ec9b0;">HelloWorld</span> {<br/>&nbsp;&nbsp;<span style="color: #c586c0;">public static</span> <span style="color: #569cd6;">void</span> <span style="color: #dcdcaa;">main</span>(String[] args) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe;">System</span>.out.println(<span style="color: #ce9178;">"Java!"</span>);<br/>&nbsp;&nbsp;}<br/>}`,
            }}
          />
          <div
            className="code-snippet snippet-4"
            dangerouslySetInnerHTML={{
              __html: `<span style="color: #569cd6;">def</span> <span style="color: #dcdcaa;">fibonacci</span>(<span style="color: #9cdcfe;">n</span>):<br/>&nbsp;&nbsp;<span style="color: #9cdcfe;">a</span>, <span style="color: #9cdcfe;">b</span> = <span style="color: #b5cea8;">0</span>, <span style="color: #b5cea8;">1</span><br/>&nbsp;&nbsp;<span style="color: #c586c0;">while</span> a < n:<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #569cd6;">print</span>(a, end=<span style="color: #ce9178;">' '</span>)<br/>&nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a+b`,
            }}
          />
          {/* SVG Elements */}
          <BinaryTree className="binary-tree tree-1" />
          <BinaryTree className="binary-tree tree-2" />
          <LinkedList className="linked-list" />
          {/* Data Strings */}
          <div className="data-string string-1">char name[] = "Mahi";</div>
          <div className="data-string string-2">
            String[] skills = {("coding", "more coding", "and too much coding")}
            ;
          </div>
          {/* Floating Laptops */}
          <Laptop className="floating-laptop laptop-1" />
          <Laptop className="floating-laptop laptop-2" />
          // {/* Floating Keywords */}
          {/* // <div className="keyword keyword-1">React.js</div>
          // <div className="keyword keyword-2">Next.js</div>
          // <div className="keyword keyword-3">Express.js</div>
          // <div className="keyword keyword-4">TailwindCSS</div>
          // <div className="keyword keyword-5">MongoDB</div> */}
          {/* Other Elements */}
          <div className="system-design">
            Client &rarr; Load Balancer &rarr; Web Servers &rarr; DB
          </div>
          <Terminal />
        </div>
      </div>
    </>
  );
}
