import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Cta from "../components/layout/Cta";
import ContactHero from "../components/sections/ContactHero";
import ContactForm from "../components/sections/ContactForm";
import ContactChannels from "../components/sections/ContactChannels";
import ContactFaq from "../components/sections/ContactFaq";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactChannels />
      <ContactFaq />
      <Cta />
      <Footer />
    </>
  );
}

export default Contact;
