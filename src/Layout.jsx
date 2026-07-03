import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
`;

// Two themes, switched by toggling the data-theme attribute on the outer
// wrapper. Every other component references these as var(--bg-card) /
// var(--border-card) instead of a hardcoded hex, so this is the only place
// theme colors are defined.
const THEME_VARS = `
[data-theme="parchment"] {
  --bg-page: #EFE9DE;
  --bg-page-translucent: rgba(239,233,222,0.9);
  --bg-card: #FBF8F1;
  --border-card: #DCD4C2;
}
[data-theme="light"] {
  --bg-page: #FFFFFF;
  --bg-page-translucent: rgba(255,255,255,0.9);
  --bg-card: #F7F7F5;
  --border-card: #E5E1D8;
}
`;

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "#1F2421" : "#4A5248",
  borderBottom: isActive ? "2px solid #C97B2E" : "2px solid transparent",
  paddingBottom: 4,
});

export default function Layout() {
  const { themeName, toggleTheme } = useTheme();

  return (
    <div
      data-theme={themeName}
      style={{ background: "var(--bg-page)", minHeight: "100vh", color: "#1F2421" }}
    >
      <style>{FONT_IMPORT}</style>
      <style>{THEME_VARS}</style>
      <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        {/* ---------------- Nav ---------------- */}
        <header
          className="sticky top-0 z-10 backdrop-blur"
          style={{ background: "var(--bg-page-translucent)", borderBottom: "1px solid var(--border-card)" }}
        >
          <div className="max-w-[1600px] mx-auto px-4 py-4 flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: "#1B4B43" }}
              >
                <Code2 size={16} color="#EFE9DE" />
              </div>
              <span
                className="text-lg tracking-tight"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
              >
                Codex &amp; Co.
              </span>
            </NavLink>

            <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wide">
              <NavLink to="/" end style={navLinkStyle}>Home</NavLink>
              <NavLink to="/learn" style={navLinkStyle}>Learn</NavLink>
              <NavLink to="/snippets" style={navLinkStyle}>Snippets</NavLink>
              <NavLink to="/playground" style={navLinkStyle}>Playground</NavLink>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle light theme"
                title={themeName === "parchment" ? "Switch to light theme" : "Switch to parchment theme"}
                className="w-8 h-8 rounded-md flex items-center justify-center"
                style={{ border: "1px solid var(--border-card)", background: "var(--bg-card)" }}
              >
                {themeName === "parchment" ? (
                  <Sun size={15} style={{ color: "#C97B2E" }} />
                ) : (
                  <Moon size={15} style={{ color: "#1B4B43" }} />
                )}
              </button>

              <NavLink
                to="/learn"
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-md text-[13px] font-medium font-mono"
                style={{ background: "#1B4B43", color: "#EFE9DE" }}
              >
                Get started
              </NavLink>
            </div>
          </div>
        </header>

        {/* ---------------- Page content ---------------- */}
        <Outlet />

        {/* ---------------- Footer ---------------- */}
        <footer style={{ borderTop: "1px solid var(--border-card)" }}>
          <div className="max-w-[1600px] mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-mono text-[12px]" style={{ color: "#8A8270" }}>
              Codex &amp; Co. — filed under: learning, code, curiosity.
            </span>
            <div className="flex gap-6 font-mono text-[12px]" style={{ color: "#8A8270" }}>
              <NavLink to="/learn">Learn</NavLink>
              <NavLink to="/snippets">Snippets</NavLink>
              <NavLink to="/playground">Playground</NavLink>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
