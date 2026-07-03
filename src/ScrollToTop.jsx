import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the window to the top whenever the route changes.
// React Router doesn't do this automatically, since it's a single-page app —
// without this, navigating to a new lesson leaves you scrolled wherever
// you were on the previous page.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
