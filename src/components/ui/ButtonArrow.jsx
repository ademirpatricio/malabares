import { Link } from "react-router-dom";
import { isExternal } from "../../utils";
import IcArrow from "./IcArrow";

/**
 * ButtonArrow — link com label e seta circular.
 *
 * Props:
 *   href     {string}  — destino do link (interno ou externo)
 *   label    {string}  — texto do botão
 *   variant  {string}  — aparência visual (ver tabela abaixo)
 *   size     {string}  — "sm" | "md" (padrão)
 *   className {string} — classes extras no elemento raiz
 *
 * Variantes disponíveis:
 *   "dark"   → texto roxo + círculo roxo  — use em fundos claros (bg-white, bg-beige)
 *   "light"  → texto branco + círculo branco, hover lemon — use em fundos escuros (bg-purple-dark)
 *   "pink"   → texto pink + círculo pink — use em destaques e banners de cor
 */

const variants = {
  dark: {
    root:   "text-purple",
    label:  "underline-slide",
    circle: "border-purple group-hover:bg-purple group-hover:border-purple",
    arrow:  "text-purple group-hover:text-lemon",
  },
  light: {
    root:   "text-white",
    label:  "underline-slide",
    circle: "border-white group-hover:bg-purple group-hover:border-purple",
    arrow:  "text-white group-hover:text-white",
  },
  pink: {
    root:   "text-pink",
    label:  "underline-slide",
    circle: "border-pink group-hover:bg-pink group-hover:border-pink",
    arrow:  "text-pink group-hover:text-white",
  },
  lemon: {
    root:   "text-white",
    label:  "underline-slide",
    circle: "border-white group-hover:bg-lemon group-hover:border-lemon",
    arrow:  "text-white group-hover:text-purple",
  }
};

const sizes = {
  sm: {
    root:   "gap-3 text-xs",
    circle: "w-8 h-8",
    arrow:  12,
  },
  md: {
    root:   "gap-4 text-base",
    circle: "w-10 h-10",
    arrow:  16,
  },
};

function ButtonArrow({
  href,
  label,
  variant = "dark",
  size = "md",
  className = "",
}) {
  const v = variants[variant] ?? variants.dark;
  const s = sizes[size]     ?? sizes.md;

  const inner = (
    <span
      className={`
        flex items-center w-fit
        font-sora font-semibold tracking-[0.2em] uppercase
        ${v.root} ${s.root} ${className}
        group
      `}
    >
      <span className={`${v.label} transition-colors duration-300`}>
        {label}
      </span>

      <span
        className={`
          ${s.circle} border-2 rounded-full
          flex items-center justify-center shrink-0
          transition-colors duration-300
          ${v.circle}
        `}
      >
        <IcArrow
          size={s.arrow}
          className={`transition-colors duration-300 ${v.arrow}`}
        />
      </span>
    </span>
  );

  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <Link to={href}>{inner}</Link>;
}

export default ButtonArrow;
