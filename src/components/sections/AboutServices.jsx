import Container from "../layout/Container";

import strategyIcon from "../../assets/images/icons/about-service-icon-1.png";
import infoproductIcon from "../../assets/images/icons/about-service-icon-2.png";
import socialIcon from "../../assets/images/icons/about-service-icon-3.png";
import contentIcon from "../../assets/images/icons/about-service-icon-4.png";

function AboutServices() {

  const services = [
    {
      icon: strategyIcon,
      title: "Estratégias de Marketing Digital",
      description:
        "Desenvolvemos estratégias personalizadas para aumentar a visibilidade da sua marca, atrair mais clientes e gerar vendas consistentes.",
    },

    {
      icon: infoproductIcon,
      title: "Criação de Infoprodutos",
      description:
        "Seja qual for a sua ideia — e-book, curso online, podcast ou webinar — nossa missão é te ajudar a transformar seu conhecimento em produtos lucrativos.",
    },

    {
      icon: socialIcon,
      title: "Gestão de Redes Sociais",
      description:
        "Amplie o seu poder nas redes sociais! Com a nossa expertise, vamos te auxiliar a expandir o seu alcance, engajar seu público-alvo e construir uma comunidade para sua marca.",
    },

    {
      icon: contentIcon,
      title: "Marketing de Conteúdo",
      description:
        "Temos um time completo para criar e executar a melhor estratégia de conteúdo para o seu projeto com a criação de vídeos, textos e infográficos.",
    },
  ];

  return (

    <section
      id="aboutServices"
      className="w-full py-20"
    >

      <Container>

        {/* TOPO */}
        <div
          data-aos="fade-up"
          className="
            max-w-[1100px]
            mx-auto

            text-center

            mb-20
          "
        >

          <h2
            className="
              text-2xl
              md:text-3xl
              lg:text-4xl

              font-bold

              leading-tight
              tracking-tight
            "
          >

            Quer que a sua mensagem alcance o mundo?

            <br />

            Deixa que a gente te ajuda a{" "}

            <span className="text-primary">
              compartilhar!
            </span>

          </h2>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4

            gap-12
            lg:gap-10
          "
        >

          {services.map((service, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                flex
                flex-col

                h-full
              "
            >

              {/* ÍCONE */}
              <img
                src={service.icon}
                alt={service.title}
                className="
                  w-[100px]
                  h-[100px]

                  mb-8
                "
              />

              {/* TÍTULO */}
              <h3
                className="
                  text-2xl

                  font-bold

                  leading-tight

                  mb-6
                "
              >

                {service.title}:

              </h3>

              {/* TEXTO */}
              <p
                className="
                  text-[1.25rem]
                  leading-[1.6]

                  text-dark/80
                "
              >

                {service.description}

              </p>

            </div>

          ))}

        </div>

        

      </Container>

    </section>

  );
}

export default AboutServices;