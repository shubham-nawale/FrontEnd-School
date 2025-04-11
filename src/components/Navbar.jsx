// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-700">
          Shahartakali High School
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          <li><a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</a></li>
        </ul>
      </nav>
    );
  }
  