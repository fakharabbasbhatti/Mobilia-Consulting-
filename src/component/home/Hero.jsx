import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";
import mob1 from "../../assets/Images/mob1.jpg"
import mob2 from "../../assets/Images/mob2.jpg"
import mob4 from "../../assets/Images/mob4.jpg"
import { Link } from "react-router-dom";
export default function Hero() {
  const slides = [
    {
      id: 1,
      img:mob1,
      title: "Achieve 20–40% Savings",
      subtitle: "On Your Indirect Business Expenses",
      description:
        "Mobilia Consulting helps enterprises uncover hidden overspending, recover excess costs, and optimize vendor contracts — all with a zero-risk, performance-based model.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Demo",
    },
    {
      id: 2,
      img: mob2,
      title: "No Risk. No Upfront Cost.",
      subtitle: "Only Pay When You Save",
      description:
        "Our Zero-Fee Model ensures complete financial alignment — Mobilia earns only when real savings are achieved for your business.",
      ctaPrimary: "Discover How",
      ctaSecondary: "Request Consultation",
    },
    {
      id: 3,
      img: mob4,
      title: "Smarter Vendor Management",
      subtitle: "For CFOs, CEOs & Procurement Leaders",
      description:
        "We consolidate, negotiate, and manage your vendor ecosystem — helping you achieve better terms, lower costs, and higher efficiency.",
      ctaPrimary: "View Services",
      ctaSecondary: "See Case Studies",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden text-white" aria-label="Hero Section">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop
        speed={1000}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                {/* Shield Tag */}
                <div className="inline-flex items-center gap-2 bg-[#00BFA6]/20 text-[#00BFA6] px-5 py-2 rounded-full mb-8 text-sm font-semibold uppercase tracking-wider border border-[#00BFA6]/30 backdrop-blur-sm">
                  <FaShieldAlt />
                  <span>Zero Risk Model</span>
                </div>

                {/* Titles */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#00BFA6] mb-6 drop-shadow-md">
                  {slide.subtitle}
                </h2>

                {/* Description */}
                <p className="max-w-3xl text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/about">
                  <button
                    className="group bg-[#00BFA6] hover:bg-[#009C8B] px-5 py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00BFA6]/40"
                    type="button"
                  >
                    {slide.ctaPrimary}
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                 </Link>
                  <button
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-5 py-2 rounded-full font-semibold text-lg transition-all duration-300"
                    type="button"
                  >
                    {slide.ctaSecondary}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition">
          <FaArrowRight className="rotate-180 text-white text-xl" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition">
          <FaArrowRight className="text-white text-xl" />
        </div>
      </Swiper>

     
    </section>
  );
}
