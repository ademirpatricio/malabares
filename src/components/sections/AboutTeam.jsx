import Container from "../layout/Container";
import Button from "../ui/Button";
import SocialLink from "../ui/SocialLink";

import thaynaImage from "../../assets/images/about-thayna.jpg";
import ademirImage from "../../assets/images/about-ademir.jpg";

import icInstagram from "../../assets/images/icons/ic-social-instagram.svg";
import icLinkedin from "../../assets/images/icons/ic-social-linkedin.svg";

function AboutTeam() {

  const team = [
    {
      image: thaynaImage,
      name: "Thayná Aguiar",
      role: "Conteúdo / Estratégia",
      instagram: "https://www.instagram.com/thaayag",
      linkedin: "https://www.linkedin.com/in/thaynaaguiar/",
    },

    {
      image: ademirImage,
      name: "Ademir Patrício",
      role: "Design / Tecnologia",
      instagram: "https://www.instagram.com/ademir_patricio/",
      linkedin: "https://www.linkedin.com/in/ademirpatricio/",
    },
  ];

  return (

    <section
      id="aboutTeam"
      className="w-full py-20"
    >

      <Container>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-30
            items-center
          "
        >

          {/* TIME */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2

              gap-10
            "
          >

            {team.map((member, index) => (

              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="
                  text-center
                "
              >

                {/* FOTO */}
                <div
                  className="
                    overflow-hidden
                    rounded-2xl

                    mb-8
                  "
                >

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-[520px]

                      object-cover

                      transition-all
                      duration-500

                      hover:scale-105
                    "
                  />

                </div>

                {/* NOME */}
                <h3
                  className="
                    text-2xl

                    font-bold

                    mb-2
                  "
                >

                  {member.name}

                </h3>

                {/* FUNÇÃO */}
                <p
                  className="
                    text-[1.25rem]
                    leading-[1.6]

                    text-dark/60

                    mb-5
                  "
                >

                  {member.role}

                </p>

                {/* REDES */}
                <div
                  className="
                    flex
                    justify-center
                    items-center
                    
                    gap-2
                  "
                >

                  <SocialLink
                    icon={icInstagram}
                    title="Instagram"
                    link={member.instagram}
                  />

                  <SocialLink
                    icon={icLinkedin}
                    title="LinkedIn"
                    link={member.linkedin}
                  />

                </div>

              </div>

            ))}

          </div>

          {/* TEXTO */}
          <div
            data-aos="fade-left"
            className="
              max-w-[620px]
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

              ⮑ QUEM SOMOS

            </span>

            {/* TÍTULO */}
            <h2
              className="
                text-2xl
                md:text-3xl
                lg:text-4xl

                font-bold

                leading-tight
                tracking-tight

                mb-10
              "
            >

              Somos uma dupla apaixonada por comunicação, design, inovação e tecnologia

            </h2>

            {/* TEXTO */}
            <p
              className="
                text-[1.25rem]
                leading-[1.6]

                text-dark/80

                mb-10
              "
            >

              Estamos localizados em Recife, centro de inovação, tecnologia e cultura e nascemos do sonho de transformar ideias criativas em negócios digitais de sucesso.

            </p>

            <p
              className="
                text-[1.25rem]
                leading-[1.6]

                text-dark/80

                mb-10
              "
            >

              Unimos criatividade e análise de dados para criar conteúdo que atende às necessidades do seu público e projeto.

            </p>

            {/* CTA */}

            <Button className="hover:text-white" link="/contato">

              ↪ Fala com a gente agora!

            </Button>

          </div>

        </div>

      </Container>

    </section>

  );
}

export default AboutTeam;