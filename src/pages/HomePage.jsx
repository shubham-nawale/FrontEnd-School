import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';

function HomePage() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/school/sections/home')
      .then(response => {
        setHomeData(response.data);
      })
      .catch(error => {
        console.error("Error loading home section", error);
      });
  }, []);

  if (!homeData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div>
      <Navbar />
      <section className="bg-blue-50 min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
          {homeData.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
          {homeData.description}
        </p>
        {homeData.cta && (
          <a href={homeData.cta.link} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            {homeData.cta.label}
          </a>
        )}
      </section>
    </div>
  );
}

export default HomePage;
