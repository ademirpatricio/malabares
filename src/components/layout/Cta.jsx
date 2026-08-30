import Container from "../layout/Container";
import Button from "../ui/Button";

function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden w-full py-20 lg:py-32 bg-purple text-white">

      {/* HALFTONE — canto inferior esquerdo */}
      <div
        className="pointer-events-none absolute left-[-100px] bottom-[-140px] w-[560px] h-[560px] opacity-45"
        style={{
          backgroundImage: "radial-gradient(#6A3CFF 2px, transparent 2.2px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* GRAIN — descomentar quando o asset estiver disponível */}
      {/* <div className="pointer-events-none absolute inset-0 opacity-35"
        style={{ backgroundImage: "url(/assets/texture-grain.jpg)", backgroundSize: "cover", mixBlendMode: "screen" }}
      /> */}

      <Container>
        <div
          data-aos="fade-up"
          className="relative z-10 flex flex-col items-center text-center gap-8 max-w-[760px] mx-auto"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.92] tracking-[-0.03em]">
            Seu projeto não precisa{" "}
            <span className="text-pink">esperar</span>.
          </h2>

          <p className="text-[1.1rem] leading-relaxed text-lilac-light">
            Não deixe o seu projeto para depois! O digital te espera.
          </p>

          <div data-aos="fade-up" data-aos-delay="200">
            <Button
              variant="accent"
              target="_blank"
              link="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
            >
              Fala com a gente ⤏
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;
