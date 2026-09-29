import Container from "../layout/Container";
import Footer from "./Footer";
import ctaBgPink from "../../assets/images/cta-bg-pink.jpg";
import ButtonArrow from "../ui/ButtonArrow";

function Cta() {
  return (

    <section 
      id="cta" 
      className="
        relative overflow-hidden w-full 
        pt-12 md:pt-32 
        text-white bg-pink font-sora"
      style={{ 
        backgroundImage: `url(${ctaBgPink})`, 
        backgroundSize: "cover", 
        backgroundPosition: "top center" 
      }}
    >
      <Container>

        <div
          data-aos="fade-up"
          className="
            relative z-10 
            flex flex-col items-center gap-8 
            text-center
            mx-auto mb-24"
          >
          <h3 className="text-3xl lg:text-4xl font-bold text-white uppercase">
            O principal passo é <span className="text-purple"> <br/> sempre o primeiro.</span>
          </h3>
          <p className="text-white mb-8">
            Não se preocupe em ter tudo resolvido agora, <br/> a gente te ajuda durante o caminho.
          </p>
          <ButtonArrow 
            href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares" 
            label="Agende uma conversa" 
            variant="light"
            size="md" 
          />
        </div>

      </Container>
      <Footer/>

    </section>
    
  );
}

export default Cta;
