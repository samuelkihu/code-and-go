import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Terminal } from "lucide-react";

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
`;

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "#1F2421" : "#4A5248",
  borderBottom: isActive ? "2px solid #C97B2E" : "2px solid transparent",
  paddingBottom: 4,
});

export default function Layout() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", color: "#1F2421" }}>
      <style>{FONT_IMPORT}</style>
      <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        {/* ---------------- Nav ---------------- */}
        <header
          className="sticky top-0 z-10 backdrop-blur"
          style={{ background: "rgba(255, 255, 255, 0.9)", borderBottom: "1px solid #DCD4C2" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: "#1B4B43" }}
              >
                <Terminal size={16} color="#f9f8f5" />
              </div>
              <span
                className="text-lg tracking-tight"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
              >
                Code &amp; Go.
              </span>
            </NavLink>

            <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wide">
              <NavLink to="/" end style={navLinkStyle}>Home</NavLink>
              <NavLink to="/learn" style={navLinkStyle}>Learn</NavLink>
              <NavLink to="/snippets" style={navLinkStyle}>Snippets</NavLink>
              <NavLink to="/playground" style={navLinkStyle}>Playground</NavLink>
            </nav>

            <NavLink
              to="/learn"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md text-[13px] font-medium font-mono"
              style={{ background: "#1B4B43", color: "#EFE9DE" }}
            >
              Get started
            </NavLink>
          </div>
        </header>

        {/* ---------------- Page content ---------------- */}
        <Outlet />

        {/* ---------------- Footer ---------------- */}
        <footer style={{ borderTop: "1px solid #DCD4C2" }}>
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-mono text-[12px]" style={{ color: "#8A8270" }}>
              Code &amp; Go. For more information, email us at <a href="mailto:skihu3010@gmail.com" style={{ color: "#1a4abb" }}>
                skihu3010@gmail.com
              </a>
            </span>
            <div className="flex gap-6 font-mono text-[12px]" style={{ color: "#13100a" }}>
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