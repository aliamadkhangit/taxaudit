import HeroSection from "../components/Homepage/hero";
import ServicesSection from "./Services";
import LocationMap from "../components/map";
import ContactForm from "../components/Contactform";
import TrustSection from "../components/Homepage/TrustSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <LocationMap />
      <ContactForm />
    </>
  );
}
