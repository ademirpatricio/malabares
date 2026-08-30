import Container from "../layout/Container";
import BenefitsCard from "../ui/BenefitsCard";

import homeBenefitsIcon1 from "../../assets/images/icons/home-benefits-icon-1.svg";
import homeBenefitsIcon2 from "../../assets/images/icons/home-benefits-icon-2.svg";
import homeBenefitsIcon3 from "../../assets/images/icons/home-benefits-icon-3.svg";

function HomeBenefits() {
  return (
    <section id="homeBenefits" className="w-full pt-20 pb-10 bg-purple">
      <Container>

        {/* HEADER */}
        <div data-aos="fade-up" className="w-full text-center max-w-[850px] mx-auto">

          {/* EYEBROW — ponto-rótulo */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="font-sora font-semibold text-sm tracking-[0.2em] uppercase text-lilac">
              motivos para nos escolher
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-white mb-8"
          >
            Escolher o nosso time é para quem...
          </h2>

        </div>

        {/* CARDS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16">

          <div data-aos="fade-up" data-aos-delay="100">
            <BenefitsCard
              icon={homeBenefitsIcon1}
              description="Precisa criar seu produto digital e deseja ser dono do seu próprio negócio"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="250">
            <BenefitsCard
              icon={homeBenefitsIcon2}
              description="Tem algo relevante para compartilhar com o mundo"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <BenefitsCard
              icon={homeBenefitsIcon3}
              description="Precisa desenvolver o marketing digital de sua empresa ou projeto"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default HomeBenefits;
