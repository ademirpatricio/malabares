import Container from "../layout/Container";
import Button from "../ui/Button";

function ContactHero() {

  return (

    <section
      id="contactHero"
      className="
        w-full
        py-30
      "
    >

      <Container>

        <div
          className="
            relative
            overflow-hidden

            rounded-3xl

            bg-quaternary
            text-white

            px-8
            md:px-16
            lg:px-24

            py-20
            lg:py-28
          "
        >

          {/* BG GLOW */}
          <div
            className="
              absolute
              top-0
              right-0

              w-[500px]
              h-[500px]

              bg-primary/20

              blur-[120px]
              rounded-full

              pointer-events-none
            "
          />

          {/* CONTEÚDO */}
          <div
            data-aos="fade-up"
            className="
              relative
              z-10

              max-w-[900px]
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

              ⮑ VAMOS CONVERSAR

            </span>

            {/* TÍTULO */}
            <h1
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

              Vamos transformar sua ideia em um projeto digital de verdade.

            </h1>

            {/* TEXTO */}
            <p
              className="
                text-[1.25rem]
                leading-[1.6]

                text-white/80

                max-w-[700px]

                mb-12
              "
            >

              Fale diretamente com a nossa equipe e receba uma análise inicial do seu projeto. Sem enrolação, sem atendimento robotizado e com soluções pensadas para a sua realidade.

            </p>

            {/* BOTÕES */}
            <div
              className="
                flex
                flex-col
                sm:flex-row

                gap-5
              "
            >

              <Button link="#contactForm">

                ↪ Solicitar consultoria

              </Button>

              <a
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center

                  border-2
                  border-white/20

                  text-white

                  rounded

                  px-10
                  py-5

                  text-md
                  md:text-xl

                  font-bold

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:text-quaternary
                "
              >

                💬 Chamar no WhatsApp

              </a>

            </div>

          </div>

        </div>

      </Container>

    </section>

  );

}

export default ContactHero;