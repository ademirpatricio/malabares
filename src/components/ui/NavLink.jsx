import { Link } from "react-router-dom";

function NavLink({ href, children, title, white, target }) {
  const isInternalLink = href?.startsWith("/") && !target;
  const linkClass = `
    font-bold
    text-lg

    px-3
    py-2

    rounded-md

    transition-colors

    ${
      white
        ? "text-white hover:text-white hover:bg-white/10"
        : "text-dark hover:text-tertiary hover:bg-light"
    }
  `;

  if (isInternalLink) {
    return (
      <Link
        to={href}
        title={title}
        className={linkClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      title={title}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={linkClass}
    >
      {children}
    </a>
  );
}

export default NavLink;
