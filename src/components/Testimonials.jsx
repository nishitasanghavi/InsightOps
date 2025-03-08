import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
    {
        id: 1,
        comment: "This platform helped me find gigs effortlessly and build a strong portfolio. Highly recommended for gig workers!",
        name: "Manav Shah",
        role: "Freelance Graphic Designer",
        img: "https://media.istockphoto.com/id/1355110818/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=T39jUOOjC8H-Op0cfd-uiNXk1a2XBn1sXkQbKIWwY7E=",
    },
    {
        id: 2,
        comment: "Managing my finances and contracts has never been easier. The resources here are a game changer!",
        name: "Shravani Nikam",
        role: "Digital Marketer",
        img: "https://i.pinimg.com/564x/0c/73/21/0c7321b3cc9264193deae3c186951a71.jpg",
    },
    {
        id: 3,
        comment: "A fantastic platform that connects gig workers with the right opportunities while ensuring fair pay.",
        name: "Mridula Raul",
        role: "Web Developer",
        img: "https://i.pinimg.com/736x/70/ba/47/70ba47ad37c3c96aa5b975b641cadf9f.jpg",
    },
];

function Testimonials() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div className="relative h-fit w-full overflow-hidden bg-white py-12">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
                <h1 className="text-3xl md:text-4xl font-bold text-center my-8">
                    What <span className="text-[#E2511A]">Gig Workers Say</span>
                </h1>
                <div className="w-full md:w-[80%] px-2 md:px-3">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex flex-col justify-center items-center p-4 h-full"
                            >
                                <div className="flex flex-col justify-around bg-white shadow-lg rounded-[10%] p-4 text-center transform transition duration-300 hover:scale-105 h-[350px] md:h-[400px] border-2 border-[#CCCCCC]">
                                    <p className="italic text-black text-base md:text-lg lg:text-xl mb-3">
                                        "{testimonial.comment}"
                                    </p>
                                    <div className="flex flex-col md:flex-row w-full justify-center gap-4 items-center">
                                        <img
                                            src={testimonial.img}
                                            alt={testimonial.name}
                                            className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-3 md:mb-0 border-2 border-[#E2511A]"
                                        />
                                        <div className="flex flex-col items-center md:items-start">
                                            <h2 className="font-bold text-md md:text-lg lg:text-xl text-[#E2511A] text-center md:text-start">
                                                {testimonial.name}
                                            </h2>
                                            <p className="text-xs md:text-sm text-black">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
