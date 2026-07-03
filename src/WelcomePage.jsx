import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Terminal, ArrowRight, Search, Copy, Check, FileCode, GraduationCap } from "lucide-react";
import { search } from "./searchIndex";

function CatalogTag({ n, label }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase" style={{ color: "#1B4B43" }}>
      <span className="inline-block w-6 h-px" style={{ background: "#1B4B43" }} />
      No. {n} — {label}
    </div>
  );
}

function CodeChip() {
  const [copied, setCopied] = useState(false);
  const snippet = `function greet(name) {\n  return \`Hello, \${name}\`;\n}`;

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg"
      style={{ background: "#161B18", border: "1px solid #2A322D" }}
    >
      <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: "1px solid #2A322D" }}>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C97B2E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4A5A52" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4A5A52" }} />
        </div>
        <button
          onClick={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="flex items-center gap-1 font-mono text-[11px]"
          style={{ color: "#9CA79E" }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="px-4 py-4 font-mono text-[13px] leading-relaxed whitespace-pre-wrap" style={{ color: "#DCE3DE" }}>
        {snippet}
      </pre>
    </div>
  );
}

function IndexCard({ n, label, icon, title, body, cta, onClick }) {
  return (
    <div
      className="relative rounded-xl p-7 transition-transform duration-200 hover:-translate-y-1"
      style={{
        background: "#FBF8F1",
        border: "1px solid #DCD4C2",
        boxShadow: "0 1px 0 #DCD4C2, 0 12px 24px -18px rgba(31,36,33,0.35)",
      }}
    >
      <CatalogTag n={n} label={label} />
      <div
        className="mt-5 mb-4 w-11 h-11 rounded-lg flex items-center justify-center"
        style={{ background: "#1B4B43" }}
      >
        {icon}
      </div>
      <h3
        className="text-2xl mb-2"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}
      >
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed mb-5" style={{ color: "#4A5248" }}>
        {body}
      </p>
      <button
        onClick={onClick}
        className="inline-flex items-center gap-1.5 font-mono text-[13px] font-medium"
        style={{ color: "#1B4B43" }}
      >
        {cta} <ArrowRight size={14} />
      </button>
    </div>
  );
}

