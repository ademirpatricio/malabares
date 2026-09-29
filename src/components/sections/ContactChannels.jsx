import Container from "../layout/Container";
import IcArrow from "../ui/IcArrow";

const channels = [
  {
    label: "WhatsApp",
    description: "Resposta rápida para dúvidas e orçamentos.",
    action: "Falar no WhatsApp",
    href: "https://wa.me/5581997030368",
  },
  {
    label: "Instagram",
    description: "Veja nosso portfólio e acompanhe os bastidores.",
    action: "Seguir no Instagram",
    href: "https://instagram.com/malabares.co",
  },
  {
    label: "E-mail",
    description: "Para propostas e documentações formais.",
    action: "Enviar um e-mail",
    href: "mailto:oi@malabares.com.br",
  },
];

function ContactChannels() {
  return (
    <section className="w-full py-24 bg-purple-dark text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Cabeçalho */}
          <div data-aos="fade-right">
            <span className="font-sora text-xs font-semibold tracking-[0.2em] uppercase text-lemon mb-4 inline-block">
              Outros canais
            </span>
            <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
              Escolha como prefere falar com a gente.
            </h2>
          </div>

          {/* Canais */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            {channels.map((ch, i) => (
              <a
                key={i}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-6 border-b border-white/10 group"
              >
                <div>
                  <p className="font-sora font-semibold text-sm tracking-[0.1em] uppercase text-white/40 mb-1">
                    {ch.label}
                  </p>
                  <p className="font-sora text-base font-medium text-white">
                    {ch.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-6">
                  <span className="font-sora text-xs font-semibold tracking-[0.15em] uppercase text-white/60 group-hover:text-white transition-colors duration-300 hidden sm:block">
                    {ch.action}
                  </span>
                  <span className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center group-hover:bg-lemon group-hover:border-lemon transition-colors duration-300 shrink-0">
                    <IcArrow size={16} className="text-white group-hover:text-purple transition-colors duration-300" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactChannels;
