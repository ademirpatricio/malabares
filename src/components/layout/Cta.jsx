import Container from "../layout/Container";
import ctaBg from "../../assets/images/cta-bg.jpg";
import IcArrow from "../ui/IcArrow";

function Cta() {
  return (
    <section id="cta" className="relative 
    overflow-hidden w-full pt-18 pb-12 md:pt-32 md:pb-24 bg-lilac-light text-white"
    style={{ 
      backgroundImage: `url(${ctaBg})`, 
      backgroundSize: "cover", 
      backgroundPosition: "bottom center" 
    }}>

      <Container>
        <div
          data-aos="fade-up"
          className="relative z-10 flex flex-col items-center text-center gap-8 
          mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-purple">
            Seu projeto não precisa <span className="text-white"> esperar.</span>
          </h2>

          <p className="text-purple">
            Não deixe o seu projeto para depois! <strong>O digital te espera.</strong>
          </p>

          <a
            data-aos="fade-up"
            data-aos-delay="200"
            href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-pink
            font-sora font-semibold tracking-[0.2em] uppercase text-sm w-fit group"
          >
            <span className="underline-slide group-hover:text-pink 
            transition-colors duration-300">
              Fala com a gente
            </span>
            <span className="w-10 h-10 border-2 border-pink rounded-full flex items-center justify-center 
            transition-colors duration-300 group-hover:bg-pink group-hover:border-pink shrink-0">
              <IcArrow size={16} className="group-hover:text-purple transition-colors duration-300" />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Cta;
