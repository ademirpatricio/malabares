import { useEffect, useState } from "react";

import Button from "./Button";

function ExitIntent() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const alreadyShown = sessionStorage.getItem("malabares-exit-intent");

    if (alreadyShown) {
      return;
    }

    const handleMouseLeave = (event) => {

      // Apenas desktop
      if (window.innerWidth < 1024) {
        return;
      }

      // Detecta saída pelo topo
      if (event.clientY <= 0) {

        setIsVisible(true);

        sessionStorage.setItem(
          "malabares-exit-intent",
          "true"
        );

      }

    };

    document.addEventListener(
      "mouseout",
      handleMouseLeave
    );

    return () => {

      document.removeEventListener(
        "mouseout",
        handleMouseLeave
      );

    };

  }, []);

  function closeModal() {
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (

    <div
      className="
        fixed
        inset-0

        z-[999]

        flex
        items-center
        justify-center

        bg-black/40
        backdrop-blur-sm

        px-6
      "
    >

      <div
        className="
          relative

          w-full
          max-w-xl

          overflow-hidden

          rounded-2xl

          border
          border-white/10

          bg-white

          p-8
          md:p-12

          shadow-[0_20px_80px_rgba(0,0,0,0.15)]

          animate-[fadeUp_.4s_ease]
        "
      >

        {/* FECHAR */}
        <button
          onClick={closeModal}
          className="
            absolute
            top-4
            right-4

            text-dark/40

            transition-colors
            duration-300

            hover:text-dark
          "
        >

          ✕

        </button>

        {/* TAG */}
        <span
          className="
            inline-block

            text-primary
            text-center
            w-full

            tracking-[0.3em]
            uppercase

            mb-6
          "
        >

          ⮑ ANTES DE SAIR

        </span>

        {/* TÍTULO */}
        <h3
          className="
            text-2xl
            md:text-3xl
            text-center
            w-full

            font-bold

            leading-tight
            tracking-tight

            mb-6
          "
        >

          Sua ideia pode começar hoje.

        </h3>

        {/* TEXTO */}
        <p
          className="
            text-[1.00rem]
            leading-[1.6]

            text-dark/70
            text-center

            mb-10
          "
        >

          Se você chegou até aqui, provavelmente já tem algo importante em mente. <strong>Vamos transformar isso em algo real.</strong>

        </p>

        {/* CTA */}
        <div
          className="
            flex
            flex-wrap

            gap-4
          "
        >

          <Button
            link="https://www.instagram.com/malabaresmkt"
            className="w-full hover:text-white"
          >

            ↪ Segue a gente no Instagram

          </Button>

        </div>

      </div>

    </div>

  );

}

export default ExitIntent;