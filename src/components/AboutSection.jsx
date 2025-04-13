export default function AboutSection() {
    return (
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <img src="/images/school-kids.jpg" alt="About" className="w-full md:w-1/2 rounded-lg shadow-md" />
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">About Our School</h2>
            <p className="text-gray-700 text-lg">
              At Shahartakali High School, we believe in nurturing the next generation with holistic education, discipline,
              and life values. Our mission is to provide top-notch academic and extracurricular excellence.
            </p>
          </div>
        </div>
      </section>
    );
  }
  