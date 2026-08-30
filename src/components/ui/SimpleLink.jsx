function SimpleLink({
    href, 
    children, 
    title, 
    target,
    variant = 'primary',
})
    {
        const variants = {
  primary:   `bg-pink hover:bg-pink-dark text-white`,
  secondary: `bg-violet hover:bg-violet-dark text-white`,
  accent:    `bg-lemon hover:bg-lemon-dark text-purple`,
  disabled:  `bg-neutral text-neutral-light pointer-events-none`,
}
    return (
        <Link
        to={href}
        title={title}
        target={target}
        className={`
            text-md md:text-xl font-medium tracking-wide
            ${variants[variant]}`
        }>
            {children}
        </Link>
    );
}
export default SimpleLink;