import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-bash";

// Maps the human-readable language labels used in snippets.js / lessons.js
// to the Prism grammar key that should highlight them.
const LANGUAGE_MAP = {
  JavaScript: "javascript",
  React: "jsx",
  Python: "python",
  CSS: "css",
  HTML: "markup",
  SQL: "sql",
  Git: "bash",
};

export function highlightForLanguage(code, languageLabel) {
  const grammarKey = LANGUAGE_MAP[languageLabel] || "javascript";
  const grammar = Prism.languages[grammarKey] || Prism.languages.javascript;
  return Prism.highlight(code, grammar, grammarKey);
}

export const highlightJS = (code) =>
  Prism.highlight(code, Prism.languages.javascript, "javascript");

// Custom token colors matched to the app palette, instead of a stock Prism
// theme — keeps every code block consistent with the rest of the design.
export const TOKEN_STYLES = `
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
.token.selector { color: #C97B2E; }
.token.tag { color: #C97B2E; }
.token.attr-name { color: #7FB8CB; }
.token.attr-value { color: #9FD8B0; }
.token.class-name { color: #7FB8CB; }
.token.builtin { color: #7FB8CB; }
.token.important { color: #C97B2E; }
`;