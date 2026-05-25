import Container from "../layout/Container";

import icWhatsapp from "../../assets/images/icons/ic-social-whatsapp.svg";
import icInstagram from "../../assets/images/icons/ic-social-instagram.svg";
import icEmail from "../../assets/images/icons/ic-social-email.svg";
import icLinkedin from "../../assets/images/icons/ic-social-linkedin.svg";

function ContactChannels() {
  const channels = [
    {
      icon: icWhatsapp,
      title: "WhatsApp",
      description: "Fale diretamente com a nossa equipe.",
      link: "https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares",
      button: "Abrir WhatsApp",
    },

    {
      icon: icInstagram,
      title: "Instagram",
      description: "Acompanhe nossos bastidores e projetos.",
      link: "https://instagram.com/malabaresmkt",
      button: "@malabaresmkt",
    },

    {
      icon: icEmail,
      title: "E-mail",
      description: "Envie sua ideia ou proposta comercial.",
      link: "mailto:faleconosco@malabares.com.br",
      button: "Enviar e-mail",
    },

    {
      icon: icLinkedin,
      title: "LinkedIn",
      description: "Conecte-se com a Malabares.",
      link: "https://linkedin.com/company/malabaresmkt",
      button: "Ver perfil",
    },
  ];

  return (
    <section id="contactChannels" className="w-full pt-15 pb-10">
      <Container>
        {/* TOPO */}
        <div
          data-aos="fade-up"
          className="
            text-center

            max-w-[500px]
            mx-auto

            mb-16
          "
        >
          <span
            className="
              inline-block

              text-primary

              tracking-[0.3em]

              uppercase

              mb-6
            "
          >
            ⮑ CONTATO RÁPIDO
          </span>

          <h2
            className="
              text-2xl
              md:text-3xl
              lg:text-4xl

              font-bold

              leading-tight
              tracking-tight

              mb-8
            "
          >
            Escolha o melhor canal para falar com a gente
          </h2>

          <p
            className="
              text-[1.25rem]
              leading-[1.6]

              text-dark/70
            "
          >
            Estamos disponíveis para tirar dúvidas, analisar seu projeto e entender como podemos ajudar sua marca a crescer.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4

            gap-8
          "
        >
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group

                bg-white

                border
                border-muted

                rounded-2xl

                p-8

                transform-gpu
                will-change-transform

                transition-all
                duration-500
                ease-in-out

                hover:border-primary/10
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)]
              "
            >
              {/* ÍCONE */}
              <div
                className="
                  w-18
                  h-18

                  rounded-2xl

                  bg-light

                  flex
                  items-center
                  justify-center

                  mb-8

                  transition-all
                  duration-500
                  ease-out

                  group-hover:bg-light/50
                "
              >
                <img
                  src={channel.icon}
                  alt={channel.title}
                  className="
                    w-8
                    h-8

                    opacity-90

                    transition-all
                    duration-500
                    ease-out

                    group-hover:scale-105
                  "
                />
              </div>

              {/* TÍTULO */}
              <h3
                className="
                  text-2xl

                  font-bold

                  mb-4
                "
              >
                {channel.title}
              </h3>

              {/* TEXTO */}
              <p
                className="
                  text-[1.0rem]
                  leading-[1.6]

                  text-dark/70

                  mb-8
                "
              >
                {channel.description}
              </p>

              {/* LINK */}
              <span
                className="
                  inline-flex
                  items-center

                  text-primary

                  font-bold

                  transition-all
                  duration-500
                  ease-out

                  group-hover:translate-x-1
                "
              >
                ↪ {channel.button}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ContactChannels;
