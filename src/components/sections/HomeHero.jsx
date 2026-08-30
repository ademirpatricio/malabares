import Container from "../layout/Container";
import Button from "../ui/Button";
import NavLink from "../ui/NavLink";

import heroPerson from "../../assets/images/hero-person.png";
import heroBg from "../../assets/images/home-hero-bg.jpg";

function HomeHero() {

  return (

    <section id="HomeHero" className="relative w-full flex justify-center bg-purple overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>

      {/* OVERLAY */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* HALFTONE */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] opacity-40"
        style={{
          backgroundImage: "radial-gradient(#6A3CFF 2px, transparent 2.2px)",
          backgroundSize: "14px 14px",
        }}
      />

      <Container>

        <div className="relative
            min-h-[650px] grid grid-cols-1 lg:grid-cols-[40%_60%]
            items-center py-16 lg:py-0">

          {/* CONTEÚDO */}
          <div className="relative z-10 max-w-[520px]" data-aos="fade-right">

            {/* EYEBROW — ponto-rótulo */}
            <div className="flex items-center gap-2 mb-6"
              data-aos="fade-up" data-aos-delay="100">
              <span className="font-sora font-semibold text-sm tracking-[0.2em] uppercase text-lilac">
                MKT Digital &amp; Tecnologia
              </span>
            </div>

            {/* TÍTULO */}
            <h1
              data-aos="fade-up" data-aos-delay="250"
              className="text-4xl md:text-5xl lg:text-6xl leading-[0.92]
              tracking-tight text-white mb-8">
              Equilibrar é <span className="text-pink">método</span>, nunca foi sorte.
            </h1>

            {/* TEXTO */}
            <p
              data-aos="fade-up" data-aos-delay="400"
              className="text-[19px] text-lilac-light mb-10 font-light leading-relaxed">
              Estratégias digitais, páginas de alta conversão e conteúdo pensado para transformar presença online em resultado.
            </p>

            {/* BOTÃO */}
            <div data-aos="fade-up" data-aos-delay="550" className="flex gap-6 items-center flex-wrap">
              <Button
                target="_blank"
                variant="accent"
                link="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
              >
                Falar com a gente ⤏
              </Button>
              <NavLink variant="white" href="/sobre">Sobre nós</NavLink>
            </div>

          </div>

          {/* IMAGEM */}
          <div data-aos="fade-left" data-aos-delay="300"
            className="relative z-10 flex justify-center items-end -mb-16">
            <img
              src={heroPerson}
              alt="Thayná Aguiar sorrindo"
              className="w-full max-w-[580px] mx-auto mt-10 md:mt-0"
            />
          </div>

        </div>

      </Container>

    </section>

  );
}

export default HomeHero;
