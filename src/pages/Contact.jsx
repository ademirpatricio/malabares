import WeddingBar from "../components/ui/WeddingBar";
import Navbar from "../components/layout/Navbar";
import ContactHero from "../components/sections/ContactHero";
import ContactChannels from "../components/sections/ContactChannels";
import ContactForm from "../components/sections/ContactForm";
import ContactFaq from "../components/sections/ContactFaq";
import ContactCta from "../components/sections/ContactCta";
import Footer from "../components/layout/Footer";

function Contact() {
  return (
    <>
        <WeddingBar />
        <Navbar />
        <ContactHero />
        <ContactChannels />
        <ContactForm />
        <ContactFaq />
        <ContactCta/>
        <Footer/>
    </>
  );
};

export default Contact;