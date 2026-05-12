import ContactForm from "../components/Contactform";

export default function Contact() {
  return (
    <>
      <ContactForm />
      <ContactCTA />
    </>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-indigo-900 text-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to secure your business & taxes?
        </h2>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-8">
          Get a confidential consultation with our legal and tax experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book-consultation"
            className="bg-white text-indigo-900 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Book your free consultation →
          </a>
          <a
            href="tel:+923001234567"
            className="border border-indigo-300 text-white font-medium py-3 px-8 rounded-xl hover:bg-indigo-800 transition"
          >
            Call us: +92 300 1234567
          </a>
        </div>
        <p className="text-indigo-200 text-sm mt-8">
          Response within 24 hours | 100% confidential
        </p>
      </div>
    </section>
  );
}
