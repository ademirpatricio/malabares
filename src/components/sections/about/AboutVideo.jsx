import Container from "../layout/Container";

function AboutVideo(){
    return (
        <div 
            id="aboutVideo"
            className="bg-white pt-16">
                <Container>
                    <iframe 
                        className="w-full aspect-video rounded-2xl" 
                        src="https://www.youtube.com/embed/AbsZvSVgdYQ?si=twvWXWaztIRLVg_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Container>
            </div>
    )
}
export default AboutVideo
