import homeServicesIcon1 from "../../assets/images/home-services-icon-1.svg";
import homeServicesIcon2 from "../../assets/images/home-services-icon-2.svg";
import homeServicesIcon3 from "../../assets/images/home-services-icon-3.svg";
import homeServicesIcon4 from "../../assets/images/home-services-icon-4.svg";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="
      bg-white
      rounded-[32px]
      py-8 px-10
      border border-zinc-200
    ">

      <img 
        src={homeServicesIcon1} 
        alt="Ícone de serviço" 
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-2xl font-bold mb-2 text-dark">{title}</h3>
      <p className="font-light mb-2 text-dark">{description}</p>
    </div>
  )
}
export default ServiceCard;