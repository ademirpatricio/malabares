import Navbar from "../components/layout/Navbar";
import HomeHero from "../components/sections/HomeHero";
import InfiniteBanner from "../components/ui/InfiniteBanner";
import HomeServices from "../components/sections/HomeServices";
import HomeAbout from "../components/sections/HomeAbout";
import HomeBenefits from "../components/sections/HomeBenefits";
import Cta from "../components/layout/Cta";

{/* Itens para os banners infinitos */}
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
      <Navbar />
      <HomeHero />
      <InfiniteBanner variant="lemon" items={items}/>
      <HomeServices />
      <HomeAbout />
      <HomeBenefits />
      <InfiniteBanner variant="pink" items={itemsMarketing}/>
      <Cta/>
    </>
  );
};

export default Home;
