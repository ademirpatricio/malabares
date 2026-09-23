import Container from "../layout/Container";
import IcArrow from "../ui/IcArrow";

import homeAboutImage from "../../assets/images/home-about-image.jpg";

const pillars = [
  "Você fala\ncom quem faz.",
  "Você entende\no que está sendo feito.",
  "E sabe por que\nestá sendo feito.",
];

function HomeAbout() {
  return (
    <section id="homeAbout" className="w-full pt-15 pb-20 md:pb-30 md:pt-6 bg-purple-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-20 items-center">

          {/* IMAGEM */}
          <div data-aos="fade" className="relative">
            <img
              src={homeAboutImage}
              alt="Thayná e Ademir sorrindo"
              className="w-full rounded shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </div>

          {/* CONTEÚDO */}
          <div data-aos="fade" className="max-w-[620px]">

            {/* EYEBROW */}
            <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-2 mb-6">
              <span className="font-sora font-semibold text-sm tracking-[0.2em] uppercase text-lilac">
                #feito com a <strong>malabares</strong>
              </span>
            </div>

            {/* TÍTULO */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-white mb-8"
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
              A <strong className="text-pink">Malabares</strong> nasceu para 
              tornar o marketing mais próximo, mais claro e mais estratégico. 
              Aqui, você conversa diretamente com quem pensa, cria e acompanha 
              o seu projeto de verdade.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="leading-relaxed text-lilac-light mb-10"
            >
              Da primeira ideia ao resultado, a gente está junto no caminho 
              com transparência, criatividade e foco no que realmente importa: 
              o crescimento da sua marca.
            </p>

            {/* BOTÃO */}
            <a
              data-aos="fade-up"
              data-aos-delay="600"
              href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white hover:text-lemon font-sora 
              font-semibold tracking-[0.2em] uppercase text-sm w-fit group"
            >
              <span className="underline-slide">Bora conversar com a gente</span>
              <span className="w-10 h-10 border-2 border-white rounded-full 
              flex items-center justify-center transition-colors group-hover:bg-lemon 
              group-hover:text-purple group-hover:border-lemon">
                <IcArrow size={16} />
              </span>
            </a>

          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeAbout;
