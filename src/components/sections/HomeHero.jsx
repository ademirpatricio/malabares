import Container from "../layout/Container";

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
              href="/sobre"
              className="flex items-center gap-4 text-white font-sora font-semibold tracking-[0.2em] uppercase text-sm w-fit group"
            >
              Saiba mais
              <span className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-pink">
                <IcArrow size={16} />
              </span>
            </a>
          </div>

          {/* IMAGEM MOBILE — empurrada para o fundo da flex column */}
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            src={heroThayna}
            alt="Thayná Aguiar sorrindo"
            className="md:hidden mt-auto w-full max-h-[45vh] object-contain object-bottom pointer-events-none"
          />

        </div>
      </Container>

      {/* IMAGEM DESKTOP — absolute, permanece como estava */}
      <img
        data-aos="fade-up"
        data-aos-delay="200"
        src={heroThayna}
        alt="Thayná Aguiar sorrindo"
        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom pointer-events-none h-[90%]"
      />

      {/* REDES SOCIAIS — desktop only */}
      <div className="absolute bottom-12 left-0 right-0">
        <Container>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="hidden md:flex justify-end items-center gap-3"
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
        </Container>
      </div>

    </section>
  );
}

export default HomeHero;
