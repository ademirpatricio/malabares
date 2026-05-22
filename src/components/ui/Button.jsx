const Button = ({ children }) => {
  return (
    <button
      className="
        border-2 border-primary rounded
        text-primary text-xl font-bold tracking-wide
        px-10 py-5 gap-4 w-auto
        flex items-center justify-center 
        hover:bg-primary hover:text-white transition-all duration-300
        cursor-pointer
      "
    >
      {children}
    </button>
  );
};

export default Button;