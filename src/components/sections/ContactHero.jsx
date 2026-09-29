import Container from "../layout/Container";
import IcArrow from "../ui/IcArrow";

function ContactHero() {
  return (
    <section id="contactHero" 
    className="relative overflow-hidden w-full bg-purple text-white flex items-center"
    style={{ minHeight: "90vh" }}>

      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[500px] 
      h-[500px] bg-pink/20 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div data-aos="fade-up" className="relative z-10 max-w-[700px]">

          <span className="inline-block font-sora font-semibold text-sm tracking-[0.2em] 
          uppercase text-lilac mb-8">
            vamos conversar
          </span>

          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-white mb-10">
            Vamos transformar sua ideia em um projeto digital de verdade.
          </h1>

          <p className="text-[1.1rem] font-light leading-relaxed text-lilac-light max-w-[700px] mb-12">
            Fale diretamente com a nossa equipe e receba uma análise inicial do seu projeto. Sem enrolação, sem atendimento robotizado e com soluções pensadas para a sua realidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <a
              href="#contactForm"
              className="flex items-center gap-4 text-white font-sora font-semibold tracking-[0.2em] uppercase text-sm w-fit group"
            >
              <span className="underline-slide group-hover:text-lemon transition-colors duration-300">
                Solicitar consultoria
              </span>
              <span className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-lemon group-hover:border-lemon shrink-0">
                <IcArrow size={16} className="group-hover:text-purple transition-colors duration-300" />
              </span>
            </a>
            <a
              href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/60 font-sora font-semibold tracking-[0.2em] uppercase text-sm w-fit group hover:text-white transition-colors duration-300"
            >
              <span className="underline-slide">
                WhatsApp
              </span>
              <span className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:border-white shrink-0">
                <IcArrow size={16} />
              </span>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ContactHero;
