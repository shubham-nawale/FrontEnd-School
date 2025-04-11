// src/components/Hero.jsx
export default function Hero() {
    return (
      <section className="bg-blue-50 min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
          Welcome to Shahartakali High School
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Empowering students with knowledge, values, and vision.
        </p>
        <a href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </a>
      </section>
    );
  }
  