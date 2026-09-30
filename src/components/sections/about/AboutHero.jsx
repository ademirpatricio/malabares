import Container from "../../layout/Container";
import IcArrow from "../../ui/IcArrow";
import aboutThayna from "../../../assets/images/about-hero-thayna.png";

import avatar1 from "../../../assets/images/avatar-1.png";
import avatar2 from "../../../assets/images/avatar-2.png";
import avatar3 from "../../../assets/images/avatar-3.png";

import icInstagram from "../../../assets/images/icons/ic-social-instagram.svg";
import icBehance   from "../../../assets/images/icons/ic-social-behance.svg";
import icLinkedin  from "../../../assets/images/icons/ic-social-linkedin.svg";
import icTiktok    from "../../../assets/images/icons/ic-social-tiktok.svg";

import ButtonArrow from "../../ui/ButtonArrow";

const socials = [
  { icon: icInstagram, title: "Instagram", link: "https://www.instagram.com/malabaresmkt" },
  { icon: icBehance,   title: "Behance",   link: "https://www.behance.net/malabaresmkt" },
  { icon: icLinkedin,  title: "Linkedin",  link: "https://www.linkedin.com/company/malabaresmkt/" },
  { icon: icTiktok,    title: "TikTok",    link: "https://www.tiktok.com/@malabares.mkt" },
];

function AboutHero() {
  return (
    <section
      id="aboutHero"
      className="relative w-full overflow-hidden font-sora md:min-h-[93vh] pb-10 md:pb-0"
      style={{ 
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed", 
      }}
    >

      {/* Conteúdo */}
      <Container className="h-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[93vh]">

          {/* Coluna esquerda — eyebrow + título + CTA */}
          <div className="flex flex-col justify-start md:justify-center 
          pt-36 md:pt-24 pb-6 md:pb-24">
            <span
              data-aos="fade-up"
              data-aos-delay="0"
              className="text-xs 
              font-semibold md:tracking-[0.25em] uppercase text-purple mb-8 md:mb-16"
            >
              Sobre a <span className="font-black text-purple">Malabares</span>
            </span>

            <h1
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-bold text-white 
              leading-[1.05] text-[32px] 
              md:text-[45px] mb-6 md:mb-12 max-w-md"
            >
              Mais do que uma agência, somos{" "}
              <span className="text-purple">parceiros do seu crescimento.</span>
            </h1>

            <ButtonArrow 
              href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares" 
              label="Fala com a gente" 
              variant="lemon"
              size="md" 
            />


          </div>

          {/* Coluna direita — badge circular */}
          <div className="hidden md:flex items-center justify-end pb-16">
            <a
              href="#aboutServices"
              data-aos="fade-up"
              data-aos-delay="400"
              className="relative w-44 h-44 lg:w-52 lg:h-52 block"
              aria-label="Ir para os serviços"
            >
              <svg
                viewBox="0 0 160 160"
                className="absolute inset-0 w-full h-full animate-spin-slow"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="about-circle-path"
                    d="M 80,80 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                  />
                </defs>
                <text
                  fill="white"
                  style={{ 
                    fontSize: "13.5px", 
                    letterSpacing: "0.16em", 
                    fontFamily: "Sora, sans-serif" }}
                >
                  <textPath href="#about-circle-path">
                    CONHEÇA QUEM CAMINHA COM VOCÊ · CONHEÇA QUEM CAMINHA COM VOCÊ ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 25 25"
                  fill="currentColor"
                  className="text-white"
                  aria-hidden="true"
                >
                  <path d="M21.9,15.4c0.5-0.4,0.6-1,0.4-1.6c-0.4-1.3-1.9-1.7-2.9-0.7c-1.7,1.7-3.4,3.4-5.2,5.1c-0.1,0.1-0.3,0.3-0.5,0.4l0-0.7c0-4.7,0-9.5,0-14.2c0-0.5,0-1.1,0-1.6c0-0.9-0.7-1.6-1.6-1.6c-0.9-0.1-1.7,0.5-1.8,1.4c0,0.2,0,0.4,0,0.6c0,4.6,0,9.2,0,13.8l0,2.3c-0.2-0.2-0.4-0.3-0.5-0.5c-1.7-1.7-3.4-3.4-5.2-5.1c-0.7-0.7-1.8-0.7-2.5,0c-0.7,0.7-0.7,1.7,0,2.4c2.9,2.9,5.8,5.7,8.7,8.6c0.7,0.7,1.7,0.7,2.4,0C16.1,21.1,19,18.3,21.9,15.4z" />
                </svg>
              </div>
            </a>
          </div>

        </div>
      </Container>

      {/* Imagem desktop */}
      <img
        data-aos="fade-up"
        data-aos-delay="200"
        src={aboutThayna}
        alt="Thayná Aguiar"
        className="hidden md:block absolute 
        bottom-0 left-1/2 -translate-x-1/2 h-[88%] 
        object-contain object-bottom pointer-events-none z-20"
      />

      {/* Imagem mobile */}
      <img
        src={aboutThayna}
        alt="Thayná Aguiar"
        className="hidden"
      />

      {/* Rodapé — prova social + redes sociais */}
      <div className="absolute bottom-16 left-0 right-0 z-30">
        <Container>
          <div className="hidden md:flex items-center justify-between">

            {/* Prova social */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <img src={avatar1} alt="Cliente" className="w-10 h-10 rounded-full object-cover" />
                <img src={avatar2} alt="Cliente" className="w-10 h-10 rounded-full object-cover" />
                <img src={avatar3} alt="Cliente" className="w-10 h-10 rounded-full object-cover" />
              </div>
              <div className="flex items-center gap-2">
                <p className="font-sora font-medium text-white text-3xl leading-none">+50</p>
                <p className="font-sora text-white/80 text-xs leading-tight">clientes<br/>atendidos</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-sora font-medium text-white text-3xl leading-none">+10</p>
                <p className="font-sora text-white/80 text-xs leading-tight">anos de<br/>mercado</p>
              </div>
            </div>

            {/* Redes sociais */}
            <div
              data-aos="fade-up"
              data-aos-delay="550"
              className="flex items-center gap-3"
            >
              {socials.map(({ icon, title, link }) => (
                <a
                  key={title}
                  href={link}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-lemon transition-colors duration-300"
                >
                  <img src={icon} alt={title} className="w-8 h-8 object-contain" />
                </a>
              ))}
            </div>

          </div>
        </Container>
      </div>

    </section>
  );
}

export default AboutHero;
