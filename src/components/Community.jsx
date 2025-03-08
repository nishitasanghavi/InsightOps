import React from "react";
import { FaUsers, FaHandshake, FaLightbulb } from "react-icons/fa";

function Community() {
    return (
        <div className="w-full bg-black py-16 px-6 text-white">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Join Our <span className="text-[#FFC107]">Community</span>
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    Connect, collaborate, and grow with like-minded professionals.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Feature 1 */}
                <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 text-center shadow-lg transition-transform hover:scale-105">
                    <FaUsers className="text-[#FFC107] text-5xl mb-4" />
                    <h3 className="text-2xl font-bold">Network & Connect</h3>
                    <p className="text-gray-300 mt-2">
                        Engage with freelancers, entrepreneurs, and experts from various fields.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 text-center shadow-lg transition-transform hover:scale-105">
                    <FaHandshake className="text-[#FFC107] text-5xl mb-4" />
                    <h3 className="text-2xl font-bold">Collaboration Hub</h3>
                    <p className="text-gray-300 mt-2">
                        Work together on innovative projects and share resources seamlessly.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 text-center shadow-lg transition-transform hover:scale-105">
                    <FaLightbulb className="text-[#FFC107] text-5xl mb-4" />
                    <h3 className="text-2xl font-bold">Learn & Grow</h3>
                    <p className="text-gray-300 mt-2">
                        Access exclusive webinars, mentorship, and valuable insights.
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
                <a
                    href="/community"
                    className="bg-[#FFC107] text-black font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
                >
                    Join the Community
                </a>
            </div>
        </div>
    );
}

export default Community;
