import React, { useState } from "react";
import { Menu, X } from "lucide-react";


function Navbar () {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src="https://cdn-icons-png.flaticon.com/512/9759/9759591.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-bold">Sensible Algo</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><a href="#" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#" className="hover:text-yellow-300 ">About</a></li>
          <li><a href="#" className="hover:text-yellow-300 ">Services</a></li>
          <li><a href="#" className="hover:text-yellow-300 ">Contact</a></li>
          
        </ul>
        <div>
            <button className="bg-blue-600 text-white rounded-lg px-2 py-2" onClick={"https://google.com"}>Get Started</button>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-indigo-400 text-center text-lg px-4 pb-4 space-y-2">
          <li><a href="#" className="block hover:text-yellow-300">Home</a></li>
          <li><a href="#" className="block hover:text-yellow-300">About</a></li>
          <li><a href="#" className="block hover:text-yellow-300">Services</a></li>
          <li><a href="#" className="block hover:text-yellow-300">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar
