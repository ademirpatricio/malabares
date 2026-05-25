import { Link } from "react-router-dom";

const Button = ({
  children,
  link,
  target,
  className = ""
}) => {
  const isInternalLink = link?.startsWith("/") && !target;
  const buttonClass = `
    border-2
    rounded

    text-md
    md:text-xl

    font-bold
    tracking-wide
    text-center

    px-10
    py-5

    gap-4
    w-auto

    inline-flex
    items-center
    justify-center

    transition-all
    duration-300

    cursor-pointer

    border-primary
    text-primary

    hover:bg-primary
    hover:text-white

    ${className}
  `;

  if (isInternalLink) {
    return (
      <Link
        to={link}
        className={buttonClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={link}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={buttonClass}
    >
      {children}
    </a>
  );
};

export default Button;
