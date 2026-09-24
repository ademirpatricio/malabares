import WeddingBar from "../components/ui/WeddingBar";
import Navbar from "../components/layout/Navbar";
import HomeHero from "../components/sections/HomeHero";
import HomeServices from "../components/sections/HomeServices";
import HomeAbout from "../components/sections/HomeAbout";
import InfiniteBanner from "../components/ui/InfiniteBanner";
import HomeBenefits from "../components/sections/HomeBenefits";
import Logos from "../components/ui/Logos";
import Cta from "../components/layout/Cta";
import Footer from "../components/layout/Footer";

const items = [
  "Desenvolvimento de Sites",
  "Marketing Digital",
  "Estratégia de Conteúdo",
  "SEO e Patrocinados",
  "Branding",
  "Criação de Infoprodutos",
  "Identidade Visual",
];

const itemsMarketing = [
  "Estratégia",
  "Criatividade",
  "Tecnologia",
  "Proximidade",
  "Resultado",
];

function Home() {
  return (
    <>
      {/* <WeddingBar />*/}
      <Navbar />
      <HomeHero />
      <InfiniteBanner variant="lemon" items={items}/>
      <HomeServices />
      <HomeAbout />
      <HomeBenefits />
      <InfiniteBanner variant="pink" items={itemsMarketing}/>
      <Cta/>
      <Footer/>
    </>
  );
};

export default Home;
