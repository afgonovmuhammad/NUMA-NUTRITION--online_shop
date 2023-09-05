import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Certificat1 from '../img/Certificat1.png'
import Certificat2 from '../img/Certificat2.png'
import Certificat3 from '../img/Certificat3.png'
import Certificat4 from '../img/Certificat4.png'
import Certificat5 from '../img/Certificat5.png'
import Certificat6 from '../img/Certificat6.png'
import Certificat7 from '../img/Certificat7.png'
import Certificat8 from '../img/Certificat8.png'
import Certificat9 from '../img/Certificat9.png'
import Certificat10 from '../img/Certificat10.png'
import Certificat11 from '../img/Certificat11.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Sliderr() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                breakpoints={{
                    376: {
                        slidesPerView: 1,
                        spaceBetween: 500,
                    },

                    640: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },

                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-[100%]' src={Certificat1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[100%]' src={Certificat2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[100%]' src={Certificat3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[100%]' src={Certificat4} alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[100%]' src={Certificat5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[100%]' src={Certificat6} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[100%]' src={Certificat7} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[100%]' src={Certificat8} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                <img className='w-[100%]' src={Certificat9} alt="" />

                </SwiperSlide>
            </Swiper>
        </>
    );
}

{/* Muhammad-Ali */}