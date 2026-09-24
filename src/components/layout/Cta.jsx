import Container from "../layout/Container";
import IcArrow from "../ui/IcArrow";

function Cta() {
  return (
    <section id="cta" className="relative 
    overflow-hidden w-full py-20 md:pt-32 bg-purple-dark text-white">


      {/* GRAIN — descomentar quando o asset estiver disponível */}
      {/* <div className="pointer-events-none absolute inset-0 opacity-35"
        style={{ backgroundImage: "url(/assets/texture-grain.jpg)", backgroundSize: "cover", mixBlendMode: "screen" }}
      /> */}

      <Container>
        <div
          data-aos="fade-up"
          className="relative z-10 flex flex-col items-center text-center gap-8 
          mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Seu projeto não precisa{" "}
            <span className="text-pink">esperar.</span>
          </h2>

          <p className="text-lilac-light">
            Não deixe o seu projeto para depois! O digital te espera.
          </p>

          <a
            data-aos="fade-up"
            data-aos-delay="200"
            href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lemon 
            font-sora font-semibold tracking-[0.2em] uppercase text-sm w-fit group"
          >
            <span className="underline-slide group-hover:text-lemon transition-colors duration-300">
              Fala com a gente
            </span>
            <span className="w-10 h-10 border-2 border-lemon rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-lemon group-hover:border-lemon shrink-0">
              <IcArrow size={16} className="group-hover:text-purple transition-colors duration-300" />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Cta;
