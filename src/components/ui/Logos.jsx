import Container from "../layout/Container";

import logoclient1 from "../../assets/images/logos/logo-client-1.png";
import logoclient2 from "../../assets/images/logos/logo-client-2.png";
import logoclient3 from "../../assets/images/logos/logo-client-3.png";
import logoclient4 from "../../assets/images/logos/logo-client-4.png";
import logoclient5 from "../../assets/images/logos/logo-client-5.png";
import logoclient6 from "../../assets/images/logos/logo-client-6.png";
import logoclient7 from "../../assets/images/logos/logo-client-7.png";
import logoclient8 from "../../assets/images/logos/logo-client-8.png";

function Logos() {

  const logos = [
    logoclient1,
    logoclient2,
    logoclient3,
    logoclient4,
    logoclient5,
    logoclient6,
    logoclient7,
    logoclient8,
  ];

  return (

    <section
      id="logos-clients"
      className="
        w-full
        py-30

        bg-quaternary
      "
    >

      <Container>

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="
            text-center

            mb-16
          "
        >

          <span className="
            inline-block

            text-primary

            tracking-[0.25em]
            uppercase

            mb-6
          ">

            marcas que confiaram na malabares

          </span>

          <h2 className="
            text-2xl
            md:text-3xl
            lg:text-4xl

            font-bold

            text-white

            leading-widest
            tracking-tight
          ">

            Clientes e parceiros que fazem parte da nossa trajetória

          </h2>

        </div>

        {/* GRID LOGOS */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-4

          gap-y-12
          gap-x-10

          items-center
          justify-items-center
        ">

          {
            logos.map((logo, index) => (

              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="
                  flex
                  items-center
                  justify-center

                  w-full
                  min-h-[80px]
                "
              >

                <img
                  src={logo}
                  alt={`Logo do cliente ${index + 1}`}
                  className="
                    w-32
                    md:w-44

                    opacity-60
                    hover:opacity-100

                    hover:scale-105

                    transition-all
                    duration-300
                  "
                />

              </div>

            ))
          }

        </div>

      </Container>

    </section>

  );

}

export default Logos;