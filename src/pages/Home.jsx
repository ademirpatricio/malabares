{/* Bocos do site */}
import Navbar from "../components/layout/Navbar";
import SEO from "../components/ui/SEO";
import InfiniteBanner from "../components/ui/InfiniteBanner";
import Cta from "../components/layout/Cta";

import HomeHero from "../components/sections/home/HomeHero";
import HomeServices from "../components/sections/home/HomeServices";
import HomeAbout from "../components/sections/home/HomeAbout";
import HomeBenefits from "../components/sections/home/HomeBenefits";

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
      <SEO
        title="Marketing Digital, Sites e Estratégia Digital"
        description="A Malabares é uma agência criativa especializada em marketing digital, desenvolvimento de sites, branding, redes sociais e páginas de alta conversão."
        canonical="/"
      />
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
