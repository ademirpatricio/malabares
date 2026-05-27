import Container from "../components/layout/Container";
import thanksImg from "../assets/images/thanks-image.jpg";
import logoMalabaresLight from "../assets/images/logo-malabares-light.svg";
function Thanks() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#140F24]
        text-white
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-100px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-primary/20
          blur-[120px]
        "
      />
      <div
        className="
          absolute
          bottom-[-200px]
          right-[-100px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-purple-500/20
          blur-[120px]
        "
      />
      <Container>
        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-20
            items-center
            min-h-screen
            py-20
          "
        >
          {/* CONTEÚDO */}
          <div
            data-aos="fade-right"
            className="
              max-w-2xl
            "
          >
            {/* ÍCONE */}
            <div
              className="
                mb-8
                inline-flex
                items-center
                justify-center
                w-20
                h-20
                rounded-full
                bg-emerald-500
              "
            >
              <span className="text-4xl">
                ✓
              </span>
            </div>
            {/* HEADLINE */}
            <h1
              className="
                text-2xl
                md:text-3xl
                lg:text-4xl
                font-bold
                leading-tight
                tracking-tight
                mb-8
              "
            >
              Recebemos sua solicitação.
            </h1>
            {/* TEXTO */}
            <p
              className="
                text-[1.25rem]
                leading-[1.7]
                text-white/70
                mb-10
              "
            >
              Nossa equipe vai analisar as informações enviadas e entrar em contato em breve com os próximos passos.
            </p>
            {/* MICRO INFO */}
            <div
              className="
                flex
                flex-wrap
                gap-4
                mb-12
              "
            >
              <span className="text-white">
                ✅ Atendimento humano
              </span>
              <span className="text-white">
                ✅ Resposta em até 24h
              </span>
              <span className="text-white">
                ✅ Sem compromisso
              </span>
            </div>
            {/* BOTÕES */}
            <div
              className="
                flex
                flex-wrap
                gap-4
              "
            >
              {/* WHATSAPP */}
              <a
                href="https://wa.me/5581997278234?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Malabares"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  px-8
                  py-5
                  font-semibold
                  text-primary
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                ↪ Falar no WhatsApp
              </a>
              {/* PORTFÓLIO */}
              <a
                href="/"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-8
                  py-5
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Conhecer nossos projetos
              </a>
            </div>
          </div>
          {/* IMAGEM */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="
              relative
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-primary/20
                blur-[100px]
              "
            />
            <img
              src={thanksImg}
              alt="Equipe da Malabares"
              className="
                relative
                z-10
                w-full
                max-w-[620px]
                mx-auto
                rounded-[2rem]
                object-cover
              "
            />
          </div>
        </div>
        {/* FOOTER */}
        <div
          className="
            relative
            z-10
            border-t
            border-white/10
            py-8
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-6
            "
          >
            <img
              src={logoMalabaresLight}
              alt="Malabares"
              className="
                w-[180px]
              "
            />
            <p
              className="
                text-sm
                text-white/50
              "
            >
              ©2026 Malabares MKT + TEC
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
export default Thanks;