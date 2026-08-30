import Container from "../layout/Container";
import SocialLink from "../ui/SocialLink";

import logo from "../../assets/images/logo-malabares.svg";

import icInstagram from "../../assets/images/icons/ic-social-instagram.svg";
import icBehance from "../../assets/images/icons/ic-social-behance.svg";
import icLinkedin from "../../assets/images/icons/ic-social-linkedin.svg";
import icTiktok from "../../assets/images/icons/ic-social-tiktok.svg";

import Whatsapp from "../ui/Whatsapp.jsx";

function Footer() {
  return (
    <footer className="w-full py-8 bg-purple">
      <Container>
        <div className="flex flex-wrap gap-6 items-center justify-between">

          {/* LOGO */}
          <img src={logo} alt="Malabares MKT e TEC" className="w-[160px] h-auto brightness-0 invert" />

          {/* CRÉDITOS */}
          <span className="font-sora text-sm text-lilac-light font-light">
            ©2026 <strong className="text-lilac">Malabares MKT</strong> · Feito com muito 💕 em Recife - PE
          </span>

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-3">
            <SocialLink white icon={icInstagram} title="Instagram" link="https://www.instagram.com/malabaresmkt" />
            <SocialLink white icon={icLinkedin} title="LinkedIn" link="https://www.linkedin.com/company/malabaresmkt/" />
            <SocialLink white icon={icTiktok} title="TikTok" link="https://www.tiktok.com/@malabares.mkt" />
            <SocialLink white icon={icBehance} title="Behance" link="https://www.behance.net/malabaresmkt" />
          </div>

        </div>
      </Container>
      <Whatsapp />
    </footer>
  );
}

export default Footer;
