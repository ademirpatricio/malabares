import Container from "../layout/Container";
import IcArrow from "../ui/IcArrow";
import ButtonArrow from "../../components/ui/ButtonArrow";

import homeAboutImage from "../../assets/images/home-about-image.jpg";
import heroAssetLight from "../../assets/images/hero-asset-light.svg";

const pillars = [
  "Você fala\ncom quem faz.",
  "Você entende\no que está sendo feito.",
  "E sabe por que\nestá sendo feito.",
];

function HomeAbout() {
  return (
    <section 
      id="homeAbout" 
      className="w-full pt-0 pb-20 md:pb-30 md:pt-20 bg-purple-dark"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* IMAGEM */}
          <div data-aos="fade" className="max-w-[600px] relative order-1 md:order-2">
            <img
              src={homeAboutImage}
              alt="Thayná e Ademir sorrindo"
              className="w-full rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
            {/* SVG rotativo sobreposto */}
            <img
              src={heroAssetLight}
              alt=""
              className="absolute pointer-events-none animate-spin-slow
              -bottom-10 right-5 w-[120px] h-[120px] z-10
              md:-bottom-20 md:-right-20 md:w-[200px] md:h-[200px]"
            />
          </div>

          {/* CONTEÚDO */}
          <div data-aos="fade" className="max-w-[500px] order-2 md:order-1">

            {/* EYEBROW */}
            <span 
              data-aos="fade-up" data-aos-delay="100" 
              className="text-xs font-semibold mb-6 mt-15 md:mt-0 flex
              tracking-[0.25em] uppercase text-violet">
              Quem faz a Malabares
            </span>

            {/* TÍTULO */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-sora font-bold text-3xl md:text-3xl lg:text-4xl 
              leading-tight tracking-tight text-white mb-6"
            >
              Uma dupla apaixonada por <span className="text-pink">
              comunicação, design e tecnologia.</span>
            </h2>

            {/* PARÁGRAFOS */}
            <p
              data-aos="fade-up"
              data-aos-delay="200" 
              className="leading-relaxed text-lilac-light mb-4"
            >
              Somos <a href="https://www.instagram.com/thaayag/" target="_blank" className="text-white hover:underline">Thayná Aguiar </a>
              e <a href="https://www.instagram.com/ademir_patricio/" target="_blank" className="text-white hover:underline">Ademir Patrício</a>.
              Estamos em Recife, centro de inovação e cultura, e nascemos com vontade
              de transformar ideias criativas em negócios digitais de verdade.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="300" 
              className="leading-relaxed text-lilac-light mb-4"
            >
              Unimos criatividade e análise de dados para criar conteúdo que
              atende às necessidades do seu público e do seu projeto.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="leading-relaxed text-lilac-light mb-8"
            >
              Da primeira ideia ao resultado, a gente está junto no caminho 
              com transparência, criatividade e foco no que realmente importa: 
              o crescimento da sua marca.
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

export default HomeAbout;
