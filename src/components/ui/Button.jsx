const Button = ({ children, link }) => {
  return (
    <button
      className="
        border-2 rounded
        text-xl font-bold tracking-wide
        px-10 py-5 gap-4 w-auto
        flex items-center justify-center 
        transition-all duration-300
        cursor-pointer

        bg-auto border-primary text-primary
        hover:bg-primary hover:text-white
      "
    >
      {children}
    </button>
  );
};

export default Button;