import Container from "../layout/Container";
import NavLink from "../ui/NavLink";
import homeServicesBg from "../../assets/images/home-services-bg.jpg";
import ServiceCard from "../ui/ServiceCard";

import homeServicesIcon1 from "../../assets/images/icons/home-services-icon-1.svg";
import homeServicesIcon2 from "../../assets/images/icons/home-services-icon-2.svg";
import homeServicesIcon3 from "../../assets/images/icons/home-services-icon-3.svg";
import homeServicesIcon4 from "../../assets/images/icons/home-services-icon-4.svg";
import homeServicesIcon5 from "../../assets/images/icons/home-services-icon-5.svg";

function HomeServices() {
  return (
    <section id="homeServices" className="w-full pt-24 pb-24" 
    style={{ backgroundImage: `url(${homeServicesBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* HEADER */}
          <div
            data-aos="fade-right"
            className="w-full text-left flex flex-col justify-center gap-8"
          >

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl md:text-3xl lg:text-4xl 
              font-sora font-bold
              leading-tight text-white"
            >
              Sua marca não precisa <span className="text-pink"> fazer de tudo sozinha.</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="leading-relaxed text-lilac-light"
            >
              Da estratégia à execução, juntamos criatividade,
              comunicação e tecnologia. Tudo isso para construir
              uma presença digital que tenha a ver com o
              seu negócio e com quem você quer alcançar.
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
