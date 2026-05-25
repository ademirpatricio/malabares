import Container from "../layout/Container";
import ServiceCard from "../ui/ServiceCard";

import homeServicesIcon1 from "../../assets/images/icons/home-services-icon-1.svg";
import homeServicesIcon2 from "../../assets/images/icons/home-services-icon-2.svg";
import homeServicesIcon3 from "../../assets/images/icons/home-services-icon-3.svg";
import homeServicesIcon4 from "../../assets/images/icons/home-services-icon-4.svg";
import homeServicesIcon5 from "../../assets/images/icons/home-services-icon-5.svg";

function HomeServices() {

  return (

    <section
      id="homeServices"
      className="
        w-full
        pt-30
      "
    >

      <Container>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3

          gap-8
        ">

          {/* HEADER */}
          <div
            data-aos="fade-right"
            className="
              w-full

              text-center
              md:text-left

              flex
              flex-col
              justify-center
            "
          >

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                text-2xl
                md:text-3xl
                lg:text-4xl

                font-bold

                leading-widest
                tracking-tight

                mb-8
              "
            >

              Vamos te ajudar com toda a comunicação do seu projeto

            </h2>

            <span
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                text-md

                text-primary

                tracking-[0.25em]

                uppercase
              "
            >

              saiba como ⤏

            </span>

          </div>

          {/* CARD 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <ServiceCard
              icon={homeServicesIcon1}
              title="Planejamento de Comunicação"
              description="Roteiro pra fazer sua marca brilhar."
            />

          </div>

          {/* CARD 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <ServiceCard
              icon={homeServicesIcon2}
              title="Redes Sociais"
              description="Aquele conteúdo que conecta de verdade."
            />

          </div>

          {/* CARD 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <ServiceCard
              icon={homeServicesIcon3}
              title="Identidade Visual"
              description="Sua marca do jeitinho que ela merece."
            />

          </div>

          {/* CARD 4 */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
          >

            <ServiceCard
              icon={homeServicesIcon4}
              title="Páginas que Vendem"
              description="Do clique ao carrinho, a gente cuida de tudo."
            />

          </div>

          {/* CARD 5 */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
          >

            <ServiceCard
              icon={homeServicesIcon5}
              title="Infoprodutos"
              description="Se você ensina, a gente ajuda a vender."
            />

          </div>

        </div>

      </Container>

    </section>

  );
}

export default HomeServices;