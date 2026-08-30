import WeddingBar from "../components/ui/WeddingBar";
import Navbar from "../components/layout/Navbar";
import ContactHero from "../components/sections/ContactHero";
import ContactChannels from "../components/sections/ContactChannels";
import ContactForm from "../components/sections/ContactForm";
import ContactFaq from "../components/sections/ContactFaq";
import Footer from "../components/layout/Footer";
import Cta from "../components/layout/Cta";

function Contact() {
  return (
    <>
        <Navbar />
        <ContactHero />
        <ContactChannels />
        <ContactForm />
        <ContactFaq />
        <Cta />
        <Footer/>
    </>
  );
};

export default Contact;