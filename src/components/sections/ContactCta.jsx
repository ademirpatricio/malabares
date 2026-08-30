import Container from "../layout/Container";
import Button from "../ui/Button";

function ContactCta() {
  const benefits = [
    "Atendimento humano",
    "Estratégia personalizada",
    "Projetos para todo o Brasil",
  ];

  return (
    <section id="contactCta" className="relative overflow-hidden w-full py-30 bg-purple text-white">

      {/* GLOW TOP */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink/15 blur-[140px] rounded-full pointer-events-none" />

      {/* GLOW SIDE */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-violet/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div data-aos="fade-up" className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center text-center">

          {/* EYEBROW */}
          <span className="inline-block font-sora font-semibold text-sm tracking-[0.2em] uppercase text-lilac mb-8">
            o digital te espera
          </span>

          {/* TÍTULO */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight max-w-[760px] mb-8">
            Seu projeto merece sair do papel.
          </h2>

          {/* LINHA */}
          <div className="w-24 h-[2px] bg-pink/60 mb-10" />

          {/* TEXTO */}
          <p className="text-[1.1rem] leading-relaxed text-neutral-light max-w-[620px] mb-16">
            A gente transforma ideias em marcas, experiências e presença digital com estratégia, criatividade e tecnologia.
          </p>

          {/* BENEFÍCIOS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded px-6 py-5 text-neutral-light transition-all duration-300 hover:bg-white/10 hover:border-pink/20"
              >
                <span className="text-pink mr-2">·</span>
                {benefit}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="300">
            <Button
              variant="accent"
              link="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
              target="_blank"
            >
              ↪ Falar com a Malabares
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ContactCta;
