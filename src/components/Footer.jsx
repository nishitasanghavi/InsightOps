import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#000000] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About Us Section */}
                <div>
                    <h3 className="text-xl font-bold text-[#E2511A]">
                        Who We Are
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#CCCCCC]">
                        We empower gig workers by connecting them with top-tier projects globally. 
                        Elevate your career and collaborate with innovative minds.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-[#E2511A]">
                        Explore
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {["Home", "Browse Gigs", "My Work", "Dashboard", "Payments", "Support", "Contact Us"].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm flex items-center gap-2 group transition-all duration-300 hover:text-[#E2511A]"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="text-xl font-bold text-[#E2511A]">
                        Policies
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {["Privacy Policy", "Terms of Service", "Refund Policy", "Cookies"].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm flex items-center gap-2 group transition-all duration-300 hover:text-[#E2511A]"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Details */}
                <div>
                    <h3 className="text-xl font-bold text-[#E2511A]">
                        Get in Touch
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-[#CCCCCC]">
                        <li>Email: <a href="mailto:support@gighub.com" className="hover:text-[#E2511A]">support@gighub.com</a></li>
                        <li>Phone: <a href="tel:+911234567890" className="hover:text-[#E2511A]">+91-12345-67890</a></li>
                        <li>Location: Remote, Global</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#CCCCCC] my-8"></div>

            {/* Copyright */}
            <p className="text-center text-sm text-[#CCCCCC]">
                © 2025 GigHub. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
