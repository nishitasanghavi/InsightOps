import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#222831] via-[#161D26] to-[#222831] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About Us Section */}
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFB400] to-[#FFA500] bg-clip-text text-transparent">
                        Who We Are
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
                        We empower freelancers by connecting them with top-tier projects globally. 
                        Elevate your career and collaborate with innovative minds.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFB400] to-[#FFA500] bg-clip-text text-transparent">
                        Explore
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {["Home", "Browse Jobs", "My Work", "Dashboard", "Payments", "Schedule", "Support", "Reach Out"].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm flex items-center gap-2 group transition-all duration-300 hover:text-[#FFB400]"
                                >
                                    <span className="inline-block w-1 h-1 bg-[#FFB400] rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFB400] to-[#FFA500] bg-clip-text text-transparent">
                        Policies
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {["Privacy Policy", "Terms of Use", "Refund Policy", "Cookies"].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm flex items-center gap-2 group transition-all duration-300 hover:text-[#FFB400]"
                                >
                                    <span className="inline-block w-1 h-1 bg-[#FFB400] rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Details */}
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFB400] to-[#FFA500] bg-clip-text text-transparent">
                        Get in Touch
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <li>Email: <a href="mailto:hello@yourbrand.com" className="hover:text-[#FFB400] transition-all duration-300">hello@yourbrand.com</a></li>
                        <li>Phone: <a href="tel:+911234567890" className="hover:text-[#FFB400] transition-all duration-300">+91-12345-67890</a></li>
                        <li>Location: Tech Hub, Downtown, India</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
                {/* Social Media Links */}
                <div className="flex justify-center w-full sm:w-auto space-x-6">
                    {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((platform) => (
                        <a
                            key={platform}
                            href="#"
                            className="text-2xl p-3 rounded-full bg-gradient-to-br from-[#FFB400] to-[#FFA500] text-white hover:scale-110 transition-transform duration-300 shadow-md shadow-[#FFB400]/30"
                            aria-label={platform}
                        >
                            <i className={`fab fa-${platform.toLowerCase()}`}></i>
                        </a>
                    ))}
                </div>

                {/* Newsletter */}
                <form className="flex w-full sm:w-auto items-center">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-2/5 flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:ring-2 focus:ring-[#FFB400] outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#FFB400] to-[#FFA500] text-white px-6 py-2 rounded-r-lg hover:scale-105 transition-transform duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* App Download */}
            <div className="text-center mt-12">
                <p className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
                    Stay productive on the go! Download our app today.
                </p>
                <div className="flex justify-center space-x-6 mt-6">
                    <button className="bg-gradient-to-r from-[#FFB400] to-[#FFA500] text-white px-6 py-2 rounded-lg hover:scale-105 shadow-lg shadow-[#FFB400]/30 transition-transform duration-300">
                        Google Play
                    </button>
                    <button className="bg-gradient-to-r from-[#FFB400] to-[#FFA500] text-white px-6 py-2 rounded-lg hover:scale-105 shadow-lg shadow-[#FFB400]/30 transition-transform duration-300">
                        App Store
                    </button>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-center text-sm mt-8 text-gray-400">
                © 2025 YourBrand. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
