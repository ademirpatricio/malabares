const variants = {
  lemon: {
    bg: "bg-lemon",
    text: "text-purple",
    dot: "text-purple-dark",
  },
  pink: {
    bg: "bg-violet-light",
    text: "text-purple",
    dot: "text-violet",
  },
};

function InfiniteBanner({ variant = "lemon", items: itemsProp }) {

  const { bg, text, dot } = variants[variant] ?? variants.lemon;

  const items = [
    "Desenvolvimento de Sites",
    "Marketing Digital",
    "Estratégia de Conteúdo",
    "SEO e Patrocinados",
    "Branding",
    "Criação de Infoprodutos",
    "Identidade Visual",
  ];

  const itemsMarketing = [
    "Estratégia",
    "Criatividade",
    "Tecnologia",
    "Proximidade",
    "Resultado",
  ];

  const activeItems = itemsProp ?? items;

  return (
    <section className={`w-full overflow-hidden ${bg} py-8`}>
      <div className="flex whitespace-nowrap animate-marquee">

        {[...activeItems, ...activeItems].map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${text} text-2xl lg:text-4xl font-black tracking-wide mr-10`}
          >
            <span>{item}</span>
            <span className={`${dot} ml-10`}>✦</span>
          </div>
        ))}

      </div>
    </section>
  );
}

export default InfiniteBanner;
