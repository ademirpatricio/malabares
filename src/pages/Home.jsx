import WeddingBar from "../components/ui/WeddingBar";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import HomeServices from "../components/sections/HomeServices";
import HomeAbout from "../components/sections/HomeAbout";
import InfiniteBanner from "../components/ui/InfiniteBanner";
import HomeBenefits from "../components/sections/HomeBenefits";
import HomeClients from "../components/sections/HomeClients";
import HomeLogos from "../components/sections/HomeLogos";
import HomeConsultancy from "../components/sections/HomeConsultancy";
import HomeTestimonials from "../components/sections/HomeTestimonials";
import WeddingCta from "../components/sections/WeddingCta";
import Cta from "../components/layout/Cta";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <WeddingBar />
      <Navbar />
      <Hero />
      <HomeServices />
      <HomeAbout />
      <InfiniteBanner />
      <HomeBenefits />
      <HomeClients />
      <HomeLogos />
      <HomeTestimonials />
      <WeddingCta/>
      <Cta/>
      <Footer/>
    </>
  );
};

export default Home;