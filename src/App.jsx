import { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (location.hash) {
        document
          .querySelector(location.hash)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        const html = document.documentElement;
        const currentScrollBehavior = html.style.scrollBehavior;

        html.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);
        html.style.scrollBehavior = currentScrollBehavior;
      }

      AOS.refreshHard();
    }, 80);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {

  return (

    <BrowserRouter>

      <RouteEffects />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/sobre"
          element={<About />}
        />

        <Route
          path="/contato"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
