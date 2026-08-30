import { useState, useEffect } from "react";
import Button from "./Button";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("malabares-lgpd");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("malabares-lgpd", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("malabares-lgpd", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] px-4 pb-4 md:px-6 md:pb-6">
      <div className="max-w-5xl mx-auto bg-purple-dark border border-white/10 rounded-lg px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">

        {/* TEXTO */}
        <p className="text-sm leading-relaxed text-white/70 flex-1">
          Usamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa{" "}
          <a href="/politica-de-privacidade" className="text-lilac underline underline-offset-2 hover:text-white transition-colors duration-200">
            política de privacidade
          </a>{" "}
          em conformidade com a <strong className="text-white/90">LGPD</strong>.
        </p>

        {/* AÇÕES */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/40 hover:text-white/70 transition-colors duration-200 underline underline-offset-2"
          >
            Recusar
          </button>
          <Button size="sm" variant="accent" onClick={accept}>
            Aceitar
          </Button>
        </div>

      </div>
    </div>
  );
}

export default CookieBanner;
