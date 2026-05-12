const services = [
  {
    title: "Tax Filing & Advisory",
    desc: "Individual & corporate tax returns, sales tax, income tax planning.",
    icon: "📊",
  },
  {
    title: "Company Registration",
    desc: "Private limited, sole proprietorship, partnership, and LLC setup.",
    icon: "🏢",
  },
  {
    title: "Legal Compliance",
    desc: "SECP filings, labor laws, data protection, and regulatory compliance.",
    icon: "⚖️",
  },
  {
    title: "Corporate Legal Docs",
    desc: "Contracts, agreements, memorandum, and article drafting.",
    icon: "📑",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">
            What we offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Service‑based solutions for your business
          </h2>
          <p className="text-gray-500 mt-4">
            End‑to‑end legal and tax support tailored to your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 transition hover:shadow-md border border-gray-100 group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
