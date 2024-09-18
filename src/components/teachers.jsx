/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Wrapper from "../layout/wrapper";

function Teachers() {

    return (
        <Wrapper>
            <div className="mt-[150px]">
                <h2 className="text-mainBlue text-4xl font-bold mb-2 sm:text-center xl:text-5xl dark:text-white">
                    Öğretmenlerimiz
                </h2>
                <p className="text-mainBlue text-base opacity-50 mb-10 sm:text-center md:text-lg xl:text-xl max-w-2xl mx-auto dark:text-white dark:opacity-50">
                    Gerçek kahramanlar, onlarla aşağıda tanışabilirsiniz
                </p>
                <div className='lg:flex lg:gap-x-5 justify-center'>
                    <div className="md:flex md:gap-x-5 lg:w-3/4 justify-center">
                        <div className="custom-video-player relative lg:w-[300px] h-full rounded-3xl overflow-hidden w-full max-w-sm mx-auto md:w-2/5 lg:max-h-full">
                            <img src="https://eduagency.uz/img/getintouch.png" alt="" />
                        </div>
                        <div className="md:w-3/5">
                            <div className="block mt-2.5 mb-10 dark:text-white">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam inventore amet perferendis accusamus vero quam pariatur blanditiis animi consequatur ea adipisci unde quod esse, a ullam molestias impedit ad labore magnam temporibus aspernatur natus sed nobis. Illum, nisi, esse temporibus totam distinctio perferendis consequatur quos omnis aut ducimus iure!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Teachers;
