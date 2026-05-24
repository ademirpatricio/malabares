function NavLink({ href, children, title, white, target }) {

  return (

    <a
      href={href}
      title={title}
      target={target}
      className={`
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
      `}
    >

      {children}

    </a>

  );

}

export default NavLink;