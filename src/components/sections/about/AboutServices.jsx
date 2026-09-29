import Container from "../../layout/Container";
import ServiceCard from "../../ui/ServiceCard";

const services = [
  {
    title: "Estratégia Digital",
    description: "Antes de criar, a gente pensa. Planejamos cada passo para sua marca crescer com consistência e sem desperdício de energia.",
  },
  {
    title: "Infoprodutos",
    description: "Você tem conhecimento. A gente transforma isso em cursos, e-books e produtos digitais que geram renda de verdade.",
  },
  {
    title: "Redes Sociais",
    description: "Perfil ativo, conteúdo que faz sentido, audiência que cresce. Você foca no negócio. A gente cuida das redes.",
  },
  {
    title: "Conteúdo",
    description: "Vídeos, textos, fotos. Conteúdo pensado para contar a história da sua marca do jeito que as pessoas querem ver.",
  },
];

function AboutServices() {
  return (
    <section id="aboutServices" className="w-full py-24 bg-purple-dark">
      <Container>

        {/* Eyebrow + título centralizado */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="font-sora text-xs font-semibold tracking-[0.2em] uppercase text-violet mb-4 inline-block">
            O que a gente faz
          </span>
          <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-white max-w-[700px] mx-auto">
            As ferramentas que usamos para <br/>  
            <span className="text-pink"> construir sua presença digital.</span>
          </h2>
        </div>

        {/* Grid 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <ServiceCard
                number={String(i + 1).padStart(2, "0")}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default AboutServices;
