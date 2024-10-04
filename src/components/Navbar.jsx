import React, { useState } from 'react';

function Navbar() {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(prev => !prev);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <div
                data-scroll
                data-scroll-speed="-.1"
                className="hidden sm:flex items-center justify-between p-5 px-10 z-50"
            >
                {/* Logo */}
                <div>
                    <svg
                        width="72"
                        height="30"
                        viewBox="0 0 72 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* SVG paths here */}
                    </svg>
                </div>

                {/* Navigation Links */}
                <div className="font-['Neue_Montreal'] space-x-4">
                    {['Services', 'Our work', 'About us', 'Insights', 'Contact us'].map(
                        (item, index) => (
                            <a
                                className={`text-lg text-zinc-600 ${index === 4 ? 'ml-56' : ''
                                    }`}
                                href="#"
                                key={index}
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>
            </div>

            {/* Mobile Navbar */}
            <nav className="sm:hidden relative">
                <div className="max-w-screen-xl flex items-center justify-between p-4 mx-auto">
                    {/* Logo */}
                    <a href="#" className="flex items-center space-x-3">
                        <span className="text-2xl font-semibold">JB.com</span>
                    </a>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleNav}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded={nav}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                {/* Collapsible Menu */}
                {nav && (
                    <div className=" border-2  absolute top-14 right-0 w-full z-50 bg-white border-t border-gray-300">
                        <ul className="flex flex-col items-center">
                            {['Home', 'About', 'Services', 'Pricing', 'Contact'].map(
                                (text, idx) => (
                                    <li key={idx} className="w-full">
                                        <a
                                            href="#"
                                            className="block py-2 px-4 text-center text-zinc-800 hover:bg-gray-100"
                                        >
                                            {text}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
