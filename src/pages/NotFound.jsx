import { Link } from "react-router-dom";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

function NotFound() {

  return (

    <section
      id="notFound"
      className="
        relative
        overflow-hidden

        min-h-screen

        flex
        items-center
        justify-center

        bg-quaternary
        text-white
      "
    >

      {/* GRID BG */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

          bg-[size:60px_60px]
        "
      />

      {/* GLOW 1 */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-150px]

          w-[500px]
          h-[500px]

          rounded-full

          bg-primary/20

          blur-[140px]
        "
      />

      {/* GLOW 2 */}
      <div
        className="
          absolute
          bottom-[-250px]
          right-[-150px]

          w-[600px]
          h-[600px]

          rounded-full

          bg-secondary/15

          blur-[160px]
        "
      />

      <Container>

        <div
          data-aos="fade-up"
          className="
            relative
            z-10

            max-w-[900px]
            mx-auto

            text-center
          "
        >

          {/* LABEL */}
          <span
            className="
              inline-block

              text-primary

              tracking-[0.4em]

              uppercase

              mb-8
            "
          >

            ERRO 404

          </span>

          {/* 404 */}
          <div
            className="
              text-[120px]
              md:text-[180px]
              lg:text-[240px]

              font-black

              leading-none

              text-white/5

              absolute

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              pointer-events-none
              select-none
            "
          >

            404

          </div>

          {/* CONTEÚDO */}
          <div className="relative z-10">

            {/* TÍTULO */}
            <h1
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl

                font-bold

                leading-tight
                tracking-tight

                mb-8
              "
            >

              Essa página saiu da órbita.

            </h1>

            {/* TEXTO */}
            <p
              className="
                text-[1.25rem]
                leading-[1.6]

                text-white/75

                max-w-[620px]
                mx-auto

                mb-14
              "
            >

              Talvez o link esteja quebrado ou a rota tenha sido movida.
              Mas relaxa 😄
              A gente te ajuda a voltar.

            </p>

            {/* BOTÃO */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <Link to="/">

                <Button
                  className="
                    border-white/20

                    bg-white/5
                    backdrop-blur-md

                    text-white

                    hover:bg-white
                    hover:text-quaternary
                    hover:border-white
                  "
                >

                  ↪ Voltar para a Home

                </Button>

              </Link>

            </div>

          </div>

        </div>

      </Container>

    </section>

  );

}

export default NotFound;