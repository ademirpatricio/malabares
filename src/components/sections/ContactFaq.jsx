import { useState } from "react";
import Container from "../layout/Container";

const faqs = [
  {
    question: "Quanto tempo leva para entregar um projeto?",
    answer: "Depende do escopo. Um site institucional leva de 3 a 6 semanas. Projetos maiores com múltiplas páginas ou funcionalidades especiais têm cronograma detalhado na proposta.",
  },
  {
    question: "Vocês fazem projetos fora de Recife?",
    answer: "Sim. Todo o processo é remoto e já atendemos clientes em todo o Brasil. Utilizamos ferramentas de videoconferência e gestão de projeto online.",
  },
  {
    question: "Como funciona o processo de trabalho?",
    answer: "Começamos com um briefing detalhado, depois seguimos para estratégia, criação e implementação. Você acompanha cada etapa com entregas parciais para aprovação.",
  },
  {
    question: "Qual é o investimento mínimo?",
    answer: "Cada projeto tem um valor personalizado conforme o escopo. Após o formulário de contato, enviamos uma proposta com investimento, cronograma e escopo detalhado.",
  },
  {
    question: "Vocês cuidam da hospedagem e domínio?",
    answer: "Sim. Podemos indicar e configurar a infraestrutura ideal para o seu projeto, seja hospedagem dedicada, cloud ou plataformas gerenciadas.",
  },
];

function ContactFaq() {
  const [open, setOpen] = useState(null);

  function toggle(i) {
    setOpen(open === i ? null : i);
  }

  return (
    <section className="w-full py-24 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="font-sora text-xs font-semibold tracking-[0.2em] uppercase text-pink mb-4 inline-block">
              Dúvidas frequentes
            </span>
            <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-purple">
              Perguntas que a gente mais ouve.
            </h2>
          </div>

          <div className="flex flex-col" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-neutral-100">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-4 group"
                >
                  <span className="font-sora font-semibold text-sm md:text-base text-purple group-hover:text-pink transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border-2 border-neutral-200 flex items-center justify-center transition-all duration-300 ${open === i ? "bg-purple border-purple rotate-45" : ""}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M2 6h8" stroke={open === i ? "#fff" : "#280A4A"} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${open === i ? "max-h-64 pb-6" : "max-h-0"}`}
                >
                  <p className="font-sora text-sm leading-relaxed text-neutral-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactFaq;
