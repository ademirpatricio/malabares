import { useState } from "react";
import Container from "../layout/Container";
import IcArrow from "../ui/IcArrow";
import { sendContactForm } from "../../services/contactService";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", instagram: "", service: "", message: "", website: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.website) return;
    try {
      setLoading(true);
      setStatus(null);
      await sendContactForm(formData);
      setStatus("success");
      setTimeout(() => setStatus(null), 4000);
      setFormData({ name: "", email: "", instagram: "", service: "", message: "", website: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    } finally {
      setLoading(false);
    }
  }

  const fieldClass = `
    w-full rounded-xl border border-neutral-100 bg-neutral-50
    px-5 py-4 font-sora text-sm text-purple outline-none
    transition-all duration-300
    focus:border-purple/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(40,10,74,0.06)]
    placeholder:text-neutral-400
  `;

  return (
    <section id="contactForm" className="w-full py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Formulário */}
          <div data-aos="fade-right">
            <span className="font-sora text-xs font-semibold tracking-[0.2em] uppercase text-pink mb-4 inline-block">
              Conta mais sobre o seu projeto
            </span>
            <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-purple mb-4">
              Vamos construir algo incrível juntos.
            </h2>
            <p className="font-sora text-sm leading-relaxed text-neutral-500 mb-10">
              Preencha as informações abaixo e nossa equipe entra em contato para entender melhor sua necessidade.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" autoComplete="off" tabIndex="-1" />
              <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className={fieldClass} />
              <input type="email" name="email" placeholder="Seu melhor e-mail" value={formData.email} onChange={handleChange} required autoComplete="email" className={fieldClass} />
              <input type="text" name="instagram" placeholder="@instagram (opcional)" value={formData.instagram} onChange={handleChange} className={fieldClass} />
              <select name="service" value={formData.service} onChange={handleChange} required className={fieldClass}>
                <option value="">Qual serviço você procura?</option>
                <option value="Desenvolvimento de Sites">Desenvolvimento de Sites</option>
                <option value="Social Media">Social Media</option>
                <option value="Branding">Branding</option>
                <option value="Infoprodutos">Infoprodutos</option>
                <option value="Malabares Wedding">Malabares Wedding</option>
              </select>
              <textarea rows="5" name="message" placeholder="Conta mais sobre sua ideia..." value={formData.message} onChange={handleChange} required className={`${fieldClass} resize-none`} />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-4 text-purple font-sora font-semibold tracking-[0.2em] uppercase text-sm w-fit group disabled:opacity-50"
                >
                  <span className="underline-slide transition-colors duration-300">
                    {loading ? "Enviando..." : "Enviar mensagem"}
                  </span>
                  <span className="w-10 h-10 border-2 border-purple rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-purple shrink-0">
                    {loading
                      ? <span className="w-4 h-4 border-2 border-purple border-t-transparent rounded-full animate-spin" />
                      : <IcArrow size={16} className="group-hover:text-white transition-colors duration-300" />
                    }
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${status ? "max-h-24 opacity-100 pt-4" : "max-h-0 opacity-0"}`}>
                  {status === "success" && (
                    <p className="font-sora text-sm text-emerald-700 border border-emerald-200 bg-emerald-50 rounded-xl px-4 py-3">
                      Recebemos sua mensagem. Em breve entraremos em contato.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="font-sora text-sm text-red-600 border border-red-200 bg-red-50 rounded-xl px-4 py-3">
                      Ocorreu um erro ao enviar. Tente novamente.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Lateral */}
          <div data-aos="fade-left" className="flex flex-col gap-8 lg:pt-20">
            <div>
              <h3 className="font-sora font-bold text-xl text-purple mb-3">
                Aqui você fala direto com quem cria.
              </h3>
              <p className="font-sora text-sm leading-relaxed text-neutral-500">
                Sem atendimento robotizado, sem burocracia. A gente entende sua ideia e transforma em algo real.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: "Tempo de resposta", value: "Até 24 horas" },
                { label: "Localização", value: "Recife, Pernambuco" },
                { label: "Atendimento", value: "Online para todo o Brasil" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-neutral-100">
                  <span className="font-sora text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400">{item.label}</span>
                  <span className="font-sora text-sm font-medium text-purple">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ContactForm;
