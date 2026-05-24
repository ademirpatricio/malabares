function InfiniteBanner() {

  const items = [
    "Desenvolvimento de Sites",
    "Marketing Digital",
    "Estratégia de Conteúdo",
    "SEO e Patrocinados",
    "Branding",
    "Criação de Infoprodutos",
    "Identidade Visual",
  ];

  return (

    <section className="
      w-full
      overflow-hidden

      bg-[#240144]

      py-8
    ">

      <div className="
        flex
        whitespace-nowrap

        animate-marquee
      ">

        {[...items, ...items].map((item, index) => (

          <div
            key={index}
            className="
              flex
              items-center

              text-white

              text-2xl
              lg:text-4xl

              font-black

              tracking-wide

              mr-10
            "
          >

            <span>{item}</span>

            <span className="
              text-[#ab7cdd]
              ml-10
            ">
              ✦
            </span>

          </div>

        ))}

      </div>

    </section>

  );
}

export default InfiniteBanner;