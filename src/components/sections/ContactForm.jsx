import { useState } from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { sendContactForm } from "../../services/contactService";
import contactImage from "../../assets/images/about-bg.jpg";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", instagram: "", service: "", message: "", website: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  function handleChange(event) {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
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

  const fieldClass = "w-full rounded-lg border border-neutral-light/10 bg-neutral-light/10 px-6 py-5 outline-none transition-all duration-300 focus:border-purple/40 focus:bg-white focus:shadow-[0_0_0_4px_rgba(74,42,183,0.08)]";

  return (
    <section id="contactForm" className="w-full py-15 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

          {/* FORMULÁRIO */}
          <div data-aos="fade-right" className="bg-white border border-muted rounded-lg p-6 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

            {/* TOPO */}
            <div className="mb-10">
              <span className="inline-block font-sora font-semibold text-sm tracking-[0.2em] uppercase text-lilac mb-6">
                conta mais sobre o seu projeto
              </span>
              <h2 className="text-2xl md:text-3xl leading-tight tracking-tight text-purple mb-6">
                Vamos construir algo incrível juntos.
              </h2>
              <p className="text-[1.1rem] leading-relaxed text-neutral-light">
                Preencha as informações abaixo e nossa equipe entrará em contato para entender melhor sua necessidade.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" autoComplete="off" tabIndex="-1" />
              <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className={fieldClass} />
              <input type="email" name="email" placeholder="Seu melhor email" value={formData.email} onChange={handleChange} required autoComplete="email" className={fieldClass} />
              <input type="text" name="instagram" placeholder="@instagram" value={formData.instagram} onChange={handleChange} className={fieldClass} />
              <select name="service" value={formData.service} onChange={handleChange} required className={fieldClass}>
                <option value="">Qual serviço você procura?</option>
                <option value="Desenvolvimento de Sites">Desenvolvimento de Sites</option>
                <option value="Social Media">Social Media</option>
                <option value="Branding">Branding</option>
                <option value="Infoprodutos">Infoprodutos</option>
                <option value="Malabares Wedding">Malabares Wedding</option>
              </select>
              <textarea rows="6" name="message" placeholder="Conta mais sobre sua ideia..." value={formData.message} onChange={handleChange} required className={`${fieldClass} resize-none`} />

              <div className="pt-4">
                <Button type="submit" disabled={loading}>
                  <>
                    {loading && <span className="w-4 h-4 border-2 border-pink border-t-transparent rounded-full animate-spin" />}
                    <span>{loading ? "Enviando..." : "↪ Enviar mensagem"}</span>
                  </>
                </Button>

                <div className={`overflow-hidden transition-all duration-500 ${status ? "max-h-24 opacity-100 pt-4" : "max-h-0 opacity-0"}`}>
                  {status === "success" && (
                    <p className="text-sm text-emerald-700 border border-emerald-200 bg-emerald-50 rounded px-4 py-3">
                      Recebemos sua mensagem. Em breve entraremos em contato.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-600 border border-red-200 bg-red-50 rounded px-4 py-3">
                      Ocorreu um erro ao enviar. Tente novamente.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* LATERAL */}
          <div data-aos="fade-left" className="flex flex-col justify-center">
            <div className="overflow-hidden rounded-lg mb-10">
              <img src={contactImage} alt="Equipe da Malabares" className="w-full h-[600px] object-cover" />
            </div>

            <h3 className="text-2xl leading-tight text-purple mb-6">Aqui você fala direto com quem cria.</h3>

            <p className="text-[1.1rem] leading-relaxed text-neutral-light mb-8">
              Sem atendimento robotizado, sem processos complicados e sem burocracia. A gente entende sua ideia, organiza tudo e transforma em algo real.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span>⏰</span>
                <p className="text-neutral-light">Resposta média em até 24h</p>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <p className="text-neutral-light">Recife • Pernambuco • Brasil</p>
              </div>
              <div className="flex items-center gap-3">
                <span>🇧🇷</span>
                <p className="text-neutral-light">Atendimento online para todo o Brasil</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ContactForm;
