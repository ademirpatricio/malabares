import { useState } from "react";
import Container from "../layout/Container";

import testimonial1 from "../../assets/images/testimonials-image-1.png";
import testimonial2 from "../../assets/images/testimonials-image-2.png";

import photo1 from "../../assets/images/home-clients-image-1.jpg";
import photo2 from "../../assets/images/home-clients-image-2.jpg";
import photo3 from "../../assets/images/home-clients-image-3.jpg";
import photo4 from "../../assets/images/home-clients-image-4.jpg";

const testimonials = [
  {
    name: "Paula Ferreira",
    role: "Diretora da Merreira Consultoria",
    text: "Quero agradecer à equipe de profissionais da Malabares pela atenção que eles estão tendo em cada apresentação dos conteúdos. Estou muito confiante do que vi até agora. Gratidão a todos vocês!",
  },
  {
    name: "Daniel Taddone",
    role: "CEO da Rumo Nordeste",
    text: "Há duas características da equipe da Malabares que mais admiro. A primeira é seu senso estético apurado e elegante. Suas criações têm personalidade e arrojo. A segunda é sua simpatia. É uma equipe profissional gente fina a toda prova!",
  },
];

const photos = [photo1, photo2, photo3, photo4];

function HomeTestimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <section id="homeTestimonials" className="w-full py-24 bg-purple overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Coluna esquerda: título + depoimentos */}
          <div className="flex flex-col gap-8">
            <div data-aos="fade-up" className="flex flex-col gap-2">
              <h2 className="font-sora font-bold text-3xl lg:text-4xl text-white leading-tight">
                Parcerias que fizeram <br/><span className="text-pink">parte da nossa história.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  {/* Nome e cargo no topo */}
                  <div>
                    <p className="font-sora font-semibold text-sm text-white">{t.name}</p>
                    <p className="font-sora text-xs text-white/40">{t.role}</p>
                  </div>

                  {/* Texto */}
                  <p className="text-lilac-light leading-relaxed text-sm">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita: carrossel */}
          <div data-aos="fade-left" className="relative w-full">
            <div className="relative w-full aspect-[8/7] rounded-2xl overflow-hidden">
              {photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-5">
                <div className="flex gap-1.5">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? "w-6 bg-lemon" : "w-1.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full bg-lemon flex items-center justify-center text-purple hover:opacity-90 transition-opacity"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="font-sora text-xs text-white/70">
                {String(current + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
              </span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default HomeTestimonials;
