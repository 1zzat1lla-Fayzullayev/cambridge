/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Wrapper from "../layout/wrapper";

const TeacherCard = ({ imageSrc, name, score, isActive, onClick, activeColor }) => (
    <div
        className={`py-2.5 h-full md:h-auto px-3 rounded-2xl flex items-center cursor-pointer ${isActive
            ? `bg-[${activeColor}] dark:bg-opacity-30`
            : ''
            }`}
        onClick={onClick}
    >
        <img
            loading="lazy"
            src={imageSrc}
            className="rounded-full w-9 h-9 object-cover lg:w-14 lg:h-14"
        />
        <div className="info ml-2.5">
            <p className="text-base text-mainBlue font-medium lg:text-xl dark:text-white">{name}</p>
            <p className="opacity-50 text-sm lg:text-base dark:text-white">{score}</p>
        </div>
    </div>
);



function Teachers() {
    const teachers = [
        {
            name: 'Gozal Fayzullayeva',
            score: 'IELTS 8.0',
            imageSrc: 'https://app.cambridgeonline.uz/storage/site/bf0451f1-6415-4856-aca2-ad92b367dd30_thumb.png',
            videoSrc: 'https://app.cambridgeonline.uz/storage/site/video1.mp4',
            description: 'Мой интерес к преподаванию английского языка возник еще в школьные годы, и я решил посвятить свою жизнь этой сфере. Моя главная цель в работе - раскрыть потенциал студентов и заинтересовать их не только к английскому языку, но и к другими областям.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/e3426d88-7ca6-40b5-846e-aac1bbb2d176_poster.png"
        },
        {
            name: 'Sardor Erkinov',
            score: 'IELTS 8.5',
            imageSrc: 'https://app.cambridgeonline.uz/storage/site/e52fa4ab-25a6-457e-85ee-f06330e647e3_thumb.png',
            videoSrc: 'https://app.cambridgeonline.uz/storage/site/bd4cba71-5b6e-4fea-b927-045a01566ca5.mp4',
            description: 'Mr. Sardor - я выиграл награду "Инструктор IELTS 2023 года". Моя главная цель - помочь как можно большему количеству студентов получить высокие баллы (7.0+). Если вы хотите улучшить свои навыки writing и reading, вы не ошибетесь, выбрав меня.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/f297e4c5-256e-46cb-838e-84932efc98b8_poster.png"
        },
        {
            name: 'Jakhongir Abbasov',
            score: 'IELTS 8.0',
            imageSrc: 'https://app.cambridgeonline.uz/storage/site/13500b16-07b3-46c5-b2c2-4c2927e985a7_thumb.png',
            videoSrc: 'https://app.cambridgeonline.uz/storage/site/f595c8d3-8c01-42cc-b90c.mp4',
            description: 'Будучи ведущим преподавателем с 8-летним опытом работы в престижных академических учреждениях, я успешно обучаю студентов из различных социальных и культурных слоев. Говорят, что я отличный собеседник и искренний человек . Люблю путешествовать и проводить время со своими студентами.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/53b14387-6b45-48ae-8d93-292e9542e645_poster.png"
        },
        {
            name: 'Alijon Rakhmatov',
            score: 'IELTS 8.0',
            imageSrc: 'https://app.cambridgeonline.uz/storage/site/ff755a4e-26c0-4ccb-b383-8b138528af7e_thumb.png',
            videoSrc: 'https://app.cambridgeonline.uz/storage/site/a8fdav-10wf-123aa-ali.mp4',
            description: 'Я целеустремленный человек, который постоянно стремится к самосовершенствованию и старается поддерживать у своих студентов позитивный настрой. Я делюсь со своими студентами опытом, приобретенным за 10 лет за границей. Настроение 24/7 позитивное.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/fd730e2b-2084-480b-b700-46595c00b7d1_poster.png"
        },
        {
            name: 'Abdulboriy Abdulkhamidov',
            score: 'IELTS 8.5',
            imageSrc: 'https://app.cambridgeonline.uz/storage/site/4c578c44-d1f7-487b-a7c6-d29eb2ea2220_thumb.png',
            videoSrc: 'https://app.cambridgeonline.uz/storage/site/1904e61e-10fb-45d8-b30d-0e7248f7dc90.mp4',
            description: 'Я готов сделать все, чтобы мои студенты стали самыми сильными. Я очень интересуюсь настольным теннисом и чтением. Считаю, что достижения моих студентов - это результат моей строгости и профессионализма.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/92c3374b-46f2-4f9b-ba26-407f53209c67_poster.png"
        },
    ];

    const [selectedTeacher, setSelectedTeacher] = useState(teachers[0]);
    const activeColor = "#FF0000";

    return (
        <Wrapper>
            <div className="mt-[150px]">
                <h2 className="text-mainBlue text-4xl font-bold mb-2 sm:text-center xl:text-5xl dark:text-white">
                    Наши учителя
                </h2>
                <p className="text-mainBlue text-base opacity-50 mb-10 sm:text-center md:text-lg xl:text-xl max-w-2xl mx-auto dark:text-white dark:opacity-50">
                    Настоящие герои, вы можете познакомиться с ними ниже
                </p>
                <div className='lg:flex lg:gap-x-5'>
                    <div className="lg:hidden w-full mb-5">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            pagination={{ clickable: true }}
                        >
                            {teachers.map((teacher) => (
                                <SwiperSlide key={teacher.name}>
                                    <TeacherCard
                                        {...teacher}
                                        isActive={teacher === selectedTeacher}
                                        onClick={() => setSelectedTeacher(teacher)}
                                        activeColor={activeColor}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="hidden lg:flex lg:flex-col w-1/4">
                        {teachers.map((teacher) => (
                            <TeacherCard
                                key={teacher.name}
                                {...teacher}
                                isActive={teacher === selectedTeacher}
                                onClick={() => setSelectedTeacher(teacher)}
                                activeColor={activeColor}
                            />
                        ))}
                    </div>
                    <div className="md:flex md:gap-x-5 lg:w-3/4">
                        <div className="custom-video-player relative lg:w-[300px] h-full rounded-3xl overflow-hidden w-full max-w-sm mx-auto md:w-2/5 lg:max-h-full">
                            <video
                                poster={selectedTeacher.vdPoster}
                                className="w-full"
                                controls
                            >
                                <source
                                    src={selectedTeacher.videoSrc}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className="md:w-3/5">
                            <div className="block mt-2.5 mb-10 dark:text-white">
                                {selectedTeacher.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Teachers;
