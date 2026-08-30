import { useEffect, useRef, useState } from "react";
import Button from "./Button";

function ExitIntent() {
  const [isVisible, setIsVisible] = useState(false);
  const hasShownRef = useRef(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("malabares-exit-intent");
    if (alreadyShown) { hasShownRef.current = true; return; }

    const handleMouseLeave = (event) => {
      if (window.innerWidth < 1024) return;
      if (event.clientY <= 0 && !hasShownRef.current) {
        hasShownRef.current = true;
        setIsVisible(true);
        sessionStorage.setItem("malabares-exit-intent", "true");
        document.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);
    return () => document.removeEventListener("mouseout", handleMouseLeave);
  }, []);

  function closeModal() { setIsVisible(false); }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6">
      <div className="relative w-full max-w-xl overflow-hidden rounded-lg border border-neutral-light/20 bg-white p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.15)] animate-[fadeUp_.4s_ease]">

        {/* FECHAR */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-neutral-light transition-colors duration-300 hover:text-neutral"
        >
          ✕
        </button>

        {/* EYEBROW */}
        <span className="inline-block font-sora font-semibold text-sm tracking-[0.2em] uppercase text-lilac text-center w-full mb-6">
          antes de sair
        </span>

        {/* TÍTULO */}
        <h3 className="text-2xl md:text-3xl text-center w-full leading-tight tracking-tight text-purple mb-6">
          Sua ideia pode começar hoje.
        </h3>

        {/* TEXTO */}
        <p className="text-[1rem] leading-relaxed text-neutral-light text-center mb-10">
          Se você chegou até aqui, provavelmente já tem algo importante em mente.{" "}
          <strong className="text-neutral">Vamos transformar isso em algo real.</strong>
        </p>

        {/* CTA */}
        <Button link="https://www.instagram.com/malabaresmkt" className="w-full">
          ↪ Segue a gente no Instagram
        </Button>

      </div>
    </div>
  );
}

export default ExitIntent;
