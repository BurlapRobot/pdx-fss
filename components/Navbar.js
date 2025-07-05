import React from "react";

const Navbar = () => (
  <nav className="bg-black text-yellow-300 px-4 py-2 flex items-center justify-between w-full">
    <div className="flex items-center space-x-2">
      <span className="font-bold text-sm">SAFE</span>
      <span className="text-xs">Families for Safe Streets Portland</span>
    </div>
    <ul className="flex space-x-6 text-xs">
      <li><a href="#" className="hover:underline">Safe Streets Now</a></li>
      <li><a href="#" className="hover:underline">Advocacy</a></li>
      <li><a href="#" className="hover:underline">Get Involved</a></li>
      <li><a href="#" className="hover:underline">Services & Support</a></li>
      <li><a href="#" className="hover:underline">News</a></li>
    </ul>
    <div className="text-white cursor-pointer">🔍</div>
  </nav>
);

export default Navbar; 