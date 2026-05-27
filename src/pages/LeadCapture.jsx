import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../components/layout/Container";

import { sendLeadCaptureForm } from "../services/contactService";

import aboutBg from "../assets/images/about-bg.jpg";
import logoMalabares from "../assets/images/logo-malabares.svg";
import logoMalabaresLight from "../assets/images/logo-malabares-light.svg";

function LeadCapture() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    objective: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  function handleChange(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (formData.website) {
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      await sendLeadCaptureForm(formData);

      setStatus("success");

setTimeout(() => {

  navigate("/obrigado");

}, 1200);

      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        company: "",
        objective: "",
        website: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("error");

      setTimeout(() => {
        setStatus(null);
      }, 4000);
    } finally {
      setLoading(false);
    }
  }

  return (

    <main
      className="
        min-h-screen

        bg-white

        overflow-hidden
      "
    >

      {/* HERO */}
      <section
        className="
          relative

          py-15
          lg:py-20

          bg-light
        "
      >

        <Container>

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1fr_480px]

              gap-16
              items-center
            "
          >

            {/* CONTEÚDO */}
            <div data-aos="fade-right">

              {/* LOGO */}
              <div
                className="
                  inline-flex
                  items-center


                  mb-10
                "
              >

                <img
                  src={logoMalabares}
                  alt="Malabares"
                  className="
                    w-[300px]
                    max-w-full
                  "
                />

              </div>

              {/* TAG */}
              <span
                className="
                  inline-block

                  text-primary

                  uppercase
                  tracking-[0.3em]

                  mb-8
                "
              >

                ⮑ ANÁLISE GRATUITA DA SUA PRESENÇA DIGITAL

              </span>

              {/* HEADLINE */}
              <h1
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl

                  font-bold

                  leading-tight
                  tracking-tight

                  max-w-3xl

                  mb-8
                "
              >

                Seu negócio merece uma presença digital mais profissional.

              </h1>

              {/* TEXTO */}
              <p
                className="
                  text-[1.25rem]
                  leading-[1.6]

                  text-dark/70

                  max-w-2xl

                  mb-10
                "
              >

                Receba uma análise gratuita da sua presença digital e descubra oportunidades para fortalecer sua marca, atrair mais clientes e transmitir mais valor online.

              </p>

              {/* MICRO INFO */}
              <div
                className="
                  flex
                  flex-wrap

                  gap-4
                "
              >

                <span className="text-dark/60">
                  ✔ Sem custo
                </span>

                <span className="text-dark/60">
                  ✔ Sem compromisso
                </span>

                <span className="text-dark/60">
                  ✔ Atendimento humano
                </span>

              </div>

            </div>

            {/* FORM */}
            <div
              id="leadCaptureForm"
              data-aos="fade-left"
              data-aos-delay="100"
              className="
                relative

                border
                border-muted

                rounded-3xl

                bg-white

                p-8
                lg:p-10

                shadow-[0_20px_80px_rgba(0,0,0,0.06)]
              "
            >

              <div className="mb-8">

                <h2
                  className="
                    text-2xl

                    font-bold

                    mb-4
                  "
                >

                  Vamos entender melhor o seu negócio.

                </h2>

                <p
                  className="
                    text-dark/70

                    leading-[1.6]
                  "
                >

                  Preencha as informações abaixo e nossa equipe entrará em contato para analisar sua presença digital.

                </p>

              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="
                  flex
                  flex-col

                  gap-4
                "
              >
                {/* HONEYPOT */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden"
                  autoComplete="off"
                  tabIndex="-1"
                />

                {/* NOME */}
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full

                    rounded-xl

                    border
                    border-muted

                    bg-light

                    px-5
                    py-4

                    outline-none

                    transition-all
                    duration-300

                    focus:border-primary
                    focus:bg-white

                    focus:shadow-[0_0_0_4px_rgba(196,30,48,0.08)]
                  "
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="
                    w-full

                    rounded-xl

                    border
                    border-muted

                    bg-light

                    px-5
                    py-4

                    outline-none

                    transition-all
                    duration-300

                    focus:border-primary
                    focus:bg-white

                    focus:shadow-[0_0_0_4px_rgba(196,30,48,0.08)]
                  "
                />

                {/* WHATSAPP */}
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className="
                    w-full

                    rounded-xl

                    border
                    border-muted

                    bg-light

                    px-5
                    py-4

                    outline-none

                    transition-all
                    duration-300

                    focus:border-primary
                    focus:bg-white

                    focus:shadow-[0_0_0_4px_rgba(196,30,48,0.08)]
                  "
                />

                {/* EMPRESA */}
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa ou negócio"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="
                    w-full

                    rounded-xl

                    border
                    border-muted

                    bg-light

                    px-5
                    py-4

                    outline-none

                    transition-all
                    duration-300

                    focus:border-primary
                    focus:bg-white

                    focus:shadow-[0_0_0_4px_rgba(196,30,48,0.08)]
                  "
                />

                {/* OBJETIVO */}
                <textarea
                  rows="5"
                  name="objective"
                  placeholder="O que você gostaria de melhorar hoje?"
                  value={formData.objective}
                  onChange={handleChange}
                  required
                  className="
                    w-full

                    rounded-xl

                    border
                    border-muted

                    bg-light

                    px-5
                    py-4

                    outline-none
                    resize-none

                    transition-all
                    duration-300

                    focus:border-primary
                    focus:bg-white

                    focus:shadow-[0_0_0_4px_rgba(196,30,48,0.08)]
                  "
                />

                {/* BOTÃO */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    mt-2

                    inline-flex
                    items-center
                    justify-center

                    rounded-xl

                    bg-primary

                    px-8
                    py-5

                    font-semibold
                    text-white

                    transition-all
                    duration-300

                    disabled:cursor-not-allowed
                    disabled:opacity-70

                    hover:scale-[1.01]
                    hover:shadow-[0_10px_30px_rgba(196,30,48,0.18)]
                  "
                >

                  {loading && (
                    <span
                      className="
                        mr-3

                        w-4
                        h-4

                        border-2
                        border-white
                        border-t-transparent

                        rounded-full

                        animate-spin
                      "
                    />
                  )}

                  {loading ? "Enviando..." : "↪ Solicitar análise gratuita"}

                </button>

                <div
                  className={`
                    overflow-hidden

                    transition-all
                    duration-500

                    ${status ? "max-h-28 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  {status === "success" && (
                    <p
                      className="
                        text-sm

                        text-emerald-700

                        border
                        border-emerald-200

                        bg-emerald-50

                        rounded-lg

                        px-4
                        py-3
                      "
                    >
                      Recebemos sua solicitação. Em breve entraremos em contato.
                    </p>
                  )}

                  {status === "error" && (
                    <p
                      className="
                        text-sm

                        text-red-600

                        border
                        border-red-200

                        bg-red-50

                        rounded-lg

                        px-4
                        py-3
                      "
                    >
                      Ocorreu um erro ao enviar. Tente novamente.
                    </p>
                  )}
                </div>

              </form>

            </div>

          </div>

        </Container>

      </section>

      {/* BENEFÍCIOS */}
      <section
        className="
          py-24

          bg-white
        "
      >

        <Container>

          {/* TOPO */}
          <div
            data-aos="fade-up"
            className="
              max-w-3xl
              mx-auto

              text-center

              mb-16
            "
          >

            <span
              className="
                inline-block

                text-primary

                uppercase
                tracking-[0.3em]

                mb-6
              "
            >

              ⮑ O QUE VOCÊ VAI RECEBER

            </span>

            <h2
              className="
                text-3xl
                md:text-4xl

                font-bold

                leading-tight

                mb-6
              "
            >

              Uma análise clara, prática e estratégica.

            </h2>

            <p
              className="
                text-[1.25rem]
                leading-[1.6]

                text-dark/70
              "
            >

              Nosso objetivo é mostrar oportunidades reais para fortalecer sua presença digital e transmitir mais valor para seus clientes.

            </p>

          </div>

          {/* CARDS */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3

              gap-6
            "
          >

            {/* CARD */}
            <div
              data-aos="fade-up"
              className="
                rounded-2xl

                border
                border-muted

                bg-white

                p-8

                text-center
              "
            >

              <h3
                className="
                  text-2xl

                  font-bold

                  mb-4
                "
              >

                Posicionamento digital

              </h3>

              <p
                className="
                  text-dark/70

                  leading-[1.6]
                "
              >

                Entenda como sua marca está sendo percebida no digital e o que pode estar afetando sua autoridade online.

              </p>

            </div>

            {/* CARD */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                rounded-2xl

                border
                border-muted

                bg-white

                p-8

                text-center
              "
            >

              <h3
                className="
                  text-2xl

                  font-bold

                  mb-4
                "
              >

                Presença profissional

              </h3>

              <p
                className="
                  text-dark/70

                  leading-[1.6]
                "
              >

                Analisamos pontos visuais e estratégicos que ajudam sua empresa a transmitir mais confiança e valor.

              </p>

            </div>

            {/* CARD */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                rounded-2xl

                border
                border-muted

                bg-white

                p-8

                text-center
              "
            >

              <h3
                className="
                  text-2xl

                  font-bold

                  mb-4
                "
              >

                Oportunidades de crescimento

              </h3>

              <p
                className="
                  text-dark/70

                  leading-[1.6]
                "
              >

                Descubra melhorias práticas para fortalecer sua comunicação e atrair mais clientes.

              </p>

            </div>

          </div>

        </Container>

      </section>

      {/* SOBRE */}
      <section
        className="
          py-24
        "
      >

        <Container>

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2

              gap-30
              items-center
            "
          >
            <div
              data-aos="fade-right"
              className="
                max-w-4xl
              "
            >

              <span
                className="
                  inline-block

                  text-primary

                  uppercase
                  tracking-[0.3em]

                  mb-6
                "
              >

                ⮑ QUEM SOMOS

              </span>

              <h2
                className="
                  text-3xl
                  md:text-4xl

                  font-bold

                  leading-tight

                  mb-8
                "
              >

                Criatividade com direção estratégica.

              </h2>

              <p
                className="
                  text-[1.25rem]
                  leading-[1.7]

                  text-dark/70
                "
              >

                A Malabares é uma agência criativa que ajuda pequenas empresas, negócios locais e profissionais liberais a construírem uma presença digital mais forte, organizada e profissional.

                <br />
                <br />

                Unimos design, estratégia e comunicação para transformar ideias em marcas mais relevantes e experiências mais bem construídas.

              </p>

            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="
                overflow-hidden
                rounded-3xl
              "
            >

              <img
                src={aboutBg}
                alt="Equipe da Malabares"
                className="
                  w-full
                  h-[420px]
                  lg:h-[520px]

                  object-cover
                "
              />

            </div>

          </div>

        </Container>

      </section>

      {/* CTA FINAL */}
      <section
        className="
          relative
          overflow-hidden

          py-24

          bg-primary
          bg-cover
          bg-center
          bg-no-repeat
          bg-scroll
          lg:bg-fixed

          text-white
        "
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      >

        <div
          className="
            absolute
            inset-0

            bg-dark/90
          "
        />

        <Container>

          <div
            data-aos="fade-up"
            className="
              relative
              z-10

              max-w-4xl
              mx-auto

              text-center
            "
          >

            <h2
              className="
                text-4xl
                md:text-5xl

                font-bold

                leading-tight

                mb-8
              "
            >

              Sua presença digital pode transmitir muito mais valor.

            </h2>

            <p
              className="
                text-[1.25rem]
                leading-[1.6]

                text-white

                mb-10
              "
            >

              Vamos analisar seu negócio e mostrar caminhos reais para fortalecer sua marca no digital.

            </p>

            <a
              href="#leadCaptureForm"
              className="
                inline-flex
                items-center
                justify-center

                rounded-xl

                border
                border-white/20

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

              ↪ Solicitar análise gratuita

            </a>

            <img
              src={logoMalabaresLight}
              alt="Malabares"
              className="
                w-[220px]
                max-w-full

                mx-auto
                mt-12

                brightness-0
                invert
              "
            />

          </div>

        </Container>

      </section>

    </main>

  );

}

export default LeadCapture;
