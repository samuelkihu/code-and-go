import React, { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Copy, Check, Terminal, ExternalLink, GraduationCap, ArrowRight } from "lucide-react";
import snippets from "./snippets";
import lessons from "./lessons";
import { highlightForLanguage, TOKEN_STYLES } from "./prismSetup";

const EXTERNAL_RESOURCES = [
  {
    name: "MDN Web Docs",
    type: "Reference",
    description:
      "The most reliable reference for JavaScript, HTML, and CSS — good for looking up exactly how something works, with runnable examples.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "javascript.info",
    type: "Reading",
    description:
      "A free, thorough walkthrough of JavaScript from the basics up through trickier topics like closures and async patterns.",
    url: "https://javascript.info/",
  },
  {
    name: "freeCodeCamp",
    type: "Course",
    description:
      "Free, project-based curriculum with a large JavaScript and web development track — good if you want structured, hands-on practice.",
    url: "https://www.freecodecamp.org/",
  },
  {
    name: "Traversy Media (YouTube)",
    type: "Video",
    description:
      "Practical, project-driven JavaScript and web dev videos — crash courses are a good way to see concepts used in a real build.",
    url: "https://www.youtube.com/@TraversyMedia",
  },
  {
    name: "Fireship (YouTube)",
    type: "Video",
    description:
      "Short, fast-paced videos that explain a concept or tool in a few minutes — useful once you know the basics and want the bigger picture quickly.",
    url: "https://www.youtube.com/@Fireship",
  },
  {
    name: "The Odin Project",
    type: "Course",
    description:
      "A free, full curriculum that goes beyond just JavaScript into building and deploying real projects, if you want to keep going past the basics.",
    url: "https://www.theodinproject.com/",
  },
];

const LANGUAGES = ["All", ...Array.from(new Set(snippets.map((s) => s.language)))];

function LanguagePill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-3 py-2 rounded-md font-mono text-[13px] transition-colors"
      style={{
        background: active ? "#1B4B43" : "transparent",
        color: active ? "#EFE9DE" : "#4A5248",
      }}
    >
      {label}
    </button>
  );
}

function SnippetRow({ snippet, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-5 py-4 rounded-lg transition-colors"
      style={{
        background: active ? "#FBF8F1" : "transparent",
        border: active ? "1px solid #DCD4C2" : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <h3
          className="text-[16px]"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}
        >
          {snippet.title}
        </h3>
        <span
          className="shrink-0 font-mono text-[11px] px-2 py-0.5 rounded"
          style={{ background: "#DCD4C2", color: "#1B4B43" }}
        >
          {snippet.language}
        </span>
      </div>
      <p className="mt-1 text-[13px] leading-relaxed" style={{ color: "#4A5248" }}>
        {snippet.description}
      </p>
    </button>
  );
}

function DetailPanel({ snippet }) {
  const [copied, setCopied] = useState(false);

  if (!snippet) {
    return (
      <div
        className="h-full flex flex-col items-center justify-center text-center px-8 py-20 rounded-xl"
        style={{ background: "#FBF8F1", border: "1px dashed #C7BCA3" }}
      >
        <Terminal size={22} style={{ color: "#8A8270" }} />
        <p className="mt-3 font-mono text-[13px]" style={{ color: "#8A8270" }}>
          Select a card to view its code
        </p>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <style>{TOKEN_STYLES}</style>
      <div className="flex items-center gap-2 mb-1">
        <span
          className="font-mono text-[11px] px-2 py-0.5 rounded"
          style={{ background: "#DCD4C2", color: "#1B4B43" }}
        >
          {snippet.language}
        </span>
        {snippet.tags.map((tag) => (
          <span key={tag} className="font-mono text-[11px]" style={{ color: "#8A8270" }}>
            #{tag}
          </span>
        ))}
      </div>
      <h2
        className="text-2xl mt-2 mb-2"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, color: "#1F2421" }}
      >
        {snippet.title}
      </h2>
      <p className="text-[15px] leading-relaxed mb-5" style={{ color: "#4A5248" }}>
        {snippet.description}
      </p>

      <div
        className="rounded-lg overflow-hidden shadow-lg"
        style={{ background: "#161B18", border: "1px solid #2A322D" }}
      >
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ borderBottom: "1px solid #2A322D" }}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C97B2E" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4A5A52" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4A5A52" }} />
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 font-mono text-[11px]"
            style={{ color: "#9CA79E" }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "copied" : "copy"}
          </button>
        </div>
        <pre
          className="px-4 py-4 font-mono text-[13px] leading-relaxed whitespace-pre-wrap overflow-x-auto"
          style={{ color: "#DCE3DE" }}
          dangerouslySetInnerHTML={{
            __html: highlightForLanguage(snippet.code, snippet.language),
          }}
        />
      </div>

      {snippet.relatedLesson && (
        <Link
          to={`/learn/${snippet.relatedLesson}`}
          className="mt-4 flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-transform duration-200 hover:-translate-y-0.5"
          style={{ background: "#FBF8F1", border: "1px solid #DCD4C2" }}
        >
          <div className="flex items-center gap-3">
            <GraduationCap size={16} style={{ color: "#1B4B43" }} />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#8A8270" }}>
                Related lesson
              </div>
              <div className="text-[14px]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}>
                {lessons.find((l) => l.id === snippet.relatedLesson)?.title}
              </div>
            </div>
          </div>
          <ArrowRight size={14} style={{ color: "#1B4B43" }} />
        </Link>
      )}
    </div>
  );
}

