function ServiceCard({ title, description, icon, number }) {
  return (
    <div className="
      h-full flex flex-col group
      rounded-xl py-8 px-8 md:py-10 md:px-10
      bg-white/5 border border-white/10
      hover:bg-white/10
      transition-all duration-300
    ">
      {number && (
        <span className="font-archivo font-bold text-6xl leading-none text-white/10 group-hover:text-lemon select-none mb-6 transition-colors duration-300">
          {number}
        </span>
      )}

      {icon && (
        <img src={icon} alt="Ícone de serviço" className="w-16 h-16 mb-6" />
      )}


      <h3 className="text-xl font-sora font-bold leading-tight text-white mb-3">
        {title}
      </h3>

      <p className="text-lilac-light leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
