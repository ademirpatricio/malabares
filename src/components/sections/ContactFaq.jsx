import Container from "../layout/Container";

function ContactFaq() {

  const faqItems = [
    {
      question: "Vocês atendem apenas empresas do Recife?",
      answer:
        "Não 😄 Atendemos projetos de forma 100% online para clientes de todo o Brasil.",
    },

    {
      question: "Quanto tempo leva para iniciar um projeto?",
      answer:
        "Após a aprovação da proposta, normalmente iniciamos em poucos dias úteis dependendo da demanda do momento.",
    },

    {
      question: "Vocês trabalham com pequenos negócios?",
      answer:
        "Sim! A Malabares nasceu justamente para ajudar marcas, projetos autorais e pequenos negócios a crescerem no digital.",
    },

    {
      question: "Posso solicitar apenas uma consultoria?",
      answer:
        "Claro 😄 Também oferecemos consultorias estratégicas para orientar seu posicionamento e presença digital.",
    },
  ];

  return (

    <section
      id="contactFaq"
      className="
        w-full
        py-20

        bg-light
      "
    >

      <Container>

        <div
          className="
            max-w-[1000px]
            mx-auto
          "
        >

          {/* TOPO */}
          <div
            data-aos="fade-up"
            className="
              text-center

              mb-10
            "
          >

            <span
              className="
                inline-block

                text-primary

                tracking-[0.3em]

                uppercase

                mb-6
              "
            >

              ⮑ DÚVIDAS FREQUENTES

            </span>

            <h2
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

              Algumas respostas antes da nossa conversa 😄

            </h2>

            <p
              className="
                text-[1.25rem]
                leading-[1.6]

                text-dark/70

                max-w-[700px]
                mx-auto
              "
            >

              Separamos algumas dúvidas comuns para facilitar o primeiro contato e deixar tudo mais transparente.

            </p>

          </div>

          {/* FAQ */}
          <div
            className="
              flex
              flex-col

              gap-6
            "
          >

            {faqItems.map((item, index) => (

              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="
                  bg-white

                  border
                  border-muted

                  rounded-xl

                  p-6
                  lg:p-10

                  transition-all
                  duration-300

                  hover:border-tertiary/20
                  hover:shadow-xl
                "
              >

                {/* PERGUNTA */}
                <h3
                  className="
                    text-xl

                    font-bold

                    leading-tight

                    mb-4
                  "
                >

                  {item.question}

                </h3>

                {/* RESPOSTA */}
                <p
                  className="
                    text-[1.0rem]
                    leading-[1.6]

                    text-dark/70
                  "
                >

                  {item.answer}

                </p>

              </div>

            ))}

          </div>

        </div>

      </Container>

    </section>

  );

}

export default ContactFaq;