import { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, X } from "lucide-react";

import NavLink from "../ui/NavLink";
import Container from "../layout/Container";
import SocialLink from "../ui/SocialLink";

import logo from "../../assets/images/logo-malabares.svg";

import icInstagram from "../../assets/images/icons/ic-social-instagram.svg";
import icBehance from "../../assets/images/icons/ic-social-behance.svg";
import icLinkedin from "../../assets/images/icons/ic-social-linkedin.svg";
import icTiktok from "../../assets/images/icons/ic-social-tiktok.svg";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className="sticky top-0 z-50 w-full py-7 backdrop-blur-xl bg-purple/70">

      <Container>

        {/* TOPO */}
        <div className="flex items-center justify-between">

          {/* LOGO ======================================== */}
          <div>
            <Link to="/" aria-label="Voltar para a Home"
            className="inline-block hover:opacity-90 transition-all duration-300">
              <img src={logo} alt="Logo da Malabares" title="Malabares MKT & TEC"
              className="w-[200px] md:w-[250px] h-auto"/>
            </Link>
          </div>

          {/* MENU DESKTOP ======================================== */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink variant="white" href="/sobre">Sobre nós</NavLink>
            <NavLink variant="white" href="https://www.behance.net/malabaresmkt" target="_blank">Nossos trabalhos</NavLink>
            <NavLink variant="white" href="/contato">Contato</NavLink>
            <NavLink variant="white" href="https://wedding.malabares.com.br/" target="_blank">Wedding</NavLink>
          </nav>

          {/* SOCIAL DESKTOP ======================================== */}
          <div className="hidden lg:flex gap-2">
            <SocialLink icon={icInstagram} white title="Instagram" link="https://www.instagram.com/malabaresmkt"/>
            <SocialLink icon={icBehance} white title="Behance" link="https://www.behance.net/malabaresmkt"/>
            <SocialLink icon={icLinkedin} white title="Linkedin" link="https://www.linkedin.com/company/malabaresmkt/"/>
            <SocialLink icon={icTiktok} white title="TikTok" link="https://www.tiktok.com/@malabares.mkt"/>
          </div>

          {/* BOTÃO MOBILE ======================================== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            className="md:hidden text-white z-[60]"
          >
            {
              isOpen
                ? <X size={34} />
                : <Menu size={34} />
            }
          </button>

        </div>

        {/* MENU MOBILE ======================================== */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "max-h-[500px] opacity-100 translate-y-0 mt-6"
                : "max-h-0 opacity-0 -translate-y-4"
            }
          `}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 flex-col flex items-end gap-8">
              
            {/* LINKS ======================================== */}
            <nav className="flex flex-col items-end gap-4">
              <div onClick={() => setIsOpen(false)}><NavLink href="/sobre">Sobre nós</NavLink></div>
              <div onClick={() => setIsOpen(false)}><NavLink href="https://www.behance.net/malabaresmkt" target="_blank">Nossos trabalhos</NavLink></div>
              <div onClick={() => setIsOpen(false)}><NavLink href="/contato">Contato</NavLink></div>
              <div onClick={() => setIsOpen(false)}><NavLink href="https://wedding.malabares.com.br" target="_blank">Wedding</NavLink></div>
            </nav>

            {/* REDES MOBILE ======================================== */}
            <div className="flex items-center gap-3">
              <SocialLink icon={icInstagram} title="Instagram" link="https://www.instagram.com/malabaresmkt"/>
              <SocialLink icon={icBehance} title="Behance" link="https://www.behance.net/malabaresmkt"/>
              <SocialLink icon={icLinkedin} title="Linkedin" link="https://www.linkedin.com/company/malabaresmkt/"/>
              <SocialLink icon={icTiktok} title="TikTok" link="https://www.tiktok.com/@malabares.mkt"/>
            </div>

          </div>

        </div>

      </Container>

    </header>

  );

}

export default Navbar;