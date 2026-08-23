"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-xl shadow-2xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={true} // ✅ arrows
        pagination={{ clickable: true }} // ✅ dots
        modules={[Autoplay, Navigation, Pagination]}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/cover.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="relative z-10 text-center text-white px-6 max-w-4xl">
              <h1 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
                <span className="text-pink-500 text-7xl">Upgrade Your Skills</span> <br /> Today 🚀
              </h1>
              <p className="text-xl mb-10 text-gray-200">
                Learn from industry experts and grow faster.
              </p>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform text-lg font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/cover2.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="relative z-10 text-center text-white px-6 max-w-4xl">
              <h1 className="text-4xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                <span className="text-pink-500 text-7xl">Turn Ideas into</span> <br /> Stunning AI Art
              </h1>
              <p className="text-xl mb-10 text-gray-200">
                Generate high-quality images from simple text prompts.
              </p>
              <Link href="#">
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform text-lg font-semibold">
                  Generate Now
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
