import Container from "../layout/Container";

import Button from "../ui/Button";

import homeAboutImage from "../../assets/images/home-about-image.jpg";

function HomeAbout() {

  return (

    <section
      id="homeAbout"
      className="
        w-full
        pt-15 pb-20 md:py-30
      "
    >

      <Container>

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2

          gap-15
          lg:gap-20

          items-center
        ">

          {/* IMAGEM */}
          <div
            data-aos="fade-right"
            className="
              relative
            "
          >

            <img
              src={homeAboutImage}
              alt="Thayná e Ademir sorrindo"
              className="
                w-full
                rounded-2xl

                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            />

          </div>

          {/* CONTEÚDO */}
          <div
            data-aos="fade-left"
            className="
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

              #feito com a <strong>malabares</strong>

            </span>

            {/* TÍTULO */}
            <h2
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                text-2xl
                md:text-3xl
                lg:text-4xl

                font-bold

                leading-widest
                tracking-tight

                mb-8
              "
            >

              Marketing Digital não precisa ser complicado

            </h2>

            {/* TEXTO */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="
                text-[1.25rem]
                leading-[1.6]

                text-dark/80

                mb-6
              "
            >

              Somos a <strong>Malabares</strong>, uma agência que acredita que marketing digital não precisa ser complicado. Aqui, você fala direto com quem faz e entende cada passo do processo.

            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="550"
              className="
                text-[1.25rem]
                leading-[1.6]

                text-dark/80

                mb-10
              "
            >

              <strong>Nosso objetivo é claro:</strong> fazer sua marca crescer com ideias simples, criativas e focadas em resultados.

            </p>

            {/* BOTÃO */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
            >

              <Button target="_blank" link="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares">

                ↪ Quer mais detalhes? Bora conversar!

              </Button>

            </div>

          </div>

        </div>

      </Container>

    </section>

  );
}

export default HomeAbout;