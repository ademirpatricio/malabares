import Container from "../layout/Container";
import Button from "../ui/Button";

import heroBg from "../../assets/images/hero-bg.jpg";
import heroPerson from "../../assets/images/hero-person.png";

function Hero() {
  return (
    <section className="w-full flex justify-center">

      <Container>

        <div 
          className="
            bg-light rounded-xl 
            grid md:grid-cols-[60%_40%] gap-10
            px-30 justify-center items-center
          "
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div>
            <h2 className="text-secondary tracking-widest mb-4 font-light">
              marketing digital
            </h2>
            <h1 className="text-dark mb-4">
              Amplie sua presença online com a <span className="text-primary">Malabares</span>
            </h1>
            <p className="text-dark mb-6">
              Páginas de venda que convertem e gestão eficaz de redes sociais.
            </p>
            <Button>
              ↪ Fala com a gente
            </Button>
          </div>

          <div>
            <img
              src={heroPerson}
              alt="Thayná Aguiar sorrindo"
              className="w-full"
            />
          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;