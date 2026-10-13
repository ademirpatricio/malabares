{/* Componentes */}
import Container from "../layout/Container";
import ServiceCard from "../ui/ServiceCard";

{/* Imagens */}
import homeServicesBg from "../../assets/images/home-services-bg.jpg";

function HomeServices() {
  return (
    <section 
      id="homeServices" 
      className="w-full py-18 md:pt-24 md:pb-24" 
      style={{ 
        backgroundImage: `url(${homeServicesBg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center" }}
      >
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* HEADER */}
          <div className="w-full text-left flex flex-col justify-center gap-5">
        
            <span 
              data-aos="fade-up" data-aos-delay="100" 
              className="text-xs font-semibold md:tracking-[0.25em] uppercase text-violet">
              O que fazemos por aqui
            </span>       
            
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-sora font-bold text-4xl md:text-3xl lg:text-4xl 
              leading-tight tracking-tight text-white">
              Você e sua empresa não precisam <span className="text-pink"> fazer de tudo sozinhos.</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="leading-relaxed text-lilac-light"
            >
              Da estratégia à execução, juntamos criatividade,
              comunicação e tecnologia. Fazemos tudo para construir
              uma presença digital forte para o seu negócio.     
            </p>


          </div>

          {/* CARD 1 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <ServiceCard
              number="01"
              title="Estratégia & Planejamento"
              description="Antes de criar, a gente entende onde 
              você quer chegar. Planejamos sua comunicação para 
              transformar objetivos em ações que fazem sentido."
            />
          </div>

          {/* CARD 2 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <ServiceCard
              number="02"
              title="Conteúdo & Redes Sociais"
              description="Conteúdo não serve só para preencher 
              calendário. Criamos presença, relacionamento e uma 
              comunicação que conversa com o seu público."
            />
          </div>

          {/* CARD 3 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <ServiceCard
              number="03"
              title="Marca & Identidade Visual"
              description="Do posicionamento à identidade, construímos 
              marcas que sabem quem são, como querem ser percebidas e 
              por que devem ser lembradas."
            />
          </div>

          {/* CARD 4 */}
          <div data-aos="fade-up" data-aos-delay="400">
            <ServiceCard
              number="04"
              title="Sites & Landing Pages"
              description="Sites pensados para comunicar, conectar e 
              vender. Design, conteúdo e tecnologia trabalhando 
              juntos em uma experiência que representa sua marca."
            />
          </div>

          {/* CARD 5 */}
          <div data-aos="fade-up" data-aos-delay="500">
            <ServiceCard
              number="05"
              title="Produtos Digitais"
              description="Estruturamos estatégia, páginas 
              e materiais para transformar seu conhecimento em
              novos produtos e oportunidades de negócio."
            />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default HomeServices;
