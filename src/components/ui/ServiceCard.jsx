function ServiceCard({ title, description, icon }) {
  return (
    <div className="
      h-full
      bg-purple-dark
      transition-all duration-300
      rounded-xl
      py-8 px-10
      md:py-10 md:px-12
      bg-purple/50
      hover:bg-purple/80
      flex flex-col
    ">
      <img
        src={icon}
        alt="Ícone de serviço"
        className="w-16 h-16 mb-6"
      />

      <h3 className="text-xl lg:text-2xl leading-tight 
      tracking-tight mb-4 text-white font-sora">
        {title}
      </h3>

      <p className="text-base 
      text-lilac-light font-sora font-light">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
