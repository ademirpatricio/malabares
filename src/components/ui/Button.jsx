const Button = ({
  children,
  link,
  target,
  className = ""
}) => {

  return (

    <a
      href={link}
      target={target}
      className={`
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
      `}
    >

      {children}

    </a>

  );

};

export default Button;