import React, { useState } from "react"; // <-- il faut ajouter useState ici

export default function Navbars() {
  const [isOpen, setIsOpen] = useState(false); // État du menu

  const handleClick = () => {
    setIsOpen(!isOpen)
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex item-center justify-between py-4 px-6">
        {/* logo */}
        <h1 className="text-2xl font-bold text-blue-800 hover:text-blue-800"> Mon Portfolio</h1>

        {/* menu */}
        <ul className="hidden md:flex space-x-3 text-blue-800 text-xl">
          <li><a href="#hero" className="hover:text-black transition">Portfolio</a></li>
          <li><a href="#hero" className="hover:text-black transition">Contact</a></li>
          <li><a href="#hero" className="hover:text-black transition">A bout</a></li>
        </ul>

        <button onClick={handleClick} className="md:hidden text-2xl text-black">{isOpen ? "✖" : "☰"} </button>

       
        
      </div>

       {isOpen && (
        <ul className="md:hidden bg-gray-200 text-xl shadow-md flex flex-col items-center justify-center space-y-4 py-6">
          <li onClick={handleClick} className="hover:text-blue-700 transition">Portfolio</li>
          <li onClick={handleClick} className="hover:text-blue-700 transition">Contact</li>
          <li onClick={handleClick} className="hover:text-blue-700 transition">A bout</li>
        </ul>
       )}

    </nav>
  );
}
