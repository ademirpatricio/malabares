import Container from "../layout/Container";
import Button from "../ui/Button";

function ContactCta() {

  return (

    <section
      id="contactCta"
      className="
        relative
        overflow-hidden

        w-full
        py-30

        bg-quaternary
        text-white
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[700px]
          h-[700px]

          bg-primary/20

          blur-[140px]
          rounded-full

          pointer-events-none
        "
      />

      <Container>

        <div
          data-aos="zoom-in"
          className="
            relative
            z-10

            max-w-[1000px]
            mx-auto

            flex
            flex-col
            items-center

            text-center
          "
        >

          {/* EYEBROW */}
          <span
            className="
              inline-block

              text-primary

              tracking-[0.3em]

              uppercase

              mb-8
            "
          >

            ⮑ O DIGITAL TE ESPERA

          </span>

          {/* TÍTULO */}
          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl

              font-bold

              leading-tight
              tracking-tight

              mb-10
            "
          >

            Seu projeto merece sair do papel.

          </h2>

          {/* TEXTO */}
          <p
            className="
              text-[1.25rem]
              leading-[1.6]

              text-white/80

              max-w-[760px]

              mb-14
            "
          >

            A gente transforma ideias em marcas, experiências e presença digital com estratégia, criatividade e tecnologia.

          </p>

          {/* MICRO BENEFÍCIOS */}
          <div
            className="
              flex
              flex-col
              md:flex-row

              items-center
              justify-center

              gap-4
              md:gap-10

              mb-16

              text-white/70
            "
          >

            <span>
              ✔ Atendimento humano
            </span>

            <span>
              ✔ Estratégia personalizada
            </span>

            <span>
              ✔ Projetos para todo o Brasil
            </span>

          </div>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <Button
              link="https://wa.me/5581999999999"
              target="_blank"
              className="
                border-white
                text-white

                hover:bg-white
                hover:text-quaternary
              "
            >

              ↪ Falar com a Malabares

            </Button>

          </div>

        </div>

      </Container>

    </section>

  );

}

export default ContactCta;