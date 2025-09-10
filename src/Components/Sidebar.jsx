import React from 'react';
import { FaHome, FaStickyNote, FaCog } from 'react-icons/fa';

const Sidebar = () => (
  <div className="fixed top-0 left-0 h-full w-20 bg-zinc-900 text-white flex flex-col py-8 px-4 shadow-lg z-20">
    <h2 className="text-2xl font-bold mb-8">ToDo App</h2>
    <nav className="flex flex-col gap-6">
      <a href="#" className="flex items-center gap-3 hover:text-sky-400 transition">
        <FaHome /> Home
      </a>
      <a href="#" className="flex items-center gap-3 hover:text-sky-400 transition">
        <FaStickyNote /> Notes
      </a>
      <a href="#" className="flex items-center gap-3 hover:text-sky-400 transition">
        <FaCog /> Settings
      </a>
    </nav>
  </div>
);

export default Sidebar;