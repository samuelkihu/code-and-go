import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Pencil } from "lucide-react";
import lessons from "./lessons";
import CodePlayground from "./CodePlayground";

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const index = lessons.findIndex((l) => l.id === lessonId);
  const lesson = lessons[index];

  if (!lesson) {
    return (
      <main className="max-w-5xl mx-auto px-4 pt-14 pb-24">
        <p className="font-mono text-[13px]" style={{ color: "#8A8270" }}>
          That lesson doesn't exist.
        </p>
        <Link to="/learn" className="font-mono text-[13px]" style={{ color: "#1B4B43" }}>
          Back to the syllabus
        </Link>
      </main>
    );
  }

  const prevLesson = index > 0 ? lessons[index - 1] : null;
  const nextLesson = index < lessons.length - 1 ? lessons[index + 1] : null;

  return (
    <main className="max-w-5xl mx-auto px-4 pt-14 pb-24">
      <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase" style={{ color: "#1B4B43" }}>
        <span className="inline-block w-6 h-px" style={{ background: "#1B4B43" }} />
        Lesson {String(index + 1).padStart(2, "0")} of {String(lessons.length).padStart(2, "0")}
      </div>

      <h1
        className="mt-4 text-[38px] leading-tight"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
      >
        {lesson.title}
      </h1>
      <p className="mt-2 text-[15px] mb-10" style={{ color: "#4A5248" }}>
        {lesson.summary}
      </p>

      <div className="flex flex-col gap-6">
        {lesson.blocks.map((block, i) => {
          if (block.type === "text") {
            return (
              <p key={i} className="text-[16px] leading-relaxed" style={{ color: "#1F2421" }}>
                {block.content}
              </p>
            );
          }
          if (block.type === "topic") {
            return (
              <div
                key={i}
                className="pl-4"
                style={{ borderLeft: "3px solid #C97B2E" }}
              >
                <h3
                  className="text-[17px] mb-1"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}
                >
                  {block.title}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "#4A5248" }}>
                  {block.content}
                </p>
              </div>
            );
          }
          return <CodePlayground key={i} initialCode={block.code} height={180} />;
        })}
      </div>

      {lesson.practice && (
        <div className="mt-14">
          <div className="flex items-center gap-2 mb-3">
            <Pencil size={15} style={{ color: "#C97B2E" }} />
            <span
              className="font-mono text-[11px] uppercase tracking-widest"
              style={{ color: "#C97B2E" }}
            >
              Try it yourself
            </span>
          </div>
          <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#1F2421" }}>
            {lesson.practice.prompt}
          </p>
          <CodePlayground initialCode={lesson.practice.starterCode} height={180} />
        </div>
      )}

      {lesson.recap && (
        <div
          className="mt-14 px-6 py-5 rounded-xl"
          style={{ background: "#1B4B43", border: "1px solid #1B4B43" }}
        >
          <p
            className="font-mono text-[11px] uppercase tracking-widest mb-2"
            style={{ color: "#B9CFC8" }}
          >
            Takeaway
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: "#EFE9DE" }}>
            {lesson.recap}
          </p>
        </div>
      )}

      {/* ---------------- Prev / Next ---------------- */}
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {prevLesson ? (
          <button
            onClick={() => navigate(`/learn/${prevLesson.id}`)}
            className="text-left px-5 py-4 rounded-xl"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)" }}
          >
            <div
              className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest mb-1"
              style={{ color: "#8A8270" }}
            >
              <ArrowLeft size={12} /> Previous
            </div>
            <div
              className="text-[16px]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}
            >
              {prevLesson.title}
            </div>
          </button>
        ) : (
          <Link
            to="/learn"
            className="text-left px-5 py-4 rounded-xl"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)" }}
          >
            <div
              className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest mb-1"
              style={{ color: "#8A8270" }}
            >
              <ArrowLeft size={12} /> Back
            </div>
            <div
              className="text-[16px]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#1F2421" }}
            >
              The syllabus
            </div>
          </Link>
        )}

        {nextLesson ? (
          <button
            onClick={() => navigate(`/learn/${nextLesson.id}`)}
            className="text-right px-5 py-4 rounded-xl"
            style={{ background: "#1B4B43", border: "1px solid #1B4B43" }}
          >
            <div
              className="flex items-center justify-end gap-1.5 font-mono text-[11px] uppercase tracking-widest mb-1"
              style={{ color: "#B9CFC8" }}
            >
              Next <ArrowRight size={12} />
            </div>
            <div
              className="text-[16px]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#EFE9DE" }}
            >
              {nextLesson.title}
            </div>
          </button>
        ) : (
          <Link
            to="/snippets"
            className="text-right px-5 py-4 rounded-xl"
            style={{ background: "#1B4B43", border: "1px solid #1B4B43" }}
          >
            <div
              className="flex items-center justify-end gap-1.5 font-mono text-[11px] uppercase tracking-widest mb-1"
              style={{ color: "#B9CFC8" }}
            >
              Done <ArrowRight size={12} />
            </div>
            <div
              className="text-[16px]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#EFE9DE" }}
            >
              Browse snippets
            </div>
          </Link>
        )}
      </div>
    </main>
  );
}
