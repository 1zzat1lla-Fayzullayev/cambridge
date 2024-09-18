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
            description: 'İngilizce öğretmeye olan ilgim okul yıllarımda ortaya çıktı ve hayatımı bu alana adamaya karar verdim. Çalışmalarımdaki temel amacım öğrencilerin potansiyelini ortaya çıkarmak ve onların sadece İngilizceye değil diğer alanlara da ilgi duymasını sağlamaktır.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/e3426d88-7ca6-40b5-846e-aac1bbb2d176_poster.png"
        },
        {
            name: 'Sardor Erkinov',
            score: 'IELTS 8.5',
            imageSrc: 'https://app.cambridgeonline.uz/storage/site/e52fa4ab-25a6-457e-85ee-f06330e647e3_thumb.png',
            videoSrc: 'https://app.cambridgeonline.uz/storage/site/bd4cba71-5b6e-4fea-b927-045a01566ca5.mp4',
            description: 'Bay Sardor - 2023 Yılının IELTS Eğitmeni ödülünü kazandım. Ana hedefim mümkün olduğu kadar çok öğrencinin yüksek puanlar (7.0+) almasına yardımcı olmaktır. Yazma ve okuma becerilerinizi geliştirmek istiyorsanız benimle yanlış yapmış olmazsınız.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/f297e4c5-256e-46cb-838e-84932efc98b8_poster.png"
        },
        {
            name: 'Jakhongir Abbasov',
            score: 'IELTS 8.0',
            imageSrc: 'https://app.cambridgeonline.uz/storage/site/13500b16-07b3-46c5-b2c2-4c2927e985a7_thumb.png',
            videoSrc: 'https://app.cambridgeonline.uz/storage/site/f595c8d3-8c01-42cc-b90c.mp4',
            description: 'Prestijli akademik kurumlarda 8 yıllık deneyime sahip lider bir öğretmen olarak, farklı sosyal ve kültürel kökenden gelen öğrencilere başarılı bir şekilde ders verdim. Mükemmel bir konuşmacı ve samimi bir insan olduğumu söylüyorlar. Seyahat etmeyi ve öğrencilerimle vakit geçirmeyi seviyorum.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/53b14387-6b45-48ae-8d93-292e9542e645_poster.png"
        },
        {
            name: 'Alijon Rakhmatov',
            score: 'IELTS 8.0',
            imageSrc: 'https://app.cambridgeonline.uz/storage/site/ff755a4e-26c0-4ccb-b383-8b138528af7e_thumb.png',
            videoSrc: 'https://app.cambridgeonline.uz/storage/site/a8fdav-10wf-123aa-ali.mp4',
            description: 'Sürekli kendini geliştirmek için çabalayan, öğrencilerimde olumlu bir tutum sergilemeye çalışan, hedef odaklı bir insanım. 10 yılı aşkın süredir yurt dışında edindiğim tecrübeleri öğrencilerimle paylaşıyorum. Olumlu ruh hali 7/24.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/fd730e2b-2084-480b-b700-46595c00b7d1_poster.png"
        },
        {
            name: 'Abdulboriy Abdulkhamidov',
            score: 'IELTS 8.5',
            imageSrc: 'https://app.cambridgeonline.uz/storage/site/4c578c44-d1f7-487b-a7c6-d29eb2ea2220_thumb.png',
            videoSrc: 'https://app.cambridgeonline.uz/storage/site/1904e61e-10fb-45d8-b30d-0e7248f7dc90.mp4',
            description: 'Öğrencilerimin en güçlü olması için her şeyi yapmaya hazırım. Masa tenisine ve okumaya çok ilgim var. Öğrencilerimin başarılarının titizliğimin ve profesyonelliğimin sonucu olduğuna inanıyorum.',
            vdPoster: "https://app.cambridgeonline.uz/storage/site/92c3374b-46f2-4f9b-ba26-407f53209c67_poster.png"
        },
    ];

    const [selectedTeacher, setSelectedTeacher] = useState(teachers[0]);
    const activeColor = "#FF0000";

    return (
        <Wrapper>
            <div className="mt-[150px]">
                <h2 className="text-mainBlue text-4xl font-bold mb-2 sm:text-center xl:text-5xl dark:text-white">
                    Öğretmenlerimiz
                </h2>
                <p className="text-mainBlue text-base opacity-50 mb-10 sm:text-center md:text-lg xl:text-xl max-w-2xl mx-auto dark:text-white dark:opacity-50">
                    Gerçek kahramanlar, onlarla aşağıda tanışabilirsiniz
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
