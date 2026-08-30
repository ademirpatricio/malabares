import { useState } from "react";
import Container from "../layout/Container";

function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    { question: "Vocês atendem apenas empresas do Recife?", answer: "Não Atendemos projetos de forma 100% online para clientes de todo o Brasil." },
    { question: "Quanto tempo leva para iniciar um projeto?", answer: "Após a aprovação da proposta, normalmente iniciamos em poucos dias úteis dependendo da demanda do momento." },
    { question: "Vocês trabalham com pequenos negócios?", answer: "Sim! A Malabares nasceu justamente para ajudar marcas, projetos autorais e pequenos negócios a crescerem no digital." },
    { question: "Posso solicitar apenas uma consultoria?", answer: "Claro Também oferecemos consultorias estratégicas para orientar seu posicionamento e presença digital." },
  ];

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="contactFaq" className="w-full py-20 bg-white">
      <Container>
        <div className="max-w-[1000px] mx-auto">

          {/* TOPO */}
          <div data-aos="fade-up" className="text-center mb-10">
            <span className="inline-block font-sora font-semibold text-sm tracking-[0.2em] uppercase text-lilac mb-6">
              dúvidas frequentes
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-purple mb-8">
              Algumas respostas antes da nossa conversa
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-neutral-light max-w-[700px] mx-auto">
              Separamos algumas dúvidas comuns para facilitar o primeiro contato e deixar tudo mais transparente.
            </p>
          </div>

          {/* FAQ ACCORDION */}
          <div className="flex flex-col gap-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white border border-muted hover:bg-muted
                  rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-8 
                    py-6 text-left"
                  >
                    <h3 className="text-lg leading-tight text-purple font-sora font-semibold">
                      {item.question}
                    </h3>
                    <span
                      className={`text-pink flex-shrink-0 transition-transform duration-300 text-xl ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="px-8 pb-6 text-[1rem] leading-relaxed text-neutral-light">
                      {item.answer}
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

export default ContactFaq;
