// Lessons are ordered — index in this array determines lesson order,
// which drives the Previous / Next navigation in the reader.
// Each lesson's `blocks` render top to bottom:
//   "text"  -> a paragraph of prose
//   "topic" -> a small subheading + a short note (used for reference-style lessons)
//   "code"  -> a live CodePlayground

const lessons = [
  {
    id: "introduction",
    title: "An introduction to JavaScript",
    summary: "What JavaScript is, and the tools you'll use to write it.",
    recap:
      "You don't need to memorize the spec or master every editor feature before moving on — just know that the console is where you'll spend a lot of time checking your work, in this app and in real projects alike.",
    blocks: [
      {
        type: "text",
        content:
          "Before writing any code, it helps to know the landscape: what JavaScript actually is, where to look things up when you're unsure, and the tools browsers give you for inspecting what your code is doing.",
      },
      {
        type: "topic",
        title: "Manuals and specifications",
        content:
          "The specification is the formal document that defines exactly how JavaScript should behave — dense and precise, but the ultimate source of truth. Day to day, a manual like MDN is far more practical, giving readable explanations and examples for any feature.",
      },
      {
        type: "topic",
        title: "Code editors",
        content:
          "A code editor is where you'll spend most of your time — look for one with syntax highlighting, autocomplete, and error checking built in, since these catch a huge number of small mistakes before you even run your code.",
      },
      {
        type: "topic",
        title: "Developer console",
        content:
          "Every browser has a built-in console (usually opened with F12) where you can run JavaScript directly, inspect errors, and see anything your code logs. It's the single most useful tool for understanding what your code is actually doing.",
      },
    ],
  },
  {
    id: "fundamentals",
    title: "JavaScript fundamentals",
    summary: "The core building blocks: variables, values, and control flow.",
    recap:
      "This lesson is the densest one, because it's where almost everything else builds from. If a topic here still feels shaky, it's worth revisiting before pushing on — variables, conditionals, and functions show up in literally every lesson that follows.",
    blocks: [
      {
        type: "text",
        content:
          "This is the heart of the language — the vocabulary and grammar you'll use in every script you write from here on. It's a lot of ground, so treat this lesson as a reference to come back to, not something to memorize in one pass.",
      },
      {
        type: "topic",
        title: "Hello, world!",
        content:
          "The traditional first program: printing a simple message to prove your setup works. In a browser, that usually means `console.log(\"Hello, world!\")`.",
      },
      {
        type: "topic",
        title: "Code structure",
        content:
          "JavaScript is made of statements, usually one per line, optionally ended with a semicolon. Whitespace and line breaks are mostly for readability — the engine cares about the statements themselves, not how they're spaced.",
      },
      {
        type: "topic",
        title: "The modern mode, \"use strict\"",
        content:
          "Adding `\"use strict\"` at the top of a script or function opts into a stricter version of JavaScript that catches common mistakes — like accidentally creating a global variable — instead of silently allowing them.",
      },
      {
        type: "topic",
        title: "Variables",
        content:
          "Named containers for values, declared with `let`, `const`, or the older `var`. Which one you choose affects whether the value can change and where it's accessible from.",
      },
      {
        type: "topic",
        title: "Data types",
        content:
          "JavaScript values fall into a small set of types — numbers, strings, booleans, objects, and a few special ones like `null` and `undefined`. Unlike some languages, a variable itself isn't locked to one type; it just holds whatever value you assign it.",
      },
      {
        type: "topic",
        title: "Interaction: alert, prompt, confirm",
        content:
          "Three built-in browser functions for simple interaction: `alert` shows a message, `prompt` asks for text input, and `confirm` asks a yes/no question. They're blunt tools, mostly useful for quick testing rather than real interfaces.",
      },
      {
        type: "topic",
        title: "Type conversions",
        content:
          "Values often need to change type — a string typed into a form becoming a number, for instance. JavaScript does some of this automatically, but understanding when and how it happens avoids a lot of confusing bugs.",
      },
      {
        type: "topic",
        title: "Basic operators, maths",
        content:
          "The usual arithmetic operators (`+`, `-`, `*`, `/`) plus a few JavaScript-specific ones, like `**` for exponents and the remainder operator `%`. `+` also concatenates strings, which is a common source of surprises.",
      },
      {
        type: "topic",
        title: "Comparisons",
        content:
          "Comparing values with `<`, `>`, `==`, and `===`. The double-equals loosely converts types before comparing, while triple-equals checks both value and type — which is why `===` is usually the safer default.",
      },
      {
        type: "topic",
        title: "Conditional branching: if, '?'",
        content:
          "`if`/`else` runs different code depending on a condition. The ternary operator (`condition ? a : b`) does the same thing in a single compact expression, useful when you just need to pick between two values.",
      },
      {
        type: "topic",
        title: "Logical operators",
        content:
          "`&&` (and), `||` (or), and `!` (not) combine or invert conditions. Beyond boolean logic, `&&` and `||` are also commonly used to pick a value or provide a fallback.",
      },
      {
        type: "topic",
        title: "Nullish coalescing operator '??'",
        content:
          "`??` returns its right-hand value only when the left side is `null` or `undefined` — unlike `||`, it won't override values like `0` or an empty string that are falsy but still meaningful.",
      },
      {
        type: "topic",
        title: "Loops: while and for",
        content:
          "`while` repeats as long as a condition holds; `for` bundles a starting point, a condition, and a step into one line, which is convenient when you're counting through a known range.",
      },
      {
        type: "topic",
        title: "The \"switch\" statement",
        content:
          "An alternative to a long chain of `if`/`else if` when you're comparing one value against several possibilities — often more readable once you're checking more than two or three cases.",
      },
      {
        type: "topic",
        title: "Functions",
        content:
          "Reusable, named blocks of code that accept inputs and can return a value — the basic unit of organization in almost any JavaScript program.",
      },
      {
        type: "topic",
        title: "Function expressions",
        content:
          "Functions can also be stored in a variable, rather than declared with a name up front. This makes them easy to pass around — as arguments, return values, or object properties.",
      },
      {
        type: "topic",
        title: "Arrow functions, the basics",
        content:
          "A shorter syntax for writing function expressions, `(params) => expression`, commonly used for small, throwaway functions like the callbacks passed to array methods.",
      },
      {
        type: "topic",
        title: "JavaScript specials",
        content:
          "A handful of quirks — automatic semicolon insertion, quirky type coercion, and other historical decisions — that don't fit neatly elsewhere but are worth knowing about so they don't catch you off guard later.",
      },
    ],
  },
  {
    id: "code-quality",
    title: "Code quality",
    summary: "Habits and tools that make code easier to trust and maintain.",
    recap:
      "Code quality isn't a separate skill from writing code — it's what separates code you can still understand a month from now from code you can't. Debugging tools and a consistent style pay for themselves almost immediately.",
    blocks: [
      {
        type: "text",
        content:
          "Writing code that runs is only the first step. This lesson covers the habits and tools that make code easier to read, trust, and fix later — by you, or by anyone else who opens the file after you.",
      },
      {
        type: "topic",
        title: "Debugging in the browser",
        content:
          "Browser developer tools let you pause execution, step through code line by line, and inspect variables at that exact moment — far more powerful than scattering `console.log` everywhere, though that works too for quick checks.",
      },
      {
        type: "topic",
        title: "Coding style",
        content:
          "Consistent indentation, spacing, and naming make code dramatically easier to scan. Most teams pick a style guide (or a tool like Prettier) and stick to it, so the formatting is never a distraction from the logic.",
      },
      {
        type: "topic",
        title: "Comments",
        content:
          "Good comments explain *why* something is done a certain way, not *what* the code does — the code itself already says what it does. Over-commenting obvious lines tends to add noise rather than clarity.",
      },
      {
        type: "topic",
        title: "Ninja code",
        content:
          "A tongue-in-cheek term for code that's deliberately clever or obscure. It's worth recognizing as an anti-pattern — code that shows off is usually harder for everyone, including your future self, to maintain.",
      },
      {
        type: "topic",
        title: "Automated testing with Mocha",
        content:
          "Rather than manually re-checking your code every time you change it, automated tests run a set of checks for you. Mocha is one popular framework for organizing and running these tests in JavaScript.",
      },
      {
        type: "topic",
        title: "Polyfills and transpilers",
        content:
          "A polyfill adds support for a newer feature in older environments that don't have it built in; a transpiler rewrites modern syntax into an older, more widely-supported form. Together they let you write current JavaScript while still supporting older browsers.",
      },
    ],
  },
  {
    id: "objects-basics",
    title: "Objects: the basics",
    summary: "How JavaScript represents structured, real-world data.",
    recap:
      "Objects are the workhorse of JavaScript — almost everything beyond a simple number or string ends up represented as one. Understanding that they're passed by reference, not copied, is the detail that prevents the most confusing bugs later on.",
    blocks: [
      {
        type: "text",
        content:
          "Objects are how JavaScript represents anything with more than one piece of data attached to it. This lesson covers the core mechanics — not just how to use objects, but how they actually behave in memory.",
      },
      {
        type: "topic",
        title: "Objects",
        content:
          "A collection of key-value pairs, used to group related data and behavior under one variable — a user, a product, a configuration object, and so on.",
      },
      {
        type: "topic",
        title: "Object references and copying",
        content:
          "Unlike primitive values, objects are stored and passed by reference. Assigning an object to a new variable doesn't copy it — both variables point to the same object, so changing one changes what the other sees too.",
      },
      {
        type: "topic",
        title: "Garbage collection",
        content:
          "JavaScript automatically frees memory used by objects that are no longer reachable from anywhere in your code, so you rarely have to think about memory management directly — though understanding the basic idea helps explain why certain patterns leak memory.",
      },
      {
        type: "topic",
        title: "Object methods, \"this\"",
        content:
          "A function stored as an object property is called a method. Inside a method, `this` refers to the object it was called on — a frequent source of confusion, especially once functions get passed around or reassigned.",
      },
      {
        type: "topic",
        title: "Constructor, operator \"new\"",
        content:
          "A constructor function, called with `new`, creates a new object and sets it up in a repeatable way — a precursor to the class syntax covered later.",
      },
      {
        type: "topic",
        title: "Optional chaining '?.'",
        content:
          "`?.` safely accesses a nested property without throwing an error if something along the way is `null` or `undefined` — useful when working with data that might be incomplete, like an API response.",
      },
      {
        type: "topic",
        title: "Symbol type",
        content:
          "A primitive type that guarantees a unique value, often used as an object key when you specifically want to avoid naming collisions with other properties.",
      },
      {
        type: "topic",
        title: "Object to primitive conversion",
        content:
          "When an object is used where a primitive is expected — in a string template, or a math operation — JavaScript has defined rules for converting it, which you can customize on your own objects if needed.",
      },
    ],
  },
  {
    id: "data-types-deep-dive",
    title: "Data types",
    summary: "A closer look at strings, numbers, arrays, and the collections built on top of them.",
    recap:
      "Arrays and their methods (`map`, `filter`, `reduce`) will likely be what you reach for most often day to day. Map and Set are worth knowing exist even before you need them — they solve specific problems plain objects and arrays handle awkwardly.",
    blocks: [
      {
        type: "text",
        content:
          "With the fundamentals in place, this lesson goes deeper into the everyday data types — strings, numbers, arrays — and introduces a few more specialized collection types you'll encounter as your code grows more complex.",
      },
      {
        type: "topic",
        title: "Methods of primitives",
        content:
          "Even simple values like strings and numbers have methods available on them (like `.toUpperCase()`), because JavaScript briefly wraps them in an object-like form whenever a method is called.",
      },
      {
        type: "topic",
        title: "Numbers",
        content:
          "JavaScript has a single number type covering both integers and decimals, which is convenient but comes with some precision quirks worth knowing about, especially with very large numbers or decimal math.",
      },
      {
        type: "topic",
        title: "Strings",
        content:
          "Text values with a large set of built-in methods for searching, slicing, and transforming — `.slice()`, `.indexOf()`, `.replace()`, and many more cover most everyday text manipulation.",
      },
      {
        type: "topic",
        title: "Arrays",
        content:
          "Ordered collections accessed by numeric index, used constantly for lists of anything — items, results, steps in a process.",
      },
      {
        type: "topic",
        title: "Array methods",
        content:
          "Built-in methods like `map`, `filter`, and `reduce` transform arrays without writing manual loops, and are usually the clearest way to express what you're doing to a list of data.",
      },
      {
        type: "topic",
        title: "Iterables",
        content:
          "Any object that defines how it should be looped over (arrays, strings, and more) can be used with `for...of` and similar constructs — a shared interface many different data types can support.",
      },
      {
        type: "topic",
        title: "Map and Set",
        content:
          "`Map` is like an object but allows any value (not just strings) as a key and keeps track of insertion order. `Set` stores a collection of unique values, automatically discarding duplicates.",
      },
      {
        type: "topic",
        title: "WeakMap and WeakSet",
        content:
          "Variants of Map and Set that hold their entries weakly, meaning they don't prevent an object from being garbage collected — useful for attaching extra data to objects without causing memory leaks.",
      },
      {
        type: "topic",
        title: "Object.keys, values, entries",
        content:
          "Built-in methods that turn an object's keys, values, or key-value pairs into arrays, so you can loop over or transform an object the same way you would an array.",
      },
      {
        type: "topic",
        title: "Destructuring assignment",
        content:
          "A shorthand for pulling values out of objects or arrays into their own variables in a single line, instead of accessing each property individually.",
      },
      {
        type: "topic",
        title: "Date and time",
        content:
          "The built-in `Date` object represents a specific point in time and provides methods for reading and manipulating years, months, days, and beyond.",
      },
      {
        type: "topic",
        title: "JSON methods, toJSON",
        content:
          "`JSON.stringify` and `JSON.parse` convert between JavaScript objects and JSON text — the format most APIs use to send and receive data.",
      },
    ],
  },
  {
    id: "advanced-functions",
    title: "Advanced working with functions",
    summary: "Scope, closures, and the less obvious behavior of functions.",
    recap:
      "Closures are the concept most worth sitting with here — once it clicks, a lot of JavaScript patterns you'll see elsewhere (including in React, if you go that direction) suddenly make a lot more sense.",
    blocks: [
      {
        type: "text",
        content:
          "Functions turn out to be more than just reusable blocks of code — they carry scope, memory, and identity in ways that shape a lot of JavaScript's more advanced patterns. This lesson goes under the hood.",
      },
      {
        type: "topic",
        title: "Recursion and stack",
        content:
          "A function that calls itself to break a problem into smaller versions of the same problem — useful for things like traversing nested data. Each call adds to the call stack, which is why deeply recursive code can eventually run out of stack space.",
      },
      {
        type: "topic",
        title: "Rest parameters and spread syntax",
        content:
          "Rest parameters (`...args`) collect any number of arguments into an array inside a function. Spread syntax does the reverse — expanding an array or object out into individual elements or properties.",
      },
      {
        type: "topic",
        title: "Variable scope, closure",
        content:
          "A closure is a function that remembers the variables from where it was created, even after that outer function has finished running. This is what lets you build things like private counters or memoized functions.",
      },
      {
        type: "topic",
        title: "The old \"var\"",
        content:
          "Before `let` and `const`, `var` was the only way to declare a variable — but it behaves differently around scope, which causes surprising bugs. Modern code generally avoids it in favor of `let`/`const`.",
      },
      {
        type: "topic",
        title: "Global object",
        content:
          "In a browser, `window` (or `globalThis` more generally) represents the global scope — a shared space accessible from anywhere, which is exactly why relying on it too heavily is usually avoided.",
      },
      {
        type: "topic",
        title: "Function object, NFE",
        content:
          "Functions are themselves objects in JavaScript, which means they can have properties and be passed around like any other value. A Named Function Expression (NFE) is a function expression that keeps its own name available inside its body, even for recursion.",
      },
      {
        type: "topic",
        title: "The \"new Function\" syntax",
        content:
          "A rarely-used way to create a function from a string of code at runtime — powerful, but risky, since it can execute arbitrary text as code.",
      },
      {
        type: "topic",
        title: "Scheduling: setTimeout and setInterval",
        content:
          "`setTimeout` runs code once after a delay; `setInterval` runs it repeatedly. Both are the foundation for anything time-based, from debouncing input to building simple animations.",
      },
      {
        type: "topic",
        title: "Decorators and forwarding, call/apply",
        content:
          "`call` and `apply` let you invoke a function while explicitly setting what `this` refers to inside it — the building block behind decorator patterns that wrap a function with extra behavior.",
      },
      {
        type: "topic",
        title: "Function binding",
        content:
          "`.bind()` creates a new function with `this` permanently locked to a specific value, which is especially useful when passing a method as a callback and you don't want it to lose track of its original object.",
      },
      {
        type: "topic",
        title: "Arrow functions revisited",
        content:
          "Unlike regular functions, arrow functions don't have their own `this` — they inherit it from the surrounding scope, which is exactly why they're so often used for callbacks inside methods.",
      },
    ],
  },
  {
    id: "property-configuration",
    title: "Object properties configuration",
    summary: "Fine-grained control over how object properties behave.",
    recap:
      "This is a more niche corner of the language — most day-to-day code never touches property descriptors directly. But knowing they exist explains behavior you'll eventually see in libraries and frameworks that use them under the hood.",
    blocks: [
      {
        type: "text",
        content:
          "Beyond just holding a value, every object property has extra settings controlling whether it can be changed, deleted, or listed — and can even run custom code when read or written to.",
      },
      {
        type: "topic",
        title: "Property flags and descriptors",
        content:
          "Every property has flags — `writable`, `enumerable`, `configurable` — that control whether it can be changed, shows up in loops, or can be deleted. These are set behind the scenes but can be inspected and adjusted directly when needed.",
      },
      {
        type: "topic",
        title: "Property getters and setters",
        content:
          "A getter runs custom code when a property is read, and a setter runs code when it's assigned — letting a property look like plain data from the outside while actually computing or validating something underneath.",
      },
    ],
  },
  {
    id: "prototypes-inheritance",
    title: "Prototypes, inheritance",
    summary: "How objects in JavaScript share behavior with each other.",
    recap:
      "Prototypes are what class syntax is quietly built on top of — you don't need to think about them constantly, but understanding the underlying mechanism makes class behavior (especially inheritance) feel far less like magic.",
    blocks: [
      {
        type: "text",
        content:
          "JavaScript's approach to sharing behavior between objects is a little different from many other languages — instead of copying, objects can look up properties on other objects they're linked to.",
      },
      {
        type: "topic",
        title: "Prototypal inheritance",
        content:
          "Every object can have a link to another object, its prototype, and will fall back to looking there for a property it doesn't have itself. This chain of fallback lookups is how JavaScript shares behavior between objects.",
      },
      {
        type: "topic",
        title: "F.prototype",
        content:
          "When you create an object using a constructor function `F` with `new`, the new object's prototype is set to `F.prototype` — this is the mechanism that ties constructor functions to shared behavior.",
      },
      {
        type: "topic",
        title: "Native prototypes",
        content:
          "Built-in types like arrays and strings have their own prototypes too, which is exactly where methods like `.map()` or `.slice()` actually live — not duplicated on every single array, but shared through the prototype.",
      },
      {
        type: "topic",
        title: "Prototype methods, objects without __proto__",
        content:
          "Modern code generally uses `Object.getPrototypeOf` and `Object.create` to work with prototypes directly, rather than the older, non-standard `__proto__` property.",
      },
    ],
  },
  {
    id: "classes",
    title: "Classes",
    summary: "A cleaner syntax for building objects with shared structure and behavior.",
    recap:
      "Classes don't add new capability to JavaScript so much as make the existing prototype system easier to read and write. If prototypes felt confusing in the last lesson, classes are usually the more approachable way most real code actually uses that same mechanism.",
    blocks: [
      {
        type: "text",
        content:
          "Classes are built directly on top of the prototype system from the last lesson, but give you a syntax that's much closer to what you'd see in many other programming languages.",
      },
      {
        type: "topic",
        title: "Class basic syntax",
        content:
          "A `class` bundles together a constructor and a set of methods that every instance will share, offering a cleaner way to write the same patterns constructor functions and prototypes handle underneath.",
      },
      {
        type: "topic",
        title: "Class inheritance",
        content:
          "One class can `extend` another, inheriting its methods while adding or overriding its own — a structured way to build more specific versions of a general concept.",
      },
      {
        type: "topic",
        title: "Static properties and methods",
        content:
          "Marked with `static`, these belong to the class itself rather than to individual instances — useful for utility functions or shared counters related to the class as a whole.",
      },
      {
        type: "topic",
        title: "Private and protected properties and methods",
        content:
          "Properties prefixed with `#` are truly private to the class and can't be accessed from outside it, which helps enforce that certain internal details stay internal.",
      },
      {
        type: "topic",
        title: "Extending built-in classes",
        content:
          "You can extend built-in types like `Array` or `Error` to create your own specialized versions that inherit their existing behavior, adding only what's different.",
      },
      {
        type: "topic",
        title: "Class checking: \"instanceof\"",
        content:
          "The `instanceof` operator checks whether an object was created from a particular class (or inherits from it), which is useful when code needs to behave differently depending on an object's type.",
      },
      {
        type: "topic",
        title: "Mixins",
        content:
          "Since JavaScript classes only support inheriting from one parent, mixins are a pattern for sharing extra methods across unrelated classes without a full inheritance relationship.",
      },
    ],
  },
  {
    id: "error-handling",
    title: "Error handling",
    summary: "Catching and responding to things going wrong.",
    recap:
      "Even a simple `try...catch` around code that might fail — a network request, parsing unpredictable data — is often enough to keep one bad case from crashing the whole page. Custom errors become more useful once your app grows past the basics.",
    blocks: [
      {
        type: "text",
        content:
          "Things go wrong — bad input, failed network requests, unexpected data. This lesson covers how JavaScript lets you catch those failures gracefully instead of letting them crash your whole program.",
      },
      {
        type: "topic",
        title: "Error handling, \"try...catch\"",
        content:
          "Code that might fail can be wrapped in `try`, with a `catch` block ready to handle whatever goes wrong — letting the rest of your program keep running instead of stopping entirely.",
      },
      {
        type: "topic",
        title: "Custom errors, extending Error",
        content:
          "You can define your own error types by extending the built-in `Error` class, which is useful for distinguishing different kinds of failure (like a validation error versus a network error) in your `catch` blocks.",
      },
    ],
  },
  {
    id: "promises-async-await",
    title: "Promises, async/await",
    summary: "Working with operations that take time to complete.",
    recap:
      "This is one of the topics worth revisiting more than once — the mental model takes a bit to fully click. Once it does, async/await becomes the default way you'll write almost any code that talks to a server.",
    blocks: [
      {
        type: "text",
        content:
          "Real-world code constantly waits on things — network requests, timers, file reads. This lesson covers the tools JavaScript gives you for handling that waiting cleanly.",
      },
      {
        type: "topic",
        title: "Introduction: callbacks",
        content:
          "The original way to handle asynchronous code: passing a function to be called once an operation finishes. Simple for one step, but callbacks nested inside callbacks quickly become hard to follow.",
      },
      {
        type: "topic",
        title: "Promise",
        content:
          "An object representing a value that isn't ready yet, but will eventually either resolve successfully or reject with an error — a more structured alternative to nested callbacks.",
      },
      {
        type: "topic",
        title: "Promises chaining",
        content:
          "`.then()` calls can be chained together, with each step running after the previous one resolves — letting you express a sequence of asynchronous steps without deeply nesting callbacks.",
      },
      {
        type: "topic",
        title: "Error handling with promises",
        content:
          "`.catch()` handles any rejection anywhere earlier in a promise chain, giving you one place to deal with failure instead of checking for errors after every single step.",
      },
      {
        type: "topic",
        title: "Promise API",
        content:
          "Built-in helpers like `Promise.all` (wait for every promise to finish) and `Promise.race` (wait for just the first one) handle common patterns of working with multiple promises at once.",
      },
      {
        type: "topic",
        title: "Promisification",
        content:
          "The process of wrapping an older, callback-based function so it returns a promise instead — letting you use modern async/await syntax with code that predates promises.",
      },
      {
        type: "topic",
        title: "Microtasks",
        content:
          "Promise callbacks run in a special queue, called the microtask queue, that's processed before the browser moves on to other tasks like rendering — a subtle detail that explains some ordering behavior in async code.",
      },
      {
        type: "topic",
        title: "Async/await",
        content:
          "Syntax built on top of promises that lets asynchronous code read like ordinary step-by-step code, using `await` to pause until a promise resolves — usually the clearest way to write async logic.",
      },
    ],
  },
  {
    id: "generators-iteration",
    title: "Generators, advanced iteration",
    summary: "Functions that can pause and resume, producing values over time.",
    recap:
      "Generators are less common in everyday code than the rest of this syllabus, but they show up under the hood of some libraries and are worth recognizing even if you don't reach for them often yourself.",
    blocks: [
      {
        type: "text",
        content:
          "Most functions run start to finish in one go. Generators are a different kind of function — one that can pause partway through and resume later, producing a sequence of values over time.",
      },
      {
        type: "topic",
        title: "Generators",
        content:
          "Declared with `function*`, a generator can pause its execution with `yield` and be resumed later, producing a sequence of values one at a time instead of computing them all at once.",
      },
      {
        type: "topic",
        title: "Async iteration and generators",
        content:
          "Async generators combine the pausing behavior of generators with asynchronous operations, useful for processing a stream of data that arrives over time — like paginated results from an API.",
      },
    ],
  },
  {
    id: "modules",
    title: "Modules",
    summary: "Splitting code across files and sharing pieces between them.",
    recap:
      "Every file in this very app — the lesson data, the snippet library, the playground component — is its own module, imported wherever it's needed. As your own projects grow, splitting things up the same way keeps each piece small enough to reason about.",
    blocks: [
      {
        type: "text",
        content:
          "As a project grows past a handful of lines, keeping everything in one file stops being manageable. Modules let you split code across files and be explicit about what each one shares with the others.",
      },
      {
        type: "topic",
        title: "Modules, introduction",
        content:
          "A module is just a file whose code runs in its own scope, and which only shares what it explicitly exports — a way of keeping code organized and avoiding naming collisions between files.",
      },
      {
        type: "topic",
        title: "Export and Import",
        content:
          "`export` marks what a file makes available; `import` pulls that into another file. Together, they're how a project's pieces are wired together without cramming everything into a single script.",
      },
      {
        type: "topic",
        title: "Dynamic imports",
        content:
          "Instead of importing everything up front, `import()` can load a module on demand — useful for loading a large piece of functionality only when it's actually needed, keeping the initial page load lighter.",
      },
    ],
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    summary: "A handful of more specialized tools and language corners.",
    recap:
      "You've now covered the entire map — from your first variable to the language's more specialized corners. None of these last few topics come up daily, but recognizing them means you won't be caught off guard when they do.",
    blocks: [
      {
        type: "text",
        content:
          "A collection of more specialized tools and corners of the language that didn't fit neatly into the earlier categories — good to know exist, even if you reach for them rarely.",
      },
      {
        type: "topic",
        title: "Proxy and Reflect",
        content:
          "A `Proxy` wraps an object and lets you intercept operations on it — reading a property, setting one, deleting one — which is useful for validation, logging, or building more dynamic APIs.",
      },
      {
        type: "topic",
        title: "Eval: run a code string",
        content:
          "`eval()` runs a string as JavaScript code at runtime. It's powerful but rarely the right tool — it makes code harder to reason about and can be a security risk if the string comes from an untrusted source.",
      },
      {
        type: "topic",
        title: "Currying",
        content:
          "A technique where a function that takes multiple arguments is transformed into a sequence of functions that each take one argument — useful for creating specialized versions of a more general function.",
      },
      {
        type: "topic",
        title: "Reference Type",
        content:
          "A low-level detail of how JavaScript evaluates method calls internally, explaining some edge cases around how `this` behaves when a method is extracted from its object before being called.",
      },
      {
        type: "topic",
        title: "BigInt",
        content:
          "A numeric type for working with integers larger than the regular Number type can represent precisely, written with an `n` suffix like `123n`.",
      },
      {
        type: "topic",
        title: "Unicode, String internals",
        content:
          "JavaScript strings are encoded in UTF-16, which mostly works transparently but can cause surprises with certain emoji or rare characters that take up more than one code unit.",
      },
      {
        type: "topic",
        title: "WeakRef and FinalizationRegistry",
        content:
          "Advanced tools for holding a reference to an object without preventing it from being garbage collected, and for running cleanup code once it is — niche, and easy to misuse, but occasionally useful for caches.",
      },
    ],
  },
];

export default lessons;