export default function SnippetsPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const matchedById = snippets.find(
    (s) => s.title.toLowerCase() === initialQuery.toLowerCase()
  );

  const [query, setQuery] = useState(initialQuery);
  const [language, setLanguage] = useState("All");
  const [selectedId, setSelectedId] = useState(
    matchedById?.id ?? snippets[0]?.id ?? null
  );

  const filtered = useMemo(() => {
    return snippets.filter((s) => {
      const matchesLanguage = language === "All" || s.language === language;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q));
      return matchesLanguage && matchesQuery;
    });
  }, [query, language]);

  const selected = snippets.find((s) => s.id === selectedId) || filtered[0] || null;

  return (
    <main className="max-w-[1600px] mx-auto px-4 pt-14 pb-24">
      <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase" style={{ color: "#1B4B43" }}>
        <span className="inline-block w-6 h-px" style={{ background: "#1B4B43" }} />
        No. 020 — Snippets
      </div>
      <h1
        className="mt-4 text-[36px] leading-tight"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
      >
        The drawer
      </h1>
      <p className="mt-2 text-[15px] max-w-2xl mb-8" style={{ color: "#4A5248" }}>
        Over twenty working snippets across JavaScript, React, Python, CSS,
        HTML, SQL, and Git — search by name, tag, or description, filter by
        language in the sidebar, and copy anything straight into your own
        project. Every snippet includes a short explanation of what it does
        and why you'd reach for it.
      </p>

      <div className="grid md:grid-cols-[180px_1fr_1fr] gap-6 items-start">
        {/* ---------------- Sidebar: filters ---------------- */}
        <aside
          className="rounded-xl p-3"
          style={{ background: "#FBF8F1", border: "1px solid #DCD4C2" }}
        >
          <p
            className="px-3 pt-2 pb-3 font-mono text-[11px] uppercase tracking-widest"
            style={{ color: "#8A8270" }}
          >
            Language
          </p>
          <div className="flex flex-col gap-1">
            {LANGUAGES.map((lang) => (
              <LanguagePill
                key={lang}
                label={lang}
                active={language === lang}
                onClick={() => setLanguage(lang)}
              />
            ))}
          </div>
        </aside>

        {/* ---------------- List ---------------- */}
        <div>
          <div
            className="flex items-center gap-2 mb-4 px-4 py-2.5 rounded-md"
            style={{ background: "#FBF8F1", border: "1px solid #DCD4C2" }}
          >
            <Search size={15} style={{ color: "#8A8270" }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search snippets…"
              className="bg-transparent outline-none text-[13px] font-mono w-full"
              style={{ color: "#1F2421" }}
            />
          </div>

          <div className="flex flex-col gap-1 max-h-[560px] overflow-y-auto pr-1">
            {filtered.length === 0 && (
              <p className="px-4 py-6 font-mono text-[13px]" style={{ color: "#8A8270" }}>
                No snippets match that search.
              </p>
            )}
            {filtered.map((s) => (
              <SnippetRow
                key={s.id}
                snippet={s}
                active={selected?.id === s.id}
                onClick={() => setSelectedId(s.id)}
              />
            ))}
          </div>
        </div>

        {/* ---------------- Detail ---------------- */}
        <div className="md:sticky md:top-24">
          <DetailPanel snippet={selected} />
        </div>
      </div>

      {/* ---------------- Keep learning elsewhere ---------------- */}
      <div className="mt-20">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase mb-3" style={{ color: "#1B4B43" }}>
          <span className="inline-block w-6 h-px" style={{ background: "#1B4B43" }} />
          Keep learning elsewhere
        </div>
        <p className="text-[15px] leading-relaxed max-w-2xl mb-6" style={{ color: "#4A5248" }}>
          This drawer is meant for quick reference, not a full course. When
          you want to go deeper on something, these are solid places to
          continue — a mix of reference docs, free courses, and video
          explainers.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTERNAL_RESOURCES.map((res) => (
            <a
              key={res.name}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-4 rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "#FBF8F1", border: "1px solid #DCD4C2" }}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span
                  className="font-mono text-[11px] px-2 py-0.5 rounded"
                  style={{ background: "#DCD4C2", color: "#1B4B43" }}
                >
                  {res.type}
                </span>
                <ExternalLink size={13} style={{ color: "#8A8270" }} />
              </div>
              <h4
                className="text-[15px] mb-1"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}
              >
                {res.name}
              </h4>
              <p className="text-[13px] leading-relaxed" style={{ color: "#4A5248" }}>
                {res.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
