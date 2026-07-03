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
  {
    id: "js-array-unique",
    title: "Remove duplicates from an array",
    language: "JavaScript",
    tags: ["arrays", "sets"],
    description:
      "Uses a Set to strip duplicate values while keeping the array's original order.",
    code: `function unique(arr) {
  return [...new Set(arr)];
}

console.log(unique([1, 2, 2, 3, 1, 4]));
console.log(unique(["a", "b", "a", "c"]));`,
  },
  {
    id: "js-sleep-async",
    title: "Sleep / delay in async code",
    language: "JavaScript",
    tags: ["async", "promises", "timing"],
    description:
      "A promise-based delay you can await inside an async function — handy for retries, throttling, or simulating latency.",
    code: `function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  console.log("waiting...");
  await sleep(300);
  console.log("done waiting");
}

demo();`,
  },
  {
    id: "js-format-currency",
    title: "Format a number as currency",
    language: "JavaScript",
    tags: ["numbers", "formatting", "intl"],
    description:
      "Uses the built-in Intl API to format numbers as locale-aware currency, no manual string building required.",
    code: `const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(formatter.format(1999.5));
console.log(formatter.format(4));`,
  },
  {
    id: "js-array-chunk",
    title: "Chunk an array into groups",
    language: "JavaScript",
    tags: ["arrays", "pagination"],
    description:
      "Splits a flat array into smaller arrays of a fixed size — useful for pagination or batch processing.",
    code: `function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));`,
  },
  {
    id: "react-useclickoutside",
    title: "useClickOutside hook",
    language: "React",
    tags: ["hooks", "events", "dropdown"],
    description:
      "Detects a click outside a referenced element — the standard pattern for closing dropdowns and modals.",
    code: `import { useEffect } from "react";

function useClickOutside(ref, onOutsideClick) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onOutsideClick]);
}

export default useClickOutside;`,
  },
  {
    id: "react-uselocalstorage",
    title: "useLocalStorage hook",
    language: "React",
    tags: ["hooks", "storage", "persistence"],
    description:
      "State that automatically persists to localStorage and rehydrates on reload — a drop-in replacement for useState.",
    code: `import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;`,
  },
  {
    id: "react-usewindowsize",
    title: "useWindowSize hook",
    language: "React",
    tags: ["hooks", "responsive", "events"],
    description:
      "Tracks the browser window's width and height, updating on resize — useful for responsive logic in JS rather than CSS alone.",
    code: `import { useState, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default useWindowSize;`,
  },
  {
    id: "py-list-comprehension",
    title: "List comprehensions",
    language: "Python",
    tags: ["lists", "syntax"],
    description:
      "A compact way to build a new list by transforming and filtering an existing one in a single line.",
    code: `numbers = [1, 2, 3, 4, 5, 6]

doubled = [n * 2 for n in numbers]
evens = [n for n in numbers if n % 2 == 0]

print(doubled)
print(evens)`,
  },
  {
    id: "py-dict-comprehension",
    title: "Dictionary comprehensions",
    language: "Python",
    tags: ["dictionaries", "syntax"],
    description:
      "Builds a dictionary in one line from an iterable, the same way a list comprehension builds a list.",
    code: `words = ["apple", "fig", "banana"]

lengths = {word: len(word) for word in words}
print(lengths)`,
  },
  {
    id: "py-decorators-basic",
    title: "A basic decorator",
    language: "Python",
    tags: ["functions", "decorators"],
    description:
      "Wraps a function to add behavior — here, timing how long it takes to run — without changing the function itself.",
    code: `import time

def timed(fn):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = fn(*args, **kwargs)
        print(f"{fn.__name__} took {time.time() - start:.4f}s")
        return result
    return wrapper

@timed
def slow_add(a, b):
    return a + b

slow_add(2, 3)`,
  },
  {
    id: "css-dark-mode-vars",
    title: "Dark mode with CSS variables",
    language: "CSS",
    tags: ["theming", "variables", "dark mode"],
    description:
      "Swaps a set of CSS custom properties based on a class, so components reference variables instead of hardcoded colors.",
    code: `:root {
  --bg: #ffffff;
  --text: #111111;
}

[data-theme="dark"] {
  --bg: #111111;
  --text: #f5f5f5;
}

body {
  background: var(--bg);
  color: var(--text);
}`,
  },
  {
    id: "css-aspect-ratio",
    title: "Maintain an aspect ratio",
    language: "CSS",
    tags: ["layout", "images", "video"],
    description:
      "Keeps an element — commonly an image or video container — at a fixed width-to-height ratio as it resizes.",
    code: `.video-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
  overflow: hidden;
}

.video-wrapper img,
.video-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,
  },
  {
    id: "html-meta-viewport",
    title: "Responsive viewport meta tag",
    language: "HTML",
    tags: ["responsive", "meta", "mobile"],
    description:
      "The single line every responsive site needs — without it, mobile browsers render the page zoomed out at desktop width.",
    code: `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
  },
  {
    id: "html-details-summary",
    title: "A native collapsible section",
    language: "HTML",
    tags: ["accordion", "interactive"],
    description:
      "Built-in expand/collapse behavior with no JavaScript required — good for FAQs or optional details.",
    code: `<details>
  <summary>What languages does this cover?</summary>
  <p>JavaScript, React, Python, CSS, HTML, SQL, and Git.</p>
</details>`,
  },
  {
    id: "sql-update-basics",
    title: "Update rows conditionally",
    language: "SQL",
    tags: ["update", "where"],
    description:
      "Changes existing rows that match a condition — always pair UPDATE with WHERE to avoid updating the whole table.",
    code: `UPDATE orders
SET status = 'shipped'
WHERE status = 'processing'
  AND created_at < NOW() - INTERVAL '2 days';`,
  },
  {
    id: "sql-subquery-basics",
    title: "Filter with a subquery",
    language: "SQL",
    tags: ["subquery", "filtering"],
    description:
      "Finds customers who have placed at least one order, using a subquery instead of a join.",
    code: `SELECT name
FROM customers
WHERE id IN (
  SELECT DISTINCT customer_id FROM orders
);`,
  },
  {
    id: "git-rename-branch",
    title: "Rename a branch",
    language: "Git",
    tags: ["branches"],
    description:
      "Renames the branch you're currently on — useful for fixing a typo or updating a default branch name.",
    code: `git branch -m new-branch-name

# if the branch is already pushed, update the remote too:
git push origin -u new-branch-name`,
  },
  {
    id: "git-view-log-graph",
    title: "View a readable commit graph",
    language: "Git",
    tags: ["log", "history"],
    description:
      "A compact, one-line-per-commit view of history with branch and merge lines drawn out — much easier to scan than the default log.",
    code: `git log --oneline --graph --all --decorate`,
  },
];

export default snippets;
