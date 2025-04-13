// src/components/Features.jsx

export default function Features({ features }) {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">Why Choose Us</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.featureTitle}</h3>
                <p className="text-gray-600">{feature.featureDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  