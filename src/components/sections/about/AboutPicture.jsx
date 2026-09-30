{/* Componentens */}
import aboutBg from "../../../assets/images/about-bg.jpg";

{/* -------------- */}
function AboutPicture() {

  return (

    <section id="AboutPicture"
      className="
        w-full py-50 md:py-80
        bg-cover bg-no-repeat bg-scroll lg:bg-fixed
        relative overflow-hidden
        bg-center md:bg-top
      "
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
    </section>
  );

}

export default AboutPicture;
