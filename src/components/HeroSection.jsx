// src/components/HeroSection.jsx

export default function HeroSection({ title, description, cta, heroImage }) {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white px-4"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
          {description}
        </p>
        <a
          href={cta?.link || "#"}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300"
        >
          {cta?.label || "Learn More"}
        </a>
      </div>
    </section>
  );
}