export default function WelcomePage() {
  const [query, setQuery] = useState("");
  const results = search(query);
  const navigate = useNavigate();

  return (
    <main className="max-w-[1600px] mx-auto px-4">
      <section className="grid md:grid-cols-2 gap-14 items-center pt-20 pb-24">
        <div>
          <CatalogTag n="001" label="Welcome" />
          <h1
            className="mt-5 text-[44px] sm:text-[54px] leading-[1.05]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
          >
            A card catalog<br />
            for learning<br />
            <span style={{ fontStyle: "italic", color: "#1B4B43" }}>JavaScript.</span>
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed max-w-lg" style={{ color: "#4A5248" }}>
            Fourteen lessons walk you through the whole language — from your
            first variable to classes, promises, and the more specialized
            corners most tutorials skip. A live playground sits inside every
            page so you're never just reading — you're running real code
            and watching it work. Alongside the lessons sits a growing
            drawer of snippets across JavaScript, Python, CSS, HTML, SQL,
            and Git: clean, working examples you can search, copy, and drop
            straight into your own projects. No setup, no signup, nothing
            to install — everything here runs directly in your browser.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/learn")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium"
              style={{ background: "#1B4B43", color: "#EFE9DE" }}
            >
              Start learning <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate("/snippets")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium"
              style={{ background: "transparent", color: "#1F2421", border: "1px solid #C7BCA3" }}
            >
              Browse snippets
            </button>
          </div>

          <div className="relative mt-9 max-w-sm">
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-md"
              style={{ background: "#FBF8F1", border: "1px solid #DCD4C2" }}
            >
              <Search size={15} style={{ color: "#8A8270" }} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 'useEffect', 'binary search'…"
                className="bg-transparent outline-none text-[13px] font-mono w-full"
                style={{ color: "#1F2421" }}
              />
            </div>

            {query.trim() && (
              <div
                className="absolute left-0 right-0 mt-2 rounded-md overflow-hidden shadow-lg z-20"
                style={{ background: "#FBF8F1", border: "1px solid #DCD4C2" }}
              >
                {results.length === 0 ? (
                  <div className="px-4 py-3 font-mono text-[12px]" style={{ color: "#8A8270" }}>
                    No matches for "{query}".
                  </div>
                ) : (
                  results.map((r) => (
                    <button
                      key={`${r.type}-${r.id}`}
                      onClick={() => {
                        navigate(r.path);
                        setQuery("");
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left"
                      style={{ borderBottom: "1px solid #DCD4C2" }}
                    >
                      {r.type === "lesson" ? (
                        <GraduationCap size={14} style={{ color: "#1B4B43" }} className="shrink-0" />
                      ) : (
                        <FileCode size={14} style={{ color: "#1B4B43" }} className="shrink-0" />
                      )}
                      <div className="min-w-0">
                        <div className="text-[13px] truncate" style={{ color: "#1F2421" }}>
                          {r.title}
                        </div>
                        <div className="font-mono text-[11px] truncate" style={{ color: "#8A8270" }}>
                          {r.type === "lesson" ? "Lesson" : r.subtitle}
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -top-4 -left-4 w-full h-full rounded-xl"
            style={{ background: "#DCD4C2" }}
          />
          <div className="relative">
            <CodeChip />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase mb-6" style={{ color: "#1B4B43" }}>
          <span className="inline-block w-6 h-px" style={{ background: "#1B4B43" }} />
          How it works
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[13px] mb-3"
              style={{ background: "#1B4B43", color: "#EFE9DE" }}
            >
              1
            </div>
            <h4 className="text-[16px] mb-1" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>
              Pick a starting point
            </h4>
            <p className="text-[14px] leading-relaxed" style={{ color: "#4A5248" }}>
              Work through the lessons in order if JavaScript is new to you,
              or jump straight to the snippet drawer if you already know
              roughly what you're looking for.
            </p>
          </div>
          <div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[13px] mb-3"
              style={{ background: "#1B4B43", color: "#EFE9DE" }}
            >
              2
            </div>
            <h4 className="text-[16px] mb-1" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>
              Read a little, run a little
            </h4>
            <p className="text-[14px] leading-relaxed" style={{ color: "#4A5248" }}>
              Every code example is a live, editable playground — change
              something, hit run, and watch the console output update
              instantly, right there on the page.
            </p>
          </div>
          <div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[13px] mb-3"
              style={{ background: "#1B4B43", color: "#EFE9DE" }}
            >
              3
            </div>
            <h4 className="text-[16px] mb-1" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>
              Carry it into your own code
            </h4>
            <p className="text-[14px] leading-relaxed" style={{ color: "#4A5248" }}>
              Copy any snippet with one click, or keep experimenting in the
              standalone Playground until you're ready to drop it into a
              real project.
            </p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 pb-24">
        <IndexCard
          n="002"
          label="Learn"
          icon={<BookOpen size={20} color="#EFE9DE" />}
          title="Guided lessons"
          body="Fourteen lessons that cover the whole language — from your first variable to classes, promises, and the specialized corners most tutorials skip. Every lesson groups related topics with a short note on each one, so you always know what to read next."
          cta="View the syllabus"
          onClick={() => navigate("/learn")}
        />
        <IndexCard
          n="003"
          label="Snippets"
          icon={<Terminal size={20} color="#EFE9DE" />}
          title="Working code, ready to borrow"
          body="A searchable library of over twenty clean, tested snippets spanning JavaScript, React, Python, CSS, HTML, SQL, and Git. Filter by language, search by name or tag, and every snippet opens with real syntax highlighting and a one-click copy — ready to paste straight into your own project."
          cta="Open the drawer"
          onClick={() => navigate("/snippets")}
        />
      </section>
    </main>
  );
}
