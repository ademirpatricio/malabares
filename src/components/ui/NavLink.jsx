import { Link } from "react-router-dom";
import { isExternal } from "../../utils";

function NavLink({ 
  href, 
  children,
  target,  
  title, 
  variant = "primary",
}) {

  const variants = {
    primary:   "text-pink hover:text-pink-dark hover:border-pink-dark",
    secondary: "text-violet hover:text-violet-dark hover:border-violet-dark",
    accent:    "text-lemon hover:text-lemon-dark hover:border-lemon-dark",
    white:     "text-white hover:text-pink hover:border-pink",
  };

  const base = `font-sora font-semibold text-lg px-3 py-2 tracking-[0.02em]
    border-b-2 border-transparent
    transition-colors duration-200 ${variants[variant]}`;

  if (isExternal(href)) {
    return (
      <a
        href={href}
        title={title}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={base}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} title={title} target={target} className={base}>
      {children}
    </Link>
  );
}

export default NavLink;
