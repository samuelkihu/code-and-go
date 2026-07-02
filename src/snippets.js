// A small hand-picked library of snippets.
// Add more objects to this array to expand the drawer — no other files need to change.

const snippets = [
  {
    id: "js-debounce",
    title: "Debounce a function",
    language: "JavaScript",
    tags: ["functions", "performance", "events"],
    description:
      "Delays running a function until a pause in calls — handy for search inputs or resize handlers.",
    code: `function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// usage
const onSearch = debounce((query) => {
  console.log("searching for", query);
}, 400);`,
  },
  {
    id: "js-fetch-json",
    title: "Fetch JSON with error handling",
    language: "JavaScript",
    tags: ["fetch", "async", "api"],
    description:
      "A small wrapper around fetch that throws on non-2xx responses and returns parsed JSON.",
    code: `async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(\`Request failed: \${res.status}\`);
  }
  return res.json();
}

// usage
getJSON("/api/users")
  .then((users) => console.log(users))
  .catch((err) => console.error(err));`,
  },
  {
    id: "react-usedebounce",
    title: "useDebounce hook",
    language: "React",
    tags: ["hooks", "performance", "state"],
    description:
      "A reusable hook that debounces a piece of state — great for live search fields.",
    code: `import { useState, useEffect } from "react";

function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default useDebounce;`,
  },
  {
    id: "py-read-csv",
    title: "Read a CSV into dictionaries",
    language: "Python",
    tags: ["files", "csv", "data"],
    description:
      "Reads a CSV file where the first row is the header, returning a list of row dictionaries.",
    code: `import csv

def read_csv(path):
    with open(path, newline="") as f:
        reader = csv.DictReader(f)
        return [row for row in reader]

# usage
rows = read_csv("people.csv")
print(rows[0]["name"])`,
  },
  {
    id: "py-binary-search",
    title: "Binary search",
    language: "Python",
    tags: ["algorithms", "search"],
    description:
      "Classic binary search on a sorted list — returns the index or -1 if not found.",
    code: `def binary_search(items, target):
    lo, hi = 0, len(items) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if items[mid] == target:
            return mid
        if items[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

# usage
binary_search([1, 3, 5, 9, 12], 9)  # -> 3`,
  },
  {
    id: "css-center-flex",
    title: "Perfectly center anything",
    language: "CSS",
    tags: ["layout", "flexbox"],
    description:
      "The three lines everyone reaches for to center content both ways with flexbox.",
    code: `.center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}`,
  },
  {
    id: "css-truncate-text",
    title: "Truncate text with an ellipsis",
    language: "CSS",
    tags: ["typography", "layout"],
    description:
      "Cuts off overflowing single-line text and adds '…' at the end.",
    code: `.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
  },
  {
    id: "html-semantic-form",
    title: "Accessible form field",
    language: "HTML",
    tags: ["forms", "accessibility"],
    description:
      "A properly labeled input with a linked hint — screen-reader friendly out of the box.",
    code: `<label for="email">Email</label>
<input
  id="email"
  name="email"
  type="email"
  aria-describedby="email-hint"
  required
/>
<p id="email-hint">We'll never share your email.</p>`,
  },
  {
    id: "sql-group-count",
    title: "Count rows per group",
    language: "SQL",
    tags: ["aggregation", "group by"],
    description:
      "Counts how many orders each customer has placed, sorted by the busiest customers first.",
    code: `SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
ORDER BY order_count DESC;`,
  },
  {
    id: "js-deep-clone",
    title: "Deep clone an object",
    language: "JavaScript",
    tags: ["objects", "cloning"],
    description:
      "Makes a full copy of a nested object so edits to the copy never touch the original.",
    code: `function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = { user: { name: "Ada", tags: ["math", "logic"] } };
const copy = deepClone(original);
copy.user.name = "Grace";

console.log(original.user.name); // "Ada" — untouched
console.log(copy.user.name);     // "Grace"`,
  },
  {
    id: "js-group-by",
    title: "Group an array by a key",
    language: "JavaScript",
    tags: ["arrays", "grouping"],
    description:
      "Turns a flat array into an object of arrays, bucketed by a shared property.",
    code: `function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = item[key];
    groups[value] = groups[value] || [];
    groups[value].push(item);
    return groups;
  }, {});
}

const people = [
  { name: "Ada", role: "engineer" },
  { name: "Grace", role: "engineer" },
  { name: "Alan", role: "researcher" },
];

console.log(groupBy(people, "role"));`,
  },
  {
    id: "js-local-storage",
    title: "Save and load from localStorage",
    language: "JavaScript",
    tags: ["storage", "persistence"],
    description:
      "Wraps localStorage with JSON parsing so you can store and retrieve real objects, not just strings.",
    code: `function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadData(key, fallback = null) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}

// usage
saveData("preferences", { theme: "dark" });
console.log(loadData("preferences"));`,
  },
  {
    id: "react-usefetch",
    title: "useFetch hook",
    language: "React",
    tags: ["hooks", "async", "api"],
    description:
      "A small hook that fetches data on mount and tracks loading and error state for you.",
    code: `import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;`,
  },
  {
    id: "react-toggle-hook",
    title: "useToggle hook",
    language: "React",
    tags: ["hooks", "state"],
    description:
      "A tiny hook for boolean state you flip back and forth — modals, dropdowns, checkboxes.",
    code: `import { useState, useCallback } from "react";

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle];
}

export default useToggle;

// usage
// const [isOpen, toggleOpen] = useToggle();`,
  },
  {
    id: "py-flatten-list",
    title: "Flatten a nested list",
    language: "Python",
    tags: ["lists", "recursion"],
    description:
      "Recursively flattens a list of lists (any depth) into one flat list.",
    code: `def flatten(items):
    result = []
    for item in items:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

# usage
flatten([1, [2, 3, [4, 5]], 6])  # -> [1, 2, 3, 4, 5, 6]`,
  },
  {
    id: "py-word-count",
    title: "Count word frequency",
    language: "Python",
    tags: ["strings", "dictionaries"],
    description:
      "Splits text into words and counts how many times each one appears.",
    code: `from collections import Counter

def word_count(text):
    words = text.lower().split()
    return Counter(words)

# usage
counts = word_count("the quick fox jumps over the lazy fox")
print(counts.most_common(2))  # [('the', 2), ('fox', 2)]`,
  },
  {
    id: "css-custom-scrollbar",
    title: "Style a scrollbar",
    language: "CSS",
    tags: ["scrollbar", "styling"],
    description:
      "A thin, subtle scrollbar for a scrollable panel, instead of the browser default.",
    code: `.scroll-panel::-webkit-scrollbar {
  width: 8px;
}

.scroll-panel::-webkit-scrollbar-thumb {
  background: #C7BCA3;
  border-radius: 8px;
}

.scroll-panel::-webkit-scrollbar-track {
  background: transparent;
}`,
  },
  {
    id: "css-grid-responsive-cards",
    title: "Responsive card grid",
    language: "CSS",
    tags: ["layout", "grid", "responsive"],
    description:
      "A card grid that adds columns as the screen gets wider — no media queries needed.",
    code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}`,
  },
  {
    id: "html-lazy-image",
    title: "Lazy-load an image",
    language: "HTML",
    tags: ["images", "performance"],
    description:
      "Defers loading an offscreen image until the browser needs it, using a native attribute.",
    code: `<img
  src="/photos/mountains.jpg"
  alt="Mountains at sunrise"
  loading="lazy"
  width="800"
  height="500"
/>`,
  },
  {
    id: "sql-join-basics",
    title: "Join two tables",
    language: "SQL",
    tags: ["joins", "relationships"],
    description:
      "Combines rows from two related tables, matching orders to the customer who placed them.",
    code: `SELECT orders.id, customers.name, orders.total
FROM orders
JOIN customers ON orders.customer_id = customers.id
ORDER BY orders.total DESC;`,
  },
  {
    id: "git-undo-last-commit",
    title: "Undo the last commit",
    language: "Git",
    tags: ["commits", "undo"],
    description:
      "Removes the most recent commit but keeps your changes staged, so you can fix and recommit.",
    code: `git reset --soft HEAD~1

# changes from the undone commit are now staged,
# ready to edit and commit again`,
  },
  {
    id: "git-stash-quick",
    title: "Stash and restore changes",
    language: "Git",
    tags: ["stash", "workflow"],
    description:
      "Temporarily shelves uncommitted changes so you can switch branches, then brings them back.",
    code: `git stash          # save current changes, clean working directory
git checkout main  # switch branches safely
git stash pop      # bring your changes back`,
  },
];

export default snippets;