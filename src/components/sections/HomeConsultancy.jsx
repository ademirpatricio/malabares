import Container from "../layout/Container";

import Button from "../ui/Button";

import ctaImage from "../../assets/images/home-consultacy-bg.jpg";

function HomeConsultancy() {

  return (

    <section
      id="homeConsultancy"
      className="
        w-full
        py-30
      "
    >

      <Container>

        <div className="
          relative
          overflow-hidden

          grid
          grid-cols-1
          lg:grid-cols-2

          items-center

          bg-muted

          rounded-3xl

          px-8
          py-12

          lg:px-20
          lg:py-0
        ">

          {/* BG DECORATION */}
          <div className="
            absolute
            right-0
            top-0

            w-[600px]
            h-full

            opacity-20

            pointer-events-none
          ">

            <div className="
              absolute
              inset-0

              bg-[url('/src/assets/images/bg-symbol.svg')]
              bg-contain
              bg-no-repeat
              bg-right
            " />

          </div>

          {/* TEXTO */}
          <div
            data-aos="fade-right"
            className="
              relative
              z-10

              py-10

              max-w-[620px]
            "
          >

            {/* EYEBROW */}
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                text-md

                mb-6

                inline-block

                text-primary

                tracking-[0.25em]

                uppercase
              "
            >

              o melhor para o seu negócio

            </span>

            {/* TÍTULO */}
            <h2
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl

                font-bold

                leading-none
                tracking-tight

                mb-8
              "
            >

              <span className="text-primary">
                Consultoria gratuita
              </span>

              <br />

              de Marketing Digital

            </h2>

            {/* TEXTO */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="
                text-[1.25rem]
                leading-[1.6]

                text-dark/80

                mb-10
              "
            >

              Solicite uma <strong>consultoria gratuita</strong> e online sobre o posicionamento da sua empresa no mundo digital.

            </p>

            {/* BOTÃO */}
            <div
              data-aos="fade-up"
              data-aos-delay="550"
            >

              <Button link="/contato">

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
              items-end
              justify-center
            "
          >

            <img
              src={ctaImage}
              alt="Ademir utilizando notebook"
              className="
                w-full
                max-w-[520px]

                h-auto

                object-contain

                animate-float
              "
            />

          </div>

        </div>

      </Container>

    </section>

  );

}

export default HomeConsultancy;