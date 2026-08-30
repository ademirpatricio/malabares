function BenefitsCard({ title, description, icon }) {
  return (
    <div className="
      h-full
      bg-lilac/10
      border border-white/10
      px-10 pt-15 pb-12
      rounded-lg
      flex flex-col
      text-center
      transition-all duration-300
      hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]
    ">
      <img
        src={icon}
        alt="Ícone de serviço"
        className="w-35 h-auto mb-8 mx-auto"
      />

      {title && (
        <h4 className="text-2xl leading-tight mb-4 text-white">
          {title}
        </h4>
      )}

      <p className="text-[1.1rem] leading-relaxed text-lilac-light">
        {description}
      </p>
    </div>
  );
}

export default BenefitsCard;
