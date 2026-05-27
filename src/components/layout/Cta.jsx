import Container from "../layout/Container";

import Button from "../ui/Button";

import logo from "../../assets/images/logo-malabares-light.svg";

function Cta() {

  return (

    <section
      id="cta"
      className="
        w-full
        py-20

        bg-quaternary
        text-white
      "
    >

      <Container>

        <div
          data-aos="fade-up"
          className="
            flex
            flex-col

            items-center
            justify-center

            text-center
          "
        >

          {/* EYEBROW */}
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              text-sm

              tracking-[0.4em]

              text-primary

              uppercase

              mb-8
            "
          >

            o digital te espera

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

              max-w-[900px]

              mb-12
            "
          >

            Não deixe o seu projeto para depois!

          </h2>

          {/* BOTÃO */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="
              mb-10
            "
          >

            <Button className="hover:text-white" target="_blank" link="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares">

              ↪ Fala com a gente

            </Button>

          </div>

          {/* LOGO */}
          <img
            data-aos="zoom-in"
            data-aos-delay="550"
            src={logo}
            alt="Logo da Malabares"
            className="
              w-[150px]
              lg:w-[220px]

              h-auto

              opacity-90
            "
          />

        </div>

      </Container>

    </section>

  );

}

export default Cta;