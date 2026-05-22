import Container from "../layout/Container";
import ServiceCard from "../ui/ServiceCard";

function HomeServices(){
    return(
        <section className="w-full flex justify-center py-20">
            <Container>
                <div className="grid md:grid-cols-3 gap-8">

                    <div>
                        <h4 className="text-4xl font-bold mb-2 text-dark">Vamos te ajudar com toda a comunicação do seu projeto</h4>
                        <span className="text-xl font-light mb-2 text-secondary">SAIBA COMO ⤏</span>
                    </div>
                    <ServiceCard title="Planejamento de Comunicação" description="Roteiro pra fazer sua marca brilhar." />
                    <ServiceCard title="Redes Sociais" description="Aquele conteúdo que conecta de verdade." />
                    <ServiceCard title="Identidade Visual" description="Sua marca do jeitinho que ela merece." />
                    <ServiceCard title="Páginas que Vendem" description="Do clique ao carrinho, a gente cuida de tudo." />
                    <ServiceCard title="Infoprodutos" description="Se você ensina, a gente ajuda a vender." />

                </div>

            </Container>
        </section>
    )
}
export default HomeServices;