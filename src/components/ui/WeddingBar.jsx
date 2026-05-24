import Container from "../layout/Container";
import ButtonSm from "../ui/ButtonSm";

import weddingBarBg from "../../assets/images/wedding-bar-bg.jpg";

function WeddingBar() {

  return (

    <section
      id="weddingBar"
      className="
        relative
        overflow-hidden

        w-full

        py-5
        lg:py-6

        flex
        justify-center

        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${weddingBarBg})`,
      }}
    >

      {/* OVERLAY */}
      <div className="
        absolute
        inset-0

        

        backdrop-blur-sm
      " />

      <Container>

        <div
          data-aos="fade-down"
          className="
            relative
            z-10

            flex
            flex-col
            lg:flex-row

            gap-5
            lg:gap-10

            items-center
            justify-center
            lg:justify-between

            text-center
            lg:text-left
          "
        >

          <h4 className="
            text-white

            text-[1rem]
            leading-relaxed

            max-w-[720px]
          ">

            💕 Transforme seu casamento com uma{" "}

            <span className="font-bold">
              identidade visual única e personalizada
            </span>

          </h4>

          <ButtonSm
            link="https://wedding.malabares.com.br"
            target="_blank"
          >

            ↪ Malabares Wedding

          </ButtonSm>

        </div>

      </Container>

    </section>

  );

}

export default WeddingBar;