import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay} from 'swiper/modules';

import img1 from "../../assets/hero_carousel/ia.webp"
import img2 from "../../assets/hero_carousel/devops.webp"
import img3 from "../../assets/hero_carousel/crypto.webp"

export const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
        <div className='md:w-1/2 w-full text-center'>
            <h1 className='md:text-5xl text-3xl front-bold md:leading-tight'>Codex Le Hub des Passionnés de Tech</h1>
            <p className='py-4'>Bienvenue sur Codex – Votre source incontournable pour tout ce qui touche au code, à la technologie et à l'innovation numérique. Que vous soyez développeur aguerri ou débutant curieux, Codex vous propose des tutoriels, des analyses et des conseils pratiques pour maîtriser les langages de programmation et les tendances du web. Rejoignez-nous pour explorer ensemble l’univers du développement !</p>
        </div>
        <div className='md:w-1/2 w-full mx-auto'>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={img1}  className='w-full lg:h-[420px] sm:h-96 h-80'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={img2}  className='w-full lg:h-[420px] sm:h-96 h-80'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3}  className='w-full lg:h-[420px] sm:h-96 h-80'/>
            </SwiperSlide>

        </Swiper>
        </div>
    </div>
  )
}

export default Hero