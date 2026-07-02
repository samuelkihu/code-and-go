import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import { Play, RotateCcw, Copy, Check } from "lucide-react";

// Custom token colors matched to the app palette, instead of a stock Prism
// theme — keeps the editor consistent with the rest of the design.
const TOKEN_STYLES = `
.token.comment { color: #5C665F; font-style: italic; }
.token.keyword { color: #C97B2E; }
.token.string { color: #9FD8B0; }
.token.function { color: #7FB8CB; }
.token.number { color: #E0A458; }
.token.boolean { color: #E0A458; }
.token.operator { color: #9CA79E; }
.token.punctuation { color: #9CA79E; }
.token.property { color: #7FB8CB; }
.token.template-string { color: #9FD8B0; }
.token.interpolation { color: #DCE3DE; }
.token.parameter { color: #DCE3DE; }
`;

const highlightCode = (code) =>
  Prism.highlight(code, Prism.languages.javascript, "javascript");

/**
 * Reusable JS playground with syntax highlighting.
 * Props:
 *  - initialCode: string, the starting code shown in the editor
 *  - height: optional number, editor min-height in px (default 220)
 *
 * Usage:
 *  <CodePlayground initialCode={`console.log("hi")`} />
 */
export default function CodePlayground({ initialCode = "", height = 220 }) {
  const [code, setCode] = useState(initialCode);
  const [logs, setLogs] = useState([]);
  const [copied, setCopied] = useState(false);

  const runCode = () => {
    const captured = [];

    const push = (type) => (...args) => {
      captured.push({
        type,
        text: args
          .map((a) => {
            if (typeof a === "object") {
              try {
                return JSON.stringify(a, null, 2);
              } catch {
                return String(a);
              }
            }
            return String(a);
          })
          .join(" "),
      });
    };

    const original = {
      log: console.log,
      error: console.error,
      warn: console.warn,
    };
    console.log = push("log");
    console.error = push("error");
    console.warn = push("warn");

    try {
      // eslint-disable-next-line no-new-func
      const runner = new Function(code);
      runner();
    } catch (err) {
      captured.push({ type: "error", text: err.message });
    } finally {
      console.log = original.log;
      console.error = original.error;
      console.warn = original.warn;
    }

    if (captured.length === 0) {
      captured.push({ type: "muted", text: "No output. Try console.log(...) something." });
    }

    setLogs(captured);
  };

  const resetCode = () => {
    setCode(initialCode);
    setLogs([]);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg"
      style={{ background: "#161B18", border: "1px solid #2A322D" }}
    >
      <style>{TOKEN_STYLES}</style>

      {/* ---------------- Toolbar ---------------- */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ borderBottom: "1px solid #2A322D" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C97B2E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4A5A52" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4A5A52" }} />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={copyCode}
            className="flex items-center gap-1 font-mono text-[11px]"
            style={{ color: "#9CA79E" }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "copied" : "copy"}
          </button>
          <button
            onClick={resetCode}
            className="flex items-center gap-1 font-mono text-[11px]"
            style={{ color: "#9CA79E" }}
          >
            <RotateCcw size={12} />
            reset
          </button>
          <button
            onClick={runCode}
            className="flex items-center gap-1.5 font-mono text-[12px] font-medium px-3 py-1 rounded"
            style={{ background: "#1B4B43", color: "#EFE9DE" }}
          >
            <Play size={12} />
            run
          </button>
        </div>
      </div>

      {/* ---------------- Editor ---------------- */}
      <div style={{ minHeight: height, maxHeight: height * 2, overflowY: "auto" }}>
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={highlightCode}
          padding={16}
          textareaId="code-editor-textarea"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 13,
            lineHeight: 1.6,
            minHeight: height,
            color: "#DCE3DE",
            caretColor: "#EFE9DE",
          }}
        />
      </div>

      {/* ---------------- Output ---------------- */}
      <div style={{ borderTop: "1px solid #2A322D" }}>
        <div
          className="px-4 pt-2 pb-1 font-mono text-[10px] uppercase tracking-widest"
          style={{ color: "#5C665F" }}
        >
          Console
        </div>
        <div className="px-4 pb-4 font-mono text-[13px] leading-relaxed min-h-[60px] max-h-[200px] overflow-y-auto">
          {logs.length === 0 && (
            <div style={{ color: "#5C665F" }}>Press run to see output here.</div>
          )}
          {logs.map((log, i) => (
            <div
              key={i}
              style={{
                color:
                  log.type === "error" ? "#E08A5F" : log.type === "muted" ? "#5C665F" : "#DCE3DE",
                whiteSpace: "pre-wrap",
              }}
            >
              {log.type === "error" ? "✗ " : "› "}
              {log.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}