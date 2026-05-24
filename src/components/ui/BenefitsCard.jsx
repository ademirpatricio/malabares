function BenefitsCard({ title, description, icon }) {

  return (

    <div className="
      h-full

      bg-quinary

      px-10
      pt-15
      pb-12

      rounded-2xl

      flex
      flex-col

      text-center
    ">

      <img
        src={icon}
        alt="Ícone de serviço"
        className="
          w-35
          h-auto

          mb-8

          mx-auto
        "
      />

      {
        title && (
          <h4 className="
            text-2xl
            font-bold

            mb-4
          ">

            {title}

          </h4>
        )
      }

      <p className="
        text-[1.25rem]
        leading-[1.6]

        text-white/90
      ">

        {description}

      </p>

    </div>

  );

}

export default BenefitsCard;