function ServiceCard({ title, description, icon }) {
  return (
    <div className="
      bg-white hover:bg-muted transition duration-300
      rounded-xl 
      py-8 px-10
      border-2 border-muted
    ">

      <img 
        src={icon} 
        alt="Ícone de serviço" 
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-2xl font-bold mb-2 text-dark">{title}</h3>
      <p className="font-light mb-2 text-dark">{description}</p>
    </div>
  )
}
export default ServiceCard;