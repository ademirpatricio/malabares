import WeddingBar from "../components/ui/WeddingBar";
import Navbar from "../components/layout/Navbar";
import AboutHero from "../components/sections/AboutHero";
import AboutServices from "../components/sections/AboutServices";
import AboutTeam from "../components/sections/AboutTeam";
import AboutPicture from "../components/sections/AboutPicture";
import Logos from "../components/ui/Logos";
import Cta from "../components/layout/Cta";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <>
        <WeddingBar />
        <Navbar />
        <AboutHero />
        <AboutServices />
        <AboutTeam />
        <AboutPicture />
        <Logos />
        <Cta/>
        <Footer/>
    </>
  );
};

export default About;