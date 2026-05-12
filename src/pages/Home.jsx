import HeroSection from "../components/Homepage/hero";
import ServicesSection from "./Services";
import LocationMap from "../components/map";
import ContactForm from "../components/Contactform";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <section id="expertise" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Why professionals trust us
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            <div className="p-5 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-2">🏅</div>
              <p className="font-semibold">Licensed tax consultants</p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-2">📋</div>
              <p className="font-semibold">100% compliance assurance</p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-sm">
              <div className="text-3xl mb-2">⭐</div>
              <p className="font-semibold">4.9/5 from 200+ clients</p>
            </div>
          </div>
        </div>
      </section>
      <LocationMap />
      <ContactForm />
    </>
  );
}
