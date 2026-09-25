import Container from "../layout/Container";
import IcArrow from "../ui/IcArrow";

import homeAboutImage from "../../assets/images/home-about-image.jpg";
import heroAssetLight from "../../assets/images/hero-asset-light.svg";

const pillars = [
  "Você fala\ncom quem faz.",
  "Você entende\no que está sendo feito.",
  "E sabe por que\nestá sendo feito.",
];

function HomeAbout() {
  return (
    <section id="homeAbout" 
    className="w-full pt-0 pb-20 md:pb-30 md:pt-6 bg-purple-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-20 items-center">

          {/* IMAGEM */}
          <div data-aos="fade" className="relative order-2 lg:order-1">
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
          <div data-aos="fade" className="max-w-[620px] order-1 lg:order-2">

            {/* EYEBROW */}
            <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-2 mb-6">
              <span className="font-sora text-xs 
              font-semibold md:tracking-[0.25em] uppercase text-violet">
                #feito com a <strong>malabares</strong>
              </span>
            </div>

            {/* TÍTULO */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-sora font-bold text-4xl md:text-3xl lg:text-4xl 
              leading-tight tracking-tight text-white mb-8"
            >
              Estratégia não precisa ser complicada.{" "}
              <span className="text-pink">Precisa fazer sentido.</span>
            </h2>

            {/* PARÁGRAFOS */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="leading-relaxed text-lilac-light mb-5"
            >
              A <strong className="text-lilac-light">Malabares</strong> nasceu para 
              tornar o marketing mais próximo, mais claro e mais estratégico. 
              Aqui, você conversa diretamente com quem pensa, cria e acompanha 
              o seu projeto de verdade.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="leading-relaxed text-lilac-light"
            >
              Da primeira ideia ao resultado, a gente está junto no caminho 
              com transparência, criatividade e foco no que realmente importa: 
              o crescimento da sua marca.
            </p>

            

          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeAbout;
