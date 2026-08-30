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
    <section id="aboutTeam" className="w-full py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* TIME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {team.map((member, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 150} className="text-center">

                {/* FOTO */}
                <div className="overflow-hidden rounded-lg mb-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[520px] object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>

                {/* NOME */}
                <h3 className="text-2xl leading-tight text-purple mb-2">{member.name}</h3>

                {/* FUNÇÃO */}
                <p className="text-[1.1rem] leading-relaxed text-neutral-light mb-5">{member.role}</p>

                {/* REDES */}
                <div className="flex justify-center items-center gap-2">
                  <SocialLink icon={icInstagram} title="Instagram" link={member.instagram} />
                  <SocialLink icon={icLinkedin} title="LinkedIn" link={member.linkedin} />
                </div>

              </div>
            ))}
          </div>

          {/* TEXTO */}
          <div data-aos="fade-left" className="max-w-[620px]">

            {/* EYEBROW */}
            <div className="flex items-center gap-2 mb-6">
              <span className="font-sora font-semibold text-sm tracking-[0.2em] uppercase text-lilac">quem somos</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-purple mb-10">
              Somos uma dupla apaixonada por comunicação, design, inovação e tecnologia
            </h2>

            <p className="text-[1.1rem] leading-relaxed text-neutral mb-8">
              Estamos localizados em Recife, centro de inovação, tecnologia e cultura e nascemos do sonho de transformar ideias criativas em negócios digitais de sucesso.
            </p>

            <p className="text-[1.1rem] leading-relaxed text-neutral mb-10">
              Unimos criatividade e análise de dados para criar conteúdo que atende às necessidades do seu público e projeto.
            </p>

            <Button link="/contato">Fala com a gente agora ⤏</Button>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default AboutTeam;
