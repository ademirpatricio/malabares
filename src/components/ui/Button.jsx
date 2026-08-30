import { Link } from "react-router-dom";
import { isExternal } from "../../utils";

const Button = ({
  children,
  link,
  target,
  className = "",
  variant = "primary",
  size = "default",
}) => {

  const variants = {
    primary:   "bg-pink hover:bg-pink-dark text-white",
    secondary: "bg-violet hover:bg-violet-dark text-white",
    accent:    "bg-lemon hover:bg-lemon-dark text-purple",
    outline:   "border-2 border-pink text-pink hover:bg-pink hover:text-white",
    ghost:     "text-pink border-b-2 border-pink hover:text-purple hover:border-purple pb-0.5",
    disabled:  "bg-neutral text-neutral-light pointer-events-none opacity-60",
  };

  const sizes = {
    default: "px-10 py-5 text-lg tracking-[0.02em]",
    sm:      "px-6 py-2 text-sm",
  };

  const base = `
    rounded font-sora font-semibold tracking-wide
    w-auto text-center inline-flex justify-center items-center gap-2
    transition-all duration-300 cursor-pointer
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (isExternal(link)) {
    return (
      <a
        href={link}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={base}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={link} target={target} className={base}>
      {children}
    </Link>
  );
};

export default Button;
