export default function FeatureSection() {
    return (
      <section id="features" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800">{f.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  