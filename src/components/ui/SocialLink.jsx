function SocialLink({ link, title, icon, white }) {

  return (

    <div className="
      flex
      flex-row
      gap-5
    ">

      <a
        href={link}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
      >

        <img
          src={icon}
          alt={title}
          className={`
            w-9
            h-auto

            transition-all
            duration-300

            hover:opacity-75

            ${
              white
                ? "brightness-0 invert"
                : ""
            }
          `}
        />

      </a>

    </div>

  );

}

export default SocialLink;