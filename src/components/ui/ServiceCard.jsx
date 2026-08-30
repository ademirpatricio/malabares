function ServiceCard({ title, description, icon }) {
  return (
    <div className="
      h-full
      bg-white
      transition-all duration-300
      rounded-xl
      py-8 px-10
      md:py-10 md:px-12
      border-2 border-muted hover:bg-muted
      flex flex-col
    ">
      <img
        src={icon}
        alt="Ícone de serviço"
        className="w-16 h-16 mb-6"
      />

      <h3 className="text-xl lg:text-2xl leading-tight tracking-tight mb-4 text-purple">
        {title}
      </h3>

      <p className="text-[1.1rem] leading-relaxed text-neutral-light">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
