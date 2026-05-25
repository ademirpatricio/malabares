import WeddingBar from "../components/ui/WeddingBar";
import Navbar from "../components/layout/Navbar";
import HomeHero from "../components/sections/HomeHero";
import HomeServices from "../components/sections/HomeServices";
import HomeAbout from "../components/sections/HomeAbout";
import InfiniteBanner from "../components/ui/InfiniteBanner";
import HomeBenefits from "../components/sections/HomeBenefits";
import HomeClients from "../components/sections/HomeClients";
import Logos from "../components/ui/Logos";
import HomeTestimonials from "../components/sections/HomeTestimonials";
import WeddingCta from "../components/ui/WeddingCta";
import Cta from "../components/layout/Cta";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <WeddingBar />
      <Navbar />
      <HomeHero />
      <HomeServices />
      <HomeAbout />
      <InfiniteBanner />
      <HomeBenefits />
      <HomeClients />
      <Logos />
      <HomeTestimonials />
      <WeddingCta/>
      <Cta/>
      <Footer/>
    </>
  );
};

export default Home;
