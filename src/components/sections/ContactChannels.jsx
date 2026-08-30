import Container from "../layout/Container";

import icWhatsapp from "../../assets/images/icons/ic-social-whatsapp.svg";
import icInstagram from "../../assets/images/icons/ic-social-instagram.svg";
import icEmail from "../../assets/images/icons/ic-social-email.svg";
import icLinkedin from "../../assets/images/icons/ic-social-linkedin.svg";

function ContactChannels() {
  const channels = [
    { icon: icWhatsapp, title: "WhatsApp", description: "Fale diretamente com a nossa equipe.", link: "https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares", button: "Abrir WhatsApp" },
    { icon: icInstagram, title: "Instagram", description: "Acompanhe nossos bastidores e projetos.", link: "https://instagram.com/malabaresmkt", button: "@malabaresmkt" },
    { icon: icEmail, title: "E-mail", description: "Envie sua ideia ou proposta comercial.", link: "mailto:faleconosco@malabares.com.br", button: "Enviar e-mail" },
    { icon: icLinkedin, title: "LinkedIn", description: "Conecte-se com a Malabares.", link: "https://linkedin.com/company/malabaresmkt", button: "Ver perfil" },
  ];

  return (
    <section id="contactChannels" className="w-full pt-15 pb-10 bg-white">
      <Container>

        {/* TOPO */}
        <div data-aos="fade-up" className="text-center max-w-[500px] mx-auto mb-16">
          <span className="inline-block font-sora font-semibold text-sm tracking-[0.2em] uppercase text-lilac mb-6">
            contato rápido
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-purple mb-8">
            Escolha o melhor canal para falar com a gente
          </h2>
          <p className="text-[1.1rem] leading-relaxed text-neutral-light">
            Estamos disponíveis para tirar dúvidas, analisar seu projeto e entender como podemos ajudar sua marca a crescer.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-xl border-2 border-muted hover:bg-muted p-8 transition-all duration-300"
            >
              <div className="w-18 h-18 rounded-lg bg-neutral-light/10 flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-beige">
                <img src={channel.icon} alt={channel.title} className="w-8 h-8 opacity-90" />
              </div>

              <h3 className="text-2xl leading-tight text-purple mb-4">{channel.title}</h3>
              <p className="text-[1rem] leading-relaxed text-neutral-light mb-8">{channel.description}</p>

              <span className="inline-flex items-center gap-1 text-pink font-semibold transition-all duration-300 group-hover:translate-x-1">
                {channel.button} ⤏
              </span>
            </a>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default ContactChannels;
