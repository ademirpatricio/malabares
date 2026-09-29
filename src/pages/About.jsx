{/* Componentens */}
import Navbar from "../components/layout/Navbar";
import Cta from "../components/layout/Cta";
import InfiniteBanner from "../components/ui/InfiniteBanner";

{/* About sessions */}
import AboutHero from "../components/sections/about/AboutHero";
import AboutServices from "../components/sections/about/AboutServices";
import AboutTeam from "../components/sections/about/AboutTeam";
import AboutPicture from "../components/sections/about/AboutPicture";

{/* Infinit baner elements */}
const items = [
  "Desenvolvimento de Sites",
  "Marketing Digital",
  "Estratégia de Conteúdo",
  "SEO e Patrocinados",
  "Branding",
  "Criação de Infoprodutos",
  "Identidade Visual",
];

{/* ---------- */}
function About() {
  return (
    <>
        <Navbar />
        <AboutHero />
        <InfiniteBanner variant="lemon" items={items}/>
        <AboutServices />
        <AboutTeam />
        <AboutPicture />
        <InfiniteBanner variant="pink" items={items}/>
        <Cta/>
    </>
  );
};

export default About;