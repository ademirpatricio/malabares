import Container from "../layout/Container";

import heroBg from "../../assets/images/hero-background.jpg";
import heroThayna from "../../assets/images/hero-thayna.png";
import IcArrow from "../ui/IcArrow";

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
        height: "90vh",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>

        {/* COLUNAS — 1 no mobile, 2 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ height: "90vh" }}>

          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col justify-center pt-24 md:pt-0 pb-8 md:pb-16">
            <span
              data-aos="fade-up"
              data-aos-delay="0"
              className="font-sora text-xs font-semibold tracking-[0.25em] uppercase text-purple mb-6"
            >
              Somos uma <span className="font-bold underline">Agência</span> de MKT &amp; TEC
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-archivo text-white uppercase leading-[1.3] text-[38px] md:text-[55px]"
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
          </div>

          {/* COLUNA DIREITA */}
          <div className="flex flex-col justify-start md:justify-center items-start md:items-end pb-16 gap-6 md:gap-8">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-white font-sora font-light text-left md:text-right leading-relaxed max-w-[280px] text-base md:text-[20px]"
            >
              Estratégias digitais, páginas de alta conversão e conteúdo
              pensado para transformar presença online em resultado.
            </p>
            <a
              data-aos="fade-up"
              data-aos-delay="400"
              href="/sobre"
              className="flex items-center gap-4 text-white font-sora font-semibold tracking-[0.2em] uppercase text-sm w-fit group"
            >
              Saiba mais
              <span className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-pink">
                <IcArrow size={16} />
              </span>
            </a>
          </div>

        </div>

      </Container>

      {/* IMAGEM — menor no mobile */}
      <img
        data-aos="fade-up"
        data-aos-delay="200"
        src={heroThayna}
        alt="Thayná Aguiar sorrindo"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom pointer-events-none h-[40%] md:h-[90%]"
      />

      {/* REDES SOCIAIS */}
      <div className="absolute bottom-12 left-0 right-0">
        <Container>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex justify-center md:justify-end items-center gap-3"
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
                <img src={icon} alt={title} className="w-4 h-4 md:w-8 md:h-8 object-contain text-purple" />
              </a>
            ))}
          </div>
        </Container>
      </div>

    </section>
  );
}

export default HomeHero;
