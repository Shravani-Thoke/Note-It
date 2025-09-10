import React, { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import AddNote from './AddNote'
import { FaNoteSticky } from "react-icons/fa6";

const Navbar = ({ onSearch }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [query, setQuery] = useState('');

    function handleSearch(e) {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return (
        <div>
            <div className="fixed top-0 left-0 z-50 px-6 py-3 flex sm:flex-row items-center sm:justify-between justify-between 
                            w-full bg-zinc-800 backdrop-blur-sm text-white shadow-lg">
                
                {/* Left: Logo */}
                <div className="flex items-center gap-2 text-2xl font-extrabold tracking-wide">
                    <FaNoteSticky className="text-3xl text-sky-400" />
                    <span>NOTE IT.</span>
                </div>

                {/* Center: Search */}
                <div className="flex-1 max-w-xl mx-6">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-800 ring-sky-500
                                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>
                </div>

                {/* Right: Add Note */}
                <button
                    onClick={() => { setIsModalOpen(true) }}
                    className="flex items-center justify-center p-2 h-10 w-10 
                               bg-sky-500 rounded-full text-white cursor-pointer 
                               hover:bg-sky-600 transition">
                    <FaPlus size=".8em" />
                </button>
            </div>

            <AddNote isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Navbar
