import aboutBg from "../../assets/images/about-bg.jpg";

import Container from "../layout/Container";

function AboutPicture() {

  return (

    <section
      id="AboutPicture"
      className="
        w-full
        py-80

        bg-cover
        bg-no-repeat

        bg-scroll
        lg:bg-fixed

        relative
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
    </section>

  );

}

export default AboutPicture;