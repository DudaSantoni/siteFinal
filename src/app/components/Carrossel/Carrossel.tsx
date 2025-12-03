"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { itemsCarousel } from '../../model/data/itemsCarousel';

export default function Carousel() {
    return (
        <section className="w-full mx-auto py-6 px-4 max-w-7xl">
            <Swiper
                className="w-full"
                modules={[Autoplay]}
                slidesPerView={1} 
                spaceBetween={15}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
            >
                {itemsCarousel.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="rounded-[5px] shadow-lg w-full h-56 object-cover"
                            src={item.image}
                            alt={item.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}