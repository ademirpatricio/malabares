import Container from "../../layout/Container";
import ButtonArrow from "../../ui/ButtonArrow";
import SocialLink from "../../ui/SocialLink";

import thaynaImage from "../../../assets/images/about-thayna.jpg";
import ademirImage from "../../../assets/images/about-ademir.jpg";

import icInstagram from "../../../assets/images/icons/ic-social-instagram.svg";
import icLinkedin from "../../../assets/images/icons/ic-social-linkedin.svg";

import aboutTeamBg from "../../../assets/images/home-benefitis-bg.jpg";

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

function AboutTeam() {
  return (
    <section id="aboutTeam" className="w-full pt-0 pb-12 md:py-24 bg-white"
    style={{
      backgroundImage: `url(${aboutTeamBg})`,
      backgroundPosition: "bottom center",
    }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Fotos da equipe */}
          <div className="grid grid-cols-2 gap-4">
            {team.map((member, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 150} className="flex flex-col gap-4">

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[380px] md:h-[460px] 
                    object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-2">
                    <h3 className="font-semibold text-lilac-light mb-1">{member.name}</h3>
                    <p className="text-xs text-lilac-light/50 mb-1">{member.role}</p>
                  </div>
                  <div className="flex gap-1">
                    <SocialLink white icon={icInstagram} title="Instagram" link={member.instagram} />
                    <SocialLink white icon={icLinkedin} title="LinkedIn" link={member.linkedin} />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Texto */}
          <div data-aos="fade-up" className="max-w-[450px]">

            <h2 className="
            text-3xl md:text-3xl lg:text-4xl
              font-bold leading-tight text-white mb-6">
              Uma dupla apaixonada por <span className="text-pink">
              comunicação, design e tecnologia.</span>
            </h2>

            <p className="leading-relaxed text-lilac-light mb-2">
              Estamos em Recife, centro de inovação e cultura, e nascemos do sonho de transformar ideias criativas em negócios digitais de verdade.
            </p>

            <p className="leading-relaxed text-lilac-light mb-5">
              Unimos criatividade e análise de dados para criar conteúdo que atende às necessidades do seu público e do seu projeto.
            </p>

            <ButtonArrow 
              href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares" 
              label="Fala com a gente" 
              variant="lemon"
              size="md" 
            />

          </div>

        </div>
      </Container>
    </section>
  );
}

export default AboutTeam;
