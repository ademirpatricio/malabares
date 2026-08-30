import Container from "../layout/Container";
import NavLink from "../ui/NavLink";

import testimonial1 from "../../assets/images/testimonials-image-1.png";
import testimonial2 from "../../assets/images/testimonials-image-2.png";

function HomeTestimonials() {
  return (
    <section id="homeTestimonials" className="w-full py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* TEXTO */}
          <div data-aos="fade-right" className="max-w-[620px]">

            {/* STARS */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex items-center gap-4 mb-10"
            >
              <div className="flex items-center gap-2 text-xl text-pink">
                ★ ★ ★ ★ ☆
              </div>
              <span className="text-xl font-semibold text-purple">4.8</span>
            </div>

            {/* TÍTULO */}
            <h2
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-purple text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-10"
            >
              Alto grau de{" "}
              <span className="text-pink">satisfação</span>
              <br />
              entre nossos clientes.
            </h2>

            {/* TEXTO */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-[1.1rem] leading-relaxed text-neutral-light mb-6"
            >
              Ao escolher trabalhar conosco, você está optando por <strong>parceria, excelência</strong> e <strong>resultados tangíveis.</strong>
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="550"
              className="text-[1.1rem] leading-relaxed text-neutral-light mb-10"
            >
              Na Malabares, nosso sucesso é medido pelos resultados e pela satisfação dos nossos clientes. Veja o que alguns deles têm a dizer sobre nós:
            </p>

            {/* BOTÃO */}
            <div data-aos="fade-up" data-aos-delay="700">
              <NavLink href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares" 
              target="_blank">Fala com a gente ⤏</NavLink>
            </div>

          </div>

          {/* CARDS */}
          <div className="flex flex-col gap-8">

            {/* CARD 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="bg-white rounded-xl p-8 md:p-10 border-2 border-muted hover:bg-muted transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial1}
                  alt="Paula Ferreira"
                  className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-beige shadow-md"
                />
                <div>
                  <h4 className="text-base font-semibold text-purple">Paula Ferreira</h4>
                  <span className="text-sm text-neutral-light">Diretora da Merreira Consultoria</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-neutral-light">
                Quero agradecer à equipe de profissionais da <strong>Malabares</strong> pela atenção que eles estão tendo em cada apresentação dos conteúdos. Estou muito confiante do que vi até agora. Gratidão a todos vocês!
              </p>
            </div>

            {/* CARD 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-xl p-8 md:p-10 border-2 border-muted hover:bg-muted transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial2}
                  alt="Daniel Taddone"
                  className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-beige shadow-md"
                />
                <div>
                  <h4 className="text-base font-semibold text-purple">Daniel Taddone</h4>
                  <span className="text-sm text-neutral-light">CEO da Rumo Nordeste</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-neutral-light">
                Há duas características da equipe da Malabares que mais admiro. A primeira é seu senso estético apurado e elegante, algo essencial no design. Suas criações têm personalidade e arrojo.
                <br /><br />
                A segunda é sua simpatia. É uma equipe profissional "gente fina" a toda prova! Calmos, simpáticos e amigos. Sou seu cliente há alguns anos e sempre que penso na criação de uma marca, sei que posso contar com eles para transformarem uma ideia numa bela imagem.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeTestimonials;
