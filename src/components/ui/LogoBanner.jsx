import logo1 from "../../assets/images/logos/logo-client-1.png";
import logo2 from "../../assets/images/logos/logo-client-2.png";
import logo3 from "../../assets/images/logos/logo-client-3.png";
import logo4 from "../../assets/images/logos/logo-client-4.png";
import logo5 from "../../assets/images/logos/logo-client-5.png";
import logo6 from "../../assets/images/logos/logo-client-6.png";
import logo7 from "../../assets/images/logos/logo-client-7.png";
import logo8 from "../../assets/images/logos/logo-client-8.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

function LogoBanner({ bg = "bg-violet", filter = "grayscale" }) {
  const doubled = [...logos, ...logos];

  return (
    <section className={`w-full overflow-hidden ${bg} py-8`}>
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="shrink-0 mx-10 flex items-center justify-center"
          >
            <img
              src={logo}
              alt=""
              className={`h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 ${
                filter === "grayscale" ? "grayscale" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogoBanner;
