import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="bg-[#212121] text-white py-8 mt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Footer Left: Company Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-3xl font-bold text-[#cdea68] mb-3">YourCompany</h2>
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            A company driven by passion and innovation. We create solutions that impact industries and shape the future.
                        </p>
                    </div>

                    {/* Footer Center: Useful Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li><a href="/about" className="hover:text-[#cdea68] transition duration-300">About Us</a></li>
                            <li><a href="/services" className="hover:text-[#cdea68] transition duration-300">Our Services</a></li>
                            <li><a href="/portfolio" className="hover:text-[#cdea68] transition duration-300">Portfolio</a></li>
                            <li><a href="/contact" className="hover:text-[#cdea68] transition duration-300">Contact</a></li>
                            <li><a href="/privacy" className="hover:text-[#cdea68] transition duration-300">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Footer Right: Social Media Icons */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                        <div className="flex space-x-4 text-2xl text-gray-400">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className="hover:text-[#cdea68] transition duration-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter className="hover:text-[#cdea68] transition duration-300" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="hover:text-[#cdea68] transition duration-300" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className="hover:text-[#cdea68] transition duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom: Copyright */}
                <div className="text-center mt-6 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
