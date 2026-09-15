import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IcArrow from "../ui/IcArrow";
import IcMenu from "../ui/IcMenu";

import Container from "../layout/Container";
import SocialLink from "../ui/SocialLink";

import logo from "../../assets/images/logo-malabares-dark.svg";

import icInstagram from "../../assets/images/icons/ic-social-instagram.svg";
import icBehance from "../../assets/images/icons/ic-social-behance.svg";
import icLinkedin from "../../assets/images/icons/ic-social-linkedin.svg";
import icTiktok from "../../assets/images/icons/ic-social-tiktok.svg";

function IcClose({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"/>
    </svg>
  );
}

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  // Trava o scroll — scrollbar-gutter: stable no CSS evita o salto de layout
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* HEADER — logo + CTA + botão abrir */}
      <header className="fixed top-0 w-full pt-6 md:pt-12 z-[50]">
        <Container>
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link to="/" aria-label="Voltar para a Home"
              className="inline-block hover:opacity-80 transition-opacity duration-300">
              <img src={logo} alt="Logo da Malabares"
                className="w-[180px] md:w-[220px] h-auto" />
            </Link>

            {/* DIREITA — CTA + hambúrguer */}
            <div className="flex items-center gap-4">

              {/* CTA */}
              <a
                href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border-2 border-white text-white hover:text-purple font-sora font-semibold text-md tracking-widest hover:bg-white transition-colors duration-300"
              >
                Fala com a gente
                <span className="w-9 h-9 bg-lemon rounded-full flex items-center justify-center text-purple">
                  <IcArrow size={16} />
                </span>
              </a>

              {/* HAMBÚRGUER — só aparece quando menu fechado */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Abrir menu"
                className="text-white"
              >
                <IcMenu size={28} className="text-white" />
              </button>

            </div>
          </div>
        </Container>
      </header>

      {/* OVERLAY — cobre tudo, inclusive o header */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-500
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* PAINEL — desliza da direita */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-3/4 md:w-1/2 z-[70] flex flex-col py-10 md:py-12 px-8 md:px-12
          bg-purple transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* BOTÃO FECHAR — alinhado à direita, no topo do painel */}
        <div className="flex justify-end mb-12">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
            className="text-white hover:text-lemon transition-colors duration-300"
          >
            <IcClose size={28} />
          </button>
        </div>

        {/* LINKS — alinhados à direita */}
        <nav className="flex flex-col items-end flex-1 justify-center gap-5 md:gap-6 px-12">
          <a onClick={() => setIsOpen(false)} href="/sobre"
            className="font-archivo text-white uppercase text-3xl md:text-5xl leading-tight hover:text-lemon transition-colors duration-300 cursor-pointer text-right">
            Sobre nós
          </a>
          <a onClick={() => setIsOpen(false)} href="https://www.behance.net/malabaresmkt" target="_blank" rel="noopener noreferrer"
            className="font-archivo text-white uppercase text-3xl md:text-5xl leading-tight hover:text-lemon transition-colors duration-300 cursor-pointer text-right">
            Trabalhos
          </a>
          <a onClick={() => setIsOpen(false)} href="/contato"
            className="font-archivo text-white uppercase text-3xl md:text-5xl leading-tight hover:text-lemon transition-colors duration-300 cursor-pointer text-right">
            Contato
          </a>
          <a onClick={() => setIsOpen(false)} href="https://wedding.malabares.com.br" target="_blank" rel="noopener noreferrer"
            className="font-archivo text-white uppercase text-3xl md:text-5xl leading-tight hover:text-lemon transition-colors duration-300 cursor-pointer text-right">
            Wedding
          </a>
        </nav>

        {/* REDES SOCIAIS — rodapé do painel, alinhado à direita */}
        <div className="flex items-center justify-end gap-4">
          <SocialLink icon={icInstagram} title="Instagram" link="https://www.instagram.com/malabaresmkt" white/>
          <SocialLink icon={icBehance} title="Behance" link="https://www.behance.net/malabaresmkt" white/>
          <SocialLink icon={icLinkedin} title="Linkedin" link="https://www.linkedin.com/company/malabaresmkt/" white/>
          <SocialLink icon={icTiktok} title="TikTok" link="https://www.tiktok.com/@malabares.mkt" white/>
        </div>

      </div>
    </>
  );

}

export default Navbar;
