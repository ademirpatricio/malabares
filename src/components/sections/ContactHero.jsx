import Container from "../layout/Container";
import Button from "../ui/Button";

function ContactHero() {
  return (
    <section id="contactHero" className="relative overflow-hidden w-full bg-purple text-white px-0 py-20 lg:py-28">

      {/* BG GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink/20 blur-[120px] rounded-full pointer-events-none" />

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

          <div className="flex flex-col sm:flex-row gap-5">
            <Button variant="accent" link="#contactForm">Solicitar consultoria  ⤏</Button>
            <Button
              variant="outline"
              link="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
              target="_blank"
            >
              Chamar no WhatsApp ⤏
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ContactHero;
