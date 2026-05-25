import Container from "../layout/Container";
import Button from "../ui/Button";

import heroBg from "../../assets/images/hero-bg.jpg";
import heroPerson from "../../assets/images/hero-person.png";

function HomeHero() {

  return (

    <section
      id="HomeHero"
      className="
        w-full
        flex
        justify-center
      "
    >

      <Container>

        <div
          className="
            relative
            overflow-hidden

            rounded-3xl

            min-h-[600px]

            grid
            grid-cols-1
            lg:grid-cols-[60%_40%]

            items-center

            px-8
            md:px-16
            lg:px-24

            py-16
            lg:py-0
          "
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          {/* OVERLAY */}
          <div className="
            absolute
            inset-0

            bg-gradient-to-r
            from-white/85
            via-white/65
            to-white/20
          " />

          {/* CONTEÚDO */}
          <div
            data-aos="fade-right"
            className="
              relative
              z-10

              max-w-[680px]
            "
          >

            {/* EYEBROW */}
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                inline-block

                text-secondary

                tracking-[0.3em]

                uppercase

                mb-6
              "
            >

              marketing digital

            </span>

            {/* TÍTULO */}
            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl

                leading-widest
                tracking-tight

                text-dark
                font-bold

                mb-8
              "
            >

              Amplie sua presença online com a{" "}

              <span className="text-primary">
                Malabares
              </span>

            </h1>

            {/* TEXTO */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="
                text-[1.25rem]
                leading-[1.6]

                text-dark/80

                mb-10

                max-w-[580px]
              "
            >

              Estratégias digitais, páginas de alta conversão e conteúdo pensado para transformar presença online em resultado.

            </p>

            {/* BOTÃO */}
            <div
              data-aos="fade-up"
              data-aos-delay="550"
            >

              <Button target="_blank" link="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares">

                ↪ Fala com a gente

              </Button>

            </div>

          </div>

          {/* IMAGEM */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="
              relative
              z-10

              flex
              justify-center
              items-end
              -mb-17
            "
          >

            <img
              src={heroPerson}
              alt="Thayná Aguiar sorrindo"
              className="
                w-full
                max-w-[580px]

                mx-auto
                mt-10 md:mt-0

                animate-float
              "
            />

          </div>

        </div>

      </Container>

    </section>

  );
}

export default HomeHero;