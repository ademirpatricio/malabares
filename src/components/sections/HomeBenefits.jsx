import Container from "../layout/Container";
import benefitsBg from "../../assets/images/home-benefitis-bg.jpg";
import IcArrow from "../ui/IcArrow";
import clientImg1 from "../../assets/images/benefits-card-1.jpg";
import clientImg2 from "../../assets/images/benefits-card-2.jpg";
import clientImg4 from "../../assets/images/benefits-card-3.jpg";

const cards = [
  {
    type: "image",
    img: clientImg1,
    text: "Você tem uma ideia, mas não sabe por onde começar."
  },
  {
    type: "image",
    img: clientImg2,
    text: "Sua marca cresceu, mas a comunicação ficou para trás."
  },
  {
    type: "image",
    img: clientImg4,
    text: "Quer fazer marketing digital sem fazer tudo sozinho."
  },
  {
    type: "cta"
  },
];

function HomeBenefits() {
  return (
    <section id="homeBenefits" className="w-full bg-purple-dark pt-4 pb-16 md:pb-36 font-sora" 
    style={{ backgroundImage: `url(${benefitsBg})`, backgroundSize: "cover", backgroundPosition: "bottom" }}>
      <Container>
        <div className="flex flex-col gap-10">

          {/* Eyebrow + Título */}
          <div className="flex flex-col gap-4">
            <div data-aos="fade-up" className="flex flex-col gap-2">
              <span className="text-xs font-semibold md:tracking-[0.25em] uppercase text-violet">
                Talvez a gente <strong>combine...</strong>
              </span>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-white">
                Se você se reconhece
              </h2>
              <h2 className="font-bold 
              text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-pink">
                em alguma dessas situações:
              </h2>
            </div>
          </div>

          {/* Grid de 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cards.map((card, i) => {
              if (card.type === "cta") {
                return (
                  <a
                    key={i}
                    href="https://wa.me/5581997278234"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-delay={(i + 1) * 100}
                    className="relative rounded-xl overflow-hidden aspect-[3/4] 
                    bg-lemon hover:bg-lemon-light flex flex-col justify-between p-6 group 
                    transition-opacity hover:opacity-90"
                  >
                    <p className="font-bold leading-snug text-purple 
                    text-md -tracking-[0.07em]
                    md:text-xl md:tracking-[0.1em]
                    ">
                      A gente pode construir muito mais juntos.
                    </p>

                    <div className="flex items-center gap-4 w-fit">
                      <span className="font-semibold text-sm md:tracking-[0.2em] uppercase text-purple underline-slide group-hover:text-purple-dark transition-colors duration-300">
                        Bora conversar
                      </span>
                      <span className="w-10 h-10 border-2 border-purple 
                      rounded-full flex items-center justify-center 
                      transition-colors duration-300 group-hover:bg-purple 
                      group-hover:border-purple shrink-0 text-purple hidden md:flex ">
                        <IcArrow size={16} 
                        className="hidden md:flex group-hover:text-lemon transition-colors duration-300" />
                      </span>
                    </div>
                  </a>
                );
              }

              return (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={(i + 1) * 100}
                  className="relative rounded-xl overflow-hidden aspect-[3/4]"
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-purple via-purple/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="leading-snug text-white">
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default HomeBenefits;
