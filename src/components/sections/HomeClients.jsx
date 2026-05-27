import Container from "../layout/Container";

import ImageSlider from "../ui/ImageSlider";
import Button from "../ui/Button";

import client1 from "../../assets/images/home-clients-image-1.jpg";
import client2 from "../../assets/images/home-clients-image-2.jpg";
import client3 from "../../assets/images/home-clients-image-3.jpg";
import client4 from "../../assets/images/home-clients-image-4.jpg";

function HomeClients() {

  return (

    <section
      id="homeClients"
      className="
        w-full
        pt-30 pb-10

        bg-quaternary
        text-white
      "
    >

      <Container>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2

          gap-16
          lg:gap-24

          items-center
        ">

          {/* CONTEÚDO */}
          <div
            data-aos="fade-right"
            className="
              w-full
              max-w-[620px]
            "
          >

            {/* EYEBROW */}
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                text-md
                mb-6

                inline-block

                text-primary

                tracking-[0.25em]

                uppercase
              "
            >

              ⮑ nossos clientes e parceiros

            </span>

            {/* TÍTULO */}
            <h2
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                text-2xl
                md:text-3xl
                lg:text-4xl

                font-bold

                leading-none
                tracking-tight

                mb-8
              "
            >

              Quem já trabalhou e confia em nossa equipe

            </h2>

            {/* TEXTO */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="
                text-[1.25rem]
                leading-[1.6]

                text-white/85

                mb-6
              "
            >

              Cada cliente é tratado como um parceiro estratégico e temos orgulho de trabalhar e fazer parte da trajetória de cada um deles.

            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="550"
              className="
                text-[1.25rem]
                leading-[1.6]

                text-white/85

                mb-10
              "
            >

              Estamos comprometidos em entregar resultados positivos em diversos nichos.

            </p>

            {/* BOTÃO */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
            >

              <Button className="hover:text-white" target="_blank" link="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares">

                ↪ Bora trocar umas ideias?

              </Button>

            </div>

          </div>

          {/* SLIDER */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="
              relative
            "
          >

            <ImageSlider
              images={[
                client1,
                client2,
                client3,
                client4
              ]}
            />

          </div>

        </div>

      </Container>

    </section>

  );

}

export default HomeClients;