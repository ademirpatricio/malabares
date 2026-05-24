import weddingImage from "../../assets/images/wedding-cta-bg.jpg";

import Container from "../layout/Container";

function WeddingCta() {

  return (

    <section
      id="weddingCta"
      className="
        w-full
        py-20

        bg-cover
        bg-no-repeat

        bg-scroll
        lg:bg-fixed

        relative
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${weddingImage})`,
        backgroundPosition: "65% center",
      }}
    >

      {/* OVERLAY */}
      <div className="
        absolute
        inset-0

        bg-gradient-to-r

        from-black/80
        via-[#6B2C1A]/70
        to-[#6B2C1A]/40

        lg:from-[#6B2C1A]/85
        lg:via-[#6B2C1A]/55
        lg:to-transparent
      " />

      <Container>

        <div
          data-aos="fade-right"
          className="
            relative
            z-10

            min-h-[550px]

            flex
            items-center
          "
        >

          {/* CONTEÚDO */}
          <div className="
            max-w-[620px]
            text-white
          ">

            {/* TÍTULO */}
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                text-2xl
                md:text-3xl
                lg:text-4xl

                font-bold

                leading-tight
                tracking-tight

                mb-8
              "
            >

              Transforme seu casamento com uma identidade visual única e personalizada

            </h2>

            {/* TEXTO */}
            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                text-[1.25rem]
                leading-[1.6]

                text-white/90

                mb-10
              "
            >

              Dê ao seu grande dia um toque especial com designs que refletem a essência do seu amor.

            </p>

            {/* BOTÃO */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
            >

              <a
                href="https://wedding.malabares.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center

                  text-center

                  border-2
                  border-[#F5D06A]

                  text-[#F5D06A]

                  font-bold
                  text-base
                  md:text-lg

                  rounded-full

                  px-8
                  py-4

                  transition-all
                  duration-300

                  hover:bg-[#F5D06A]
                  hover:text-[#5A2416]
                "
              >

                💍 MALABARES WEDDING

              </a>

            </div>

          </div>

        </div>

      </Container>

    </section>

  );

}

export default WeddingCta;