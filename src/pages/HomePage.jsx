// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';

export default function Home() {
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/school/sections/home')
      .then(res => res.json())
      .then(data => setSectionData(data))
      .catch(err => console.error("Failed to load homepage data:", err));
  }, []);

  if (!sectionData) return <div className="text-center mt-10">Loading...</div>;

  return (
    <>
     <HeroSection
  title={sectionData.title}
  description={sectionData.description}
  cta={sectionData.cta}
  heroImage={sectionData.heroImage}
/>

    <Features features={sectionData.features} />
    </> 
  );
}
