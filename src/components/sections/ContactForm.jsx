import Container from "../layout/Container";
import Button from "../ui/Button";

import contactImage from "../../assets/images/about-bg.jpg";

function ContactForm() {
  const fieldClass = `
    w-full

    rounded

    border
    border-muted

    bg-light

    px-6
    py-5

    outline-none

    transition-all
    duration-300

    focus:border-primary
    focus:bg-white
  `;

  return (

    <section
      id="contactForm"
      className="w-full py-15"
    >

      <Container>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.1fr_0.9fr]

            gap-20
            items-center
          "
        >

          {/* FORMULÁRIO */}
          <div
            data-aos="fade-right"
            className="
              bg-white

              border
              border-muted

              rounded-2xl

              p-6
              lg:p-12

              shadow-[0_20px_60px_rgba(0,0,0,0.03)]
            "
          >

            {/* TOPO */}
            <div className="mb-10">

              <span
                className="
                  inline-block

                  text-primary

                  tracking-[0.3em]

                  uppercase

                  mb-6
                "
              >

                ⮑ CONTA MAIS SOBRE O SEU PROJETO

              </span>

              <h2
                className="
                  text-2xl
                  md:text-3xl

                  font-bold

                  leading-tight
                  tracking-tight

                  mb-6
                "
              >

                Vamos construir algo incrível juntos.

              </h2>

              <p
                className="
                  text-[1.25rem]
                  leading-[1.6]

                  text-dark/70
                "
              >

                Preencha as informações abaixo e nossa equipe entrará em contato para entender melhor sua necessidade.

              </p>

            </div>

            {/* FORM */}
            <form
              className="
                flex
                flex-col

                gap-4
              "
            >

              {/* NOME */}
              <input
                type="text"
                placeholder="Seu nome"
                className={fieldClass}
              />

              {/* EMPRESA */}
              <input
                type="text"
                placeholder="Empresa ou projeto"
                className={fieldClass}
              />

              {/* INSTAGRAM */}
              <input
                type="text"
                placeholder="@instagram"
                className={fieldClass}
              />

              {/* SERVIÇO */}
              <select
                className={fieldClass}
              >

                <option>
                  Qual serviço você procura?
                </option>

                <option>
                  Desenvolvimento de Sites
                </option>

                <option>
                  Social Media
                </option>

                <option>
                  Branding
                </option>

                <option>
                  Infoprodutos
                </option>

                <option>
                  Malabares Wedding
                </option>

              </select>

              {/* MENSAGEM */}
              <textarea
                rows="6"
                placeholder="Conta mais sobre sua ideia..."
                className={`${fieldClass} resize-none`}
              />

              {/* BOTÃO */}
              <div className="pt-4">

                <Button>

                  ↪ Enviar mensagem

                </Button>

              </div>

            </form>

          </div>

          {/* LATERAL */}
          <div
            data-aos="fade-left"
            className="
              flex
              flex-col
              justify-center
            "
          >

            {/* FOTO */}
            <div
              className="
                overflow-hidden
                rounded-2xl

                mb-10
              "
            >

              <img
                src={contactImage}
                alt="Equipe da Malabares"
                className="
                  w-full
                  h-[600px]

                  object-cover
                "
              />

            </div>

            {/* TEXO */}
            <h3
              className="
                text-2xl

                font-bold

                leading-tight

                mb-6
              "
            >

              Aqui você fala direto com quem cria.

            </h3>

            <p
              className="
                text-[1.25rem]
                leading-[1.6]

                text-dark/70

                mb-8
              "
            >

              Sem atendimento robotizado, sem processos complicados e sem burocracia. A gente entende sua ideia, organiza tudo e transforma em algo real.

            </p>

            {/* INFO */}
            <div
              className="
                flex
                flex-col

                gap-3
              "
            >

              <div
                className="
                  flex
                  items-center

                  gap-3
                "
              >

                <span className="text-primary">
                  💬
                </span>

                <p className="text-dark/70">
                  Resposta média em até 24h
                </p>

              </div>

              <div
                className="
                  flex
                  items-center

                  gap-3
                "
              >

                <span className="text-primary">
                  📍
                </span>

                <p className="text-dark/70">
                  Recife • Pernambuco • Brasil
                </p>

              </div>

              <div
                className="
                  flex
                  items-center

                  gap-3
                "
              >

                <span className="text-primary">
                  🚀
                </span>

                <p className="text-dark/70">
                  Atendimento online para todo o Brasil
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>

  );

}

export default ContactForm;
