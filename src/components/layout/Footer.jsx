import Container from "../layout/Container";

import NavLink from "../ui/NavLink";
import SocialLink from "../ui/SocialLink";
import ButtonSm from "../ui/ButtonSm";

import icInstagram from "../../assets/images/icons/ic-social-instagram.svg";
import icBehance from "../../assets/images/icons/ic-social-behance.svg";
import icLinkedin from "../../assets/images/icons/ic-social-linkedin.svg";
import icTiktok from "../../assets/images/icons/ic-social-tiktok.svg";

import Whatsapp from '../ui/Whatsapp.jsx'

function Footer() {

  return (

    <footer
      className="
        w-full

        py-12

        bg-quaternary
        text-white
      "
    >

      <Container>

        {/* TOPO */}
        <div className="
          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-10
        ">

          {/* MENU */}
          <nav
            data-aos="fade-up"
            data-aos-delay="100"
            className="

              hidden
              md:flex
              flex-wrap

              justify-center
              items-center

              gap-2
            "
          >

            <NavLink white href="/sobre">
              Sobre
            </NavLink>

            <NavLink white target="_blank" href="https://www.behance.net/malabaresmkt">
              Trabalhos
            </NavLink>

            <NavLink white href="/contato">
              Contato
            </NavLink>

            <NavLink white href="https://wedding.malabares.com.br">
              Wedding
            </NavLink>

          </nav>

          {/* REDES */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="
              flex
              items-center

              gap-3
            "
          >

            <SocialLink white
              icon={icInstagram}
              title="Instagram"
              link="https://www.instagram.com/malabaresmkt"
            />

            <SocialLink white
              icon={icLinkedin}
              title="LinkedIn"
              link="https://www.linkedin.com/company/malabaresmkt/"
            />

            <SocialLink white
              icon={icTiktok}
              title="TikTok"
              link="https://www.tiktok.com/@malabares.mkt"
            />

            <SocialLink white
              icon={icBehance}
              title="Behance"
              link="https://www.behance.net/malabaresmkt"
            />

          </div>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
          >

            <ButtonSm link="https://www.malabares.com.br/consultoria-de-marketing-digital-gratuita">

              ↪ Consultoria Online

            </ButtonSm>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div
          data-aos="fade-up"
          data-aos-delay="550"
          className="
            mt-12
            pt-8

            border-t
            border-white/10

            text-center

            text-sm
            text-white/60
          "
        >

          ©2025 <strong>Malabares MKT</strong> •
          Feito com muito ❤️ em Recife - PE

        </div>

      </Container>
      <Whatsapp />

    </footer>

  );

}

export default Footer;