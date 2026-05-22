import Container from "../layout/Container";
import ButtonSm from "../ui/ButtonSm";

import weddingBarBg from "../../assets/images/weddingbar-bg.jpg";

function WeddingBar(){
    return(
        <section id="weddingBar" 
        className="w-full bg-primary py-6 px-6 flex justify-center"
        style={{
            backgroundImage: `url(${weddingBarBg})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
        }}>

            <Container>
                
                <div className="
                    flex flex-col lg:flex-row
                    gap-5 lg:gap-20
                    items-center justify-between 
                    text-center lg:text-left
                    "
                    >
                    <h4 className="text-white font-light">💕 Transforme seu casamento com uma <span className="font-bold">identidade visual única e personalizada</span></h4>
                    <ButtonSm link="https://wedding.malabares.com.br" target="_blank">
                    ↪ Malabares Wedding
                    </ButtonSm>
                </div>

            </Container>

        </section>
    )
}

export default WeddingBar;