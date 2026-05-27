import { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LeadCapture from "./pages/LeadCapture";
import Thanks from "./pages/Thanks";
import NotFound from "./pages/NotFound";

import ExitIntent from "./components/ui/ExitIntent";

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

        <Route
          path="/diagnostico"
          element={<LeadCapture />}
        />

        <Route
          path="/obrigado"
          element={<Thanks />}
        />

        <Route 
          path="*" 
          element={<NotFound />} 
        />

      </Routes>

      <ExitIntent />

    </BrowserRouter>

  );

}

export default App;
