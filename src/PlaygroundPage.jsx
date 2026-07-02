import React from "react";
import CodePlayground from "./CodePlayground";

const STARTER_CODE = `// Try editing this, then hit run.
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("world"));

for (let i = 1; i <= 3; i++) {
  console.log("count:", i);
}`;

export default function PlaygroundPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-14 pb-24">
      <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase" style={{ color: "#1B4B43" }}>
        <span className="inline-block w-6 h-px" style={{ background: "#1B4B43" }} />
        No. 030  Playground
      </div>
      <h1
        className="mt-4 text-[36px] leading-tight"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
      >
        Run it live
      </h1>
      <p className="mt-2 text-[15px] max-w-lg mb-8" style={{ color: "#4A5248" }}>
        Write JavaScript, hit run, and see the console output right below.
        Nothing leaves your browser.
      </p>

      <CodePlayground initialCode={STARTER_CODE} height={260} />
    </main>
  );
}