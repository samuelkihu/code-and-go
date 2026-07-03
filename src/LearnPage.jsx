import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import lessons from "./lessons";

export default function LearnPage() {
  const navigate = useNavigate();

  return (
    <main className="max-w-6xl mx-auto px-4 pt-14 pb-24">
      <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase" style={{ color: "#1B4B43" }}>
        <span className="inline-block w-6 h-px" style={{ background: "#1B4B43" }} />
        No. 010 — Learn
      </div>
      <h1
        className="mt-4 text-[36px] leading-tight"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
      >
        The syllabus
      </h1>
      <p className="mt-2 text-[15px] max-w-2xl mb-10" style={{ color: "#4A5248" }}>
        Fourteen lessons, laid out in order — from your first look at a code
        editor all the way through classes, promises, and the more
        specialized corners of the language. Each one groups a set of
        related topics with a short note on every one, so you can read it
        front to back or jump straight to the section you need.
      </p>

      <div className="flex flex-col gap-3">
        {lessons.map((lesson, i) => (
          <button
            key={lesson.id}
            onClick={() => navigate(`/learn/${lesson.id}`)}
            className="text-left flex items-center justify-between gap-4 px-6 py-5 rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              boxShadow: "0 1px 0 var(--border-card)",
            }}
          >
            <div className="flex items-center gap-5">
              <span
                className="font-mono text-[13px]"
                style={{ color: "#8A8270" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  className="text-[18px]"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}
                >
                  {lesson.title}
                </h3>
                <p className="text-[13px] mt-0.5" style={{ color: "#4A5248" }}>
                  {lesson.summary}
                </p>
              </div>
            </div>
            <ArrowRight size={16} style={{ color: "#1B4B43" }} className="shrink-0" />
          </button>
        ))}
      </div>

      {/* ---------------- Journey / what's next ---------------- */}
      <div className="mt-16">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase mb-5" style={{ color: "#1B4B43" }}>
          <span className="inline-block w-6 h-px" style={{ background: "#1B4B43" }} />
          Your journey through this site
        </div>

        <p className="text-[15px] leading-relaxed max-w-2xl mb-8" style={{ color: "#4A5248" }}>
          These fourteen lessons cover the language end to end, but reading
          about something and actually using it are different skills. Every
          lesson leans on the same live playground you'll use everywhere
          else on the site, so the habit of running code as you go carries
          over naturally once you're done here.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          <div
            className="px-5 py-5 rounded-xl"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)" }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[12px] mb-3"
              style={{ background: "#1B4B43", color: "#EFE9DE" }}
            >
              1
            </div>
            <h4
              className="text-[15px] mb-1"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}
            >
              Work through the syllabus
            </h4>
            <p className="text-[13px] leading-relaxed" style={{ color: "#4A5248" }}>
              Front to back if you're new to JavaScript, or jump to whatever
              lesson covers what you're stuck on. Each one ends with a
              "Takeaway" box worth re-reading before moving on.
            </p>
          </div>

          <div
            className="px-5 py-5 rounded-xl"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)" }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[12px] mb-3"
              style={{ background: "#1B4B43", color: "#EFE9DE" }}
            >
              2
            </div>
            <h4
              className="text-[15px] mb-1"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}
            >
              Browse the snippets
            </h4>
            <p className="text-[13px] leading-relaxed" style={{ color: "#4A5248" }}>
              See these same ideas as real, working code — across more
              languages than just JavaScript — and pick up external
              resources if you want to go even deeper on something.
            </p>
          </div>

          <div
            className="px-5 py-5 rounded-xl"
            style={{ background: "#1B4B43", border: "1px solid #1B4B43" }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[12px] mb-3"
              style={{ background: "#EFE9DE", color: "#1B4B43" }}
            >
              3
            </div>
            <h4
              className="text-[15px] mb-1"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#EFE9DE" }}
            >
              Build in the Playground
            </h4>
            <p className="text-[13px] leading-relaxed" style={{ color: "#B9CFC8" }}>
              This is where lessons and snippets stop being separate things —
              combine what you've learned with what you've borrowed, and
              write something of your own from scratch.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
