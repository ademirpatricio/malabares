import { useState } from "react";

import { Menu, X } from "lucide-react";

import Container from "../layout/Container";
import NavLink from "../ui/NavLink";
import SocialLink from "../ui/SocialLink";

import logo from "../../assets/images/logo-malabares.svg";

import icInstagram from "../../assets/images/ic-social-instagram.svg";
import icBehance from "../../assets/images/ic-social-behance.svg";
import icLinkedin from "../../assets/images/ic-social-linkedin.svg";
import icTiktok from "../../assets/images/ic-social-tiktok.svg";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className="py-8 w-full">

      <Container>

        {/* TOPO */}
        <div className="
          flex items-center justify-between
        ">

          {/* LOGO */}
          <div>
            <img
              src={logo}
              alt="Logo da Malabares"
              title="Malabares MKT & TEC"
              className="w-[200px] md:w-[250px] h-auto"
            />
          </div>

          {/* MENU DESKTOP */}
          <nav className="
            hidden md:flex
            items-center
            gap-2
          ">
            <NavLink href="#sobre">Sobre nós</NavLink>
            <NavLink href="#trabalhos">Nossos trabalhos</NavLink>
            <NavLink href="https://wedding.malabares.com.br">Wedding</NavLink>
            <NavLink href="#contato">Contato</NavLink>
          </nav>

          {/* SOCIAL DESKTOP */}
          <div className="hidden lg:flex gap-3">
            <SocialLink icon={icInstagram} title="Instagram" link="https://www.instagram.com/malabaresmkt"/>
            <SocialLink icon={icBehance} title="Behance" link="https://www.behance.net/malabaresmkt"/>
            <SocialLink icon={icLinkedin} title="Linkedin" link="https://www.linkedin.com/company/malabaresmkt/"/>
            <SocialLink icon={icTiktok} title="TikTok" link="https://www.tiktok.com/@malabares.mkt"/>
          </div>

          {/* BOTÃO MOBILE */}
          <button onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-dark z-50">
            {
              isOpen
                ? <X size={36} />
                : <Menu size={36} />
            }
          </button>

        </div>



        {/* MENU MOBILE */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "max-h-[500px] opacity-100 pt-10"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="flex flex-col items-end gap-8">
            {/* LINKS */}
            <nav className="flex flex-col items-end gap-4">
              <NavLink href="#sobre">Sobre nós</NavLink>
              <NavLink href="#trabalhos">Nossos trabalhos</NavLink>
              <NavLink href="https://wedding.malabares.com.br">Wedding</NavLink>
              <NavLink href="#contato">Contato</NavLink>
            </nav>
          </div>



        </div>

      </Container>

    </header>

  );
}

export default Navbar;