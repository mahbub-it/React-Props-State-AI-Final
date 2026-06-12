# Learning Note: React Navigation & Routing Issue Fixes

This document explains the common issues resolved today in your React application regarding navigation, components, and routing.

## 1. React Component Naming (The "Rules of Hooks" Error)

**Issue**: `React Hook "useLocation" is called in function "nav" that is neither a React function component nor a custom React Hook function.`

**Explanation**:
In React, function components must start with an **Uppercase letter** (PascalCase). If you name a component `nav` (lowercase), React treats it as a regular JavaScript function, and it will throw an error if you try to use Hooks like `useLocation` or `useState` inside it.

**Fix**:
Rename the function from `nav` to `Nav` and update the export.

```javascript
// Incorrect
const nav = () => { ... }

// Correct
const Nav = () => { ... }
```

## 2. Interactive Dropdowns Without Bootstrap JS

**Issue**: The "Services" dropdown was not opening when clicked.

**Explanation**:
Bootstrap's default dropdowns rely on a jQuery-based JavaScript file (`bootstrap.js`). In a React environment, it's often more reliable to manage the "open" state using React's `useState` hook rather than relying on external script tags in `index.html`.

**Fix**:
Used `useState` to toggle a CSS class (`open show`).

```javascript
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

<li className={`dropdown ${isDropdownOpen ? "open show" : ""}`}>
  <Link
    onClick={(e) => {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }}
  >
    Services
  </Link>
</li>;
```

## 3. Navigation Reordering

**Issue**: The "Contact" link appeared before "Services", but was requested to be after.

**Explanation**:
The navigation list was built using a mix of a dynamic `map()` function and hardcoded JSX. To fix the order, I moved the hardcoded "Contact" link to the end of the `<ul>` list.

## 4. Active Link Highlighting

**Issue**: Navigation links didn't stay highlighted when on certain pages (especially sub-pages).

**Explanation**:
We use the `useLocation` hook from `react-router-dom` to get the current URL path.

- For simple links, we check for an exact match: `address.pathname === '/about'`.
- For categories like "Services" that have sub-pages, we use `startsWith()` to ensure the parent remains active even when you are on a sub-page.

**Example**:

```javascript
// Active if path is /services OR /services/engage, etc.
const isActive = address.pathname.startsWith("/services");
```

## 5. Broken Sub-links & Missing Layout

**Issue**: Sub-links like "Engage" were pointing to `#` and the pages themselves didn't have a navigation bar.

**Explanation**:
Each page in a React app is an independent component. If you create a new page component like `Engage.js`, you must manually include the `Header` (which contains your `Nav`) if you want the navigation bar to appear on that page.

**Fix**:

1. Updated `Link to="/services/engage"` in `Nav.js`.
2. Added `<Header />` to `Engage.js`, `Pontificate.js`, and `Synergize.js`.

---

_Note: Always remember to capitalize your component names and use path-based logic for active states in navbars._
