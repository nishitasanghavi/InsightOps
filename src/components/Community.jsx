import React from "react";
import { FaUsers, FaHandshake, FaLightbulb } from "react-icons/fa";

function Community() {
    return (
        <div className="w-full bg-white py-16 px-6 text-black">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Join Our <span className="text-[#E2511A]">Community</span>
                </h2>
                <p className="mt-4 text-lg md:text-xl text-black">
                    Connect, collaborate, and grow with a thriving network of gig workers.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Feature 1 */}
                <div className="flex flex-col items-center bg-[#CCCCCC] rounded-lg p-6 text-center shadow-lg transition-transform hover:scale-105">
                    <FaUsers className="text-[#E2511A] text-5xl mb-4" />
                    <h3 className="text-2xl font-bold">Expand Your Network</h3>
                    <p className="text-black mt-2">
                        Connect with experienced professionals and like-minded gig workers.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center bg-[#CCCCCC] rounded-lg p-6 text-center shadow-lg transition-transform hover:scale-105">
                    <FaHandshake className="text-[#E2511A] text-5xl mb-4" />
                    <h3 className="text-2xl font-bold">Collaborate on Projects</h3>
                    <p className="text-black mt-2">
                        Find and team up with skilled gig workers for exciting opportunities.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center bg-[#CCCCCC] rounded-lg p-6 text-center shadow-lg transition-transform hover:scale-105">
                    <FaLightbulb className="text-[#E2511A] text-5xl mb-4" />
                    <h3 className="text-2xl font-bold">Access Exclusive Resources</h3>
                    <p className="text-black mt-2">
                        Gain insights, training, and mentorship to boost your gig career.
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
                <a
                    href="/community"
                    className="bg-[#E2511A] text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-[#CC4400] transition"
                >
                    Join the Community
                </a>
            </div>
        </div>
    );
}

export default Community;
