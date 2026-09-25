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
    <footer className="font-sora  w-full py-8 bg-lilac-light text-center align-center">
      <Container>
        <div className="flex flex-wrap gap-6 items-center justify-between">

          {/* LOGO */}
          <img src={logo} alt="Malabares MKT e TEC" 
          className="w-[160px] mx-auto md:mx-0"/>

          {/* CRÉDITOS */}
          <span className="text-sm text-purple/50 font-light">
            ©2026 <strong>Malabares MKT</strong> · Feito com muito 💕 em Recife - PE
          </span>

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-3 mx-auto md:mx-0">
            <SocialLink icon={icInstagram} title="Instagram" link="https://www.instagram.com/malabaresmkt" />
            <SocialLink icon={icBehance} title="Behance" link="https://www.behance.net/malabaresmkt" />
            <SocialLink icon={icLinkedin} title="LinkedIn" link="https://www.linkedin.com/company/malabaresmkt/" />
            <SocialLink icon={icTiktok} title="TikTok" link="https://www.tiktok.com/@malabares.mkt" />
          </div> 

        </div>
      </Container>
      <Whatsapp />
    </footer>
  );
}

export default Footer;
