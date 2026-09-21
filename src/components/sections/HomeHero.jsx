import Container from "../layout/Container";

import heroThayna from "../../assets/images/hero-thayna.png";
import heroAsset from "../../assets/images/hero-asset.svg";
import IcArrow from "../ui/IcArrow";
import IcArrowDown from "../ui/IcArrowDown";
import avatar1 from "../../assets/images/avatar-1.png";
import avatar2 from "../../assets/images/avatar-2.png";
import avatar3 from "../../assets/images/avatar-3.png";

import icInstagram from "../../assets/images/icons/ic-social-instagram.svg";
import icBehance from "../../assets/images/icons/ic-social-behance.svg";
import icLinkedin from "../../assets/images/icons/ic-social-linkedin.svg";
import icTiktok from "../../assets/images/icons/ic-social-tiktok.svg";

const socials = [
  { icon: icInstagram, title: "Instagram", link: "https://www.instagram.com/malabaresmkt" },
  { icon: icBehance,   title: "Behance",   link: "https://www.behance.net/malabaresmkt" },
  { icon: icLinkedin,  title: "Linkedin",  link: "https://www.linkedin.com/company/malabaresmkt/" },
  { icon: icTiktok,    title: "TikTok",    link: "https://www.tiktok.com/@malabares.mkt" },
];

function HomeHero() {
  return (
    <section
      id="HomeHero"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container className="h-full">
        <div className="flex flex-col pt-10 md:pt-0 min-h-[90vh] 
        md:grid md:grid-cols-2 md:min-h-[90vh]">

          {/* COLUNA ESQUERDA — eyebrow + h1 */}
          <div className="flex flex-col justify-center pt-24 md:pt-0 pb-4 md:pb-16 
          text-center md:text-left">
            <span
              data-aos="fade-up"
              data-aos-delay="0"
              className="font-sora text-xs 
              font-semibold md:tracking-[0.25em] uppercase text-purple mb-6"
            >
              Somos uma <span className="font-bold underline">Agência</span> de MKT &amp; TEC
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-archivo text-white uppercase leading-[1.3] text-[38px] md:text-[55px] mb-6"
            >
              Equilibrar
              <br />
              é{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "4px",
                }}
              >
                Método,
              </span>
              <br />
              Não Sorte.
            </h1>

            {/* CTA */}
            <a
              data-aos="fade-up"
              data-aos-delay="350"
              rel="noopener noreferrer"
              href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
              className="flex items-center gap-4 text-white font-sora font-semibold tracking-[0.2em] uppercase text-sm w-fit group hidden md:flex"
            >
              Fala com a gente agora
              <span className="w-10 h-10 border-2 border-white rounded-full flex
              items-center justify-center transition-colors group-hover:bg-lemon group-hover:text-purple group-hover:border-lemon">
                <IcArrow size={16} />
              </span>
            </a>

          </div>

          {/* COLUNA DIREITA — texto de apoio + CTA */}
          <div className="flex flex-col justify-start md:justify-center 
          items-center md:items-end pb-6 md:pb-16 gap-4 md:gap-8">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-white font-sora font-light text-center md:text-right leading-relaxed max-w-[280px] text-base md:text-[20px]"
            >
              Estratégias digitais, páginas de alta conversão e conteúdo
              pensado para transformar presença online em resultado.
            </p>
            <a
              data-aos="fade-up"
              data-aos-delay="400"
              href="#homeServices"
              className="flex items-center gap-4 text-white font-sora font-semibold tracking-[0.2em] uppercase text-sm w-fit group"
            >
              Saiba mais
              <span className="w-10 h-10 border-2 border-white rounded-full flex items-center 
              justify-center transition-colors group-hover:bg-lemon group-hover:text-purple group-hover:border-lemon">
                <IcArrowDown size={16} />
              </span>
            </a>
          </div>

          {/* IMAGEM MOBILE — empurrada para o fundo da flex column */}
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            src={heroThayna}
            alt="Thayná Aguiar sorrindo"
            className="md:hidden mt-auto w-full max-h-[45vh] 
            object-contain object-bottom pointer-events-none z-10"
          />

        </div>
      </Container>

      {/* ASSET CIRCULAR — atrás da Thayná */}
      <img
        src={heroAsset}
        alt=""
        aria-hidden="true"
        className=" md:block absolute -translate-x-1/2  
        pointer-events-none animate-spin-slow 
        top-[65%] left-[50%] w-[250px] h-[250px] z-5
        md:top-[22%] md:left-[60%] md:w-[220px] md:h-[220px]"
      />

      {/* IMAGEM DESKTOP — absolute, permanece como estava */}
      <img
        data-aos="fade-up"
        data-aos-delay="200"
        src={heroThayna}
        alt="Thayná Aguiar sorrindo"
        className="hidden md:block absolute bottom-0 
        left-1/2 -translate-x-1/2 object-contain object-bottom 
        pointer-events-none h-[90%] z-10"
      />

      {/* RODAPÉ DO HERO — prova social + redes sociais */}
      <div className="absolute bottom-16 left-0 right-0">
        <Container>
          <div className="hidden md:flex items-center justify-between">

            {/* PROVA SOCIAL */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  <img src={avatar1} alt="Cliente" className="w-10 h-10 rounded-full object-cover " />
                  <img src={avatar2} alt="Cliente" className="w-10 h-10 rounded-full object-cover " />
                  <img src={avatar3} alt="Cliente" className="w-10 h-10 rounded-full object-cover " />
                </div>
                <div className="text-left flex align-center gap-2">
                  <p className="font-sora font-medium text-white text-3xl leading-none">+50</p>
                  <p className="font-sora text-white/80 text-xs leading-tight">clientes<br/>atendidos</p>
                </div>
              </div>
              <div className="text-left flex items-center gap-2">
                <p className="font-sora font-medium text-white text-3xl leading-none">+10</p>
                <p className="font-sora text-white/80 text-xs leading-tight">anos de<br/>mercado</p>
              </div>
            </div>

            {/* REDES SOCIAIS */}
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

export default HomeHero;
