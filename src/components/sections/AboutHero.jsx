import Container from "../layout/Container";
import Button from "../ui/Button";

import aboutHeroBg from "../../assets/images/about-hero-bg.jpg";

function AboutHero() {
  return (
    <section id="aboutHero" className="w-full pt-10 bg-white">
      <Container>
        <div
          className="relative overflow-hidden rounded-lg min-h-[550px] flex items-center justify-center text-center px-10 py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHeroBg})` }}
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple/80 via-purple-dark/75 to-purple-dark/90 " />

          {/* CONTEÚDO */}
          <div data-aos="zoom-in" className="relative z-10 max-w-[1100px] flex flex-col items-center">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl md:text-3xl lg:text-4xl max-w-[650px] leading-tight tracking-tight text-white mb-8"
            >
              A gente cuida do digital enquanto você cuida do seu negócio
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-[1.25rem] leading-relaxed text-white/90 max-w-[900px] mb-12"
            >
              Sem enrolação, só resultados:{" "}
              <strong className="text-white">marketing digital</strong>{" "}
              feito sob medida pra você.
            </p>

            <div data-aos="fade-up" data-aos-delay="400">
              <Button link="/contato">Fala com a gente ⤏</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutHero;
