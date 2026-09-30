{/* Componentens */}
import Navbar from "../components/layout/Navbar";
import SEO from "../components/ui/SEO";
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
      <SEO
        title="Sobre a Malabares"
        description="Conheça a Malabares, agência criativa de marketing digital e tecnologia. Parceiros do crescimento da sua marca com estratégia, branding e redes sociais."
        canonical="/sobre"
      />
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