function BenefitsCard({ number, question, answer }) {
  return (
    <div className="
      flex items-start gap-6
      bg-white/5 border border-white/10
      rounded-xl px-8 py-7
      transition-all duration-300
      hover:bg-white/10 group
    ">
      {/* NÚMERO */}
      <span className="font-sora font-black text-6xl leading-none text-white/15 group-hover:text-lemon transition-colors duration-300 select-none shrink-0 mt-1">
        {number}
      </span>

      {/* CONTEÚDO */}
      <div className="flex flex-col gap-2">
        <h3 className="font-sora font-bold text-base leading-snug text-pink">
          {question}
        </h3>
        <p className="font-sora text-lilac-light leading-relaxed text-sm">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default BenefitsCard;
