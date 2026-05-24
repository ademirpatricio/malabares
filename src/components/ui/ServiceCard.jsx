function ServiceCard({ title, description, icon }) {

  return (

    <div className="
      h-full

      bg-white
      hover:bg-muted

      transition-all
      duration-300

      rounded-2xl

      py-8
      px-10

      md:py-6
      md:px-8

      border-2
      border-muted

      flex
      flex-col
    ">

      <img
        src={icon}
        alt="Ícone de serviço"
        className="
          w-16
          h-16

          mb-6
        "
      />

      <h3 className="
        text-xl
        lg:text-2xl

        font-bold

        leading-tight

        mb-4
      ">

        {title}

      </h3>

      <p className="
        text-[1.25rem]
        leading-[1.6]

        text-dark/80
      ">

        {description}

      </p>

    </div>

  );

}

export default ServiceCard;