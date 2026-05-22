function SocialLink({link, title, icon}){
    
    return(
        <div className="flex flex-row gap-5">
            <a 
            href={link}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
            >
                <img 
                src={icon} 
                className="w-9 h-auto hover:opacity-75 transition duration-300" 
                />
            </a>

        </div>
    )
}
export default SocialLink;