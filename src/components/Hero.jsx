// src/components/Hero.jsx
export default function HeroSection({ title, description, cta, image }) {
  return (
    <section className="bg-white text-center p-8">
      <img src="C:\Users\Shubham\Desktop\Projects\school-management-frontend\public\images\school-hero.jpg" 
            alt="Hero" 
            className="w-full h-96 object-cover rounded-lg shadow-md" />
      <h1 className="text-4xl font-bold text-blue-800 mt-6">{title}</h1>
      <p className="text-lg text-gray-600 my-4">{description}</p>
      <a href={cta.link} className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        {cta.label}
      </a>
    </section>
  );
}
