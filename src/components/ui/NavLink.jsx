function NavLink({ href, children, title }) {
  return (
    <a
      href={href}
      title={title}
      className="
        text-dark
        font-bold
        text-lg
        px-3 py-2
        rounded-md
        transition-colors
        hover:text-tertiary
        hover:bg-light
      "
    >
      {children}
    </a>
  );
}

export default NavLink;