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
      <div className="relative w-full max-w-lg 
      bg-white rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.15)] 
      p-8 animate-[fadeUp_.4s_ease]">

        {/* FECHAR */}
        <button
          onClick={closeModal}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-neutral-light hover:text-neutral transition-colors duration-200 text-lg leading-none"
        >
          ✕
        </button>

        {/* CABEÇALHO */}
        <div className="flex items-start gap-10 ">

          {/* Ícone */}
          <div className="flex-shrink-0 w-28 h-28 rounded-xl
          bg-lilac/20 flex items-center justify-center">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-lilac" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>

          {/* Texto */}
          <div className="mb-4">
            <p className="font-sora font-semibold text-base text-lilac mb-4">Antes de sair...</p>
            <h2 className="font-sora font-medium text-3xl text-purple mb-4">
              Seu projeto pode começar hoje
            </h2>
          </div>
          
        </div>
        {/* DESCRIÇÃO */}
            <p className="text-base leading-relaxed text-neutral-light mb-8">
              O primeiro passo é sempre o mais importante. Se você chegou até aqui,
              não deixe o seu projeto para depois.{" "}
              <strong className="text-neutral">Vamos transformar isso em algo real.</strong>
            </p>

        

        {/* BOTÕES */}
        <div className="flex flex-col gap-3">
          <Button
            link="https://www.instagram.com/malabaresmkt"
            target="_blank"
            variant="primary"
            className="w-full"
          >
            ↗ Segue no Instagram
          </Button>
          <Button
            link="https://www.linkedin.com/company/malabaresmkt"
            target="_blank"
            variant="outline"
            className="w-full"
          >
            ↗ Segue no Linkedin
          </Button>
        </div>

      </div>
    </div>
  );
}

export default ExitIntent;
