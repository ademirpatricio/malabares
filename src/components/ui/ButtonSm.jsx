function ButtonSm ({ children, link, target }) {
  return (
    <a href={link} target={target}
      className="
        border-2 rounded
        text-sm font-bold tracking-widest
        px-8 py-2 gap-4 w-auto
        flex items-center justify-center 
        transition-all duration-300
        cursor-pointer

        bg-auto border-accent text-accent
        hover:bg-accent hover:text-dark
      "
    >
      {children}
    </a>
  );
};

export default ButtonSm;