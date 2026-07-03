import lessons from "./lessons";
import snippets from "./snippets";

// A flat, searchable index built from both content sources.
// Rebuilding this whenever lessons.js or snippets.js changes needs no
// extra work — it's just derived from the same arrays those pages already use.

function buildIndex() {
  const lessonEntries = lessons.map((lesson) => ({
    type: "lesson",
    id: lesson.id,
    title: lesson.title,
    subtitle: lesson.summary,
    path: `/learn/${lesson.id}`,
    // include topic titles so searching "closures" finds the right lesson
    searchText: [
      lesson.title,
      lesson.summary,
      ...lesson.blocks
        .filter((b) => b.type === "topic")
        .map((b) => `${b.title} ${b.content}`),
    ]
      .join(" ")
      .toLowerCase(),
  }));

  const snippetEntries = snippets.map((snippet) => ({
    type: "snippet",
    id: snippet.id,
    title: snippet.title,
    subtitle: snippet.language,
    path: `/snippets?q=${encodeURIComponent(snippet.title)}`,
    searchText: [snippet.title, snippet.description, snippet.language, ...snippet.tags]
      .join(" ")
      .toLowerCase(),
  }));

  return [...lessonEntries, ...snippetEntries];
}

const searchIndex = buildIndex();

export function search(query, limit = 8) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex.filter((entry) => entry.searchText.includes(q)).slice(0, limit);
}

export default searchIndex;
