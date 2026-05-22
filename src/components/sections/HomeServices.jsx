import Container from "../layout/Container";
import ServiceCard from "../ui/ServiceCard";

import homeServicesIcon1 from "../../assets/images/home-services-icon-1.svg";
import homeServicesIcon2 from "../../assets/images/home-services-icon-2.svg";
import homeServicesIcon3 from "../../assets/images/home-services-icon-3.svg";
import homeServicesIcon4 from "../../assets/images/home-services-icon-4.svg";
import homeServicesIcon5 from "../../assets/images/home-services-icon-5.svg";

function HomeServices(){
    return(
        <section className="w-full flex justify-center py-20">

            <Container>
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-4xl font-bold mb-2 text-dark">Vamos te ajudar com toda a comunicação do seu projeto</h4>
                        <span className="text-xl font-light mb-2 text-secondary">SAIBA COMO ⤏</span>
                    </div>
                    <ServiceCard icon={homeServicesIcon1} title="Planejamento de Comunicação" description="Roteiro pra fazer sua marca brilhar." />
                    <ServiceCard icon={homeServicesIcon2} title="Redes Sociais" description="Aquele conteúdo que conecta de verdade." />
                    <ServiceCard icon={homeServicesIcon3} title="Identidade Visual" description="Sua marca do jeitinho que ela merece." />
                    <ServiceCard icon={homeServicesIcon4} title="Páginas que Vendem" description="Do clique ao carrinho, a gente cuida de tudo." />
                    <ServiceCard icon={homeServicesIcon5} title="Infoprodutos" description="Se você ensina, a gente ajuda a vender." />
                </div>
            </Container>

        </section>
    )
}
export default HomeServices;