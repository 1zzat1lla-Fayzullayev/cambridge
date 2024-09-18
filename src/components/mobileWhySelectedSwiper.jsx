import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const slides = [
    {
        img: "/teachers.png",
        title: "Deneyimli öğretmenler",
        description: "Her öğretmen özel ileri eğitim kurslarını tamamlamıştır. Saygıdeğer öğretmenlerimizin 9.0'a kadar IELTS puanı vardır.",
    },
    {
        img: "/support.svg",
        title: "Ücretsiz ikinci öğretmen",
        description: "Bir konuyu iyi anlayamadıysanız, ikinci öğretmenler her türlü sorunuzda size yardımcı olmak için her zaman orada olacaklardır.",
    },
    {
        img: "/test.svg",
        title: "Test Merkezi",
        description: "Hem 'MOCK' sınavlarına hem de gerçek IELTS sınavına girebileceğiniz ayrı bir test merkezimiz bulunmaktadır. Doğru okudunuz, gerçek IELTS sınavına Cambridge'de gireceksiniz.",
    },
    {
        img: "/event.svg",
        title: "Ücretsiz etkinlikler",
        description: "Tenis, golf, mafya, sinema, ünlülerle tanışma ve unutulmaz geziler; bunların hepsi Cambridge öğrencileri için tamamen ücretsizdir.",
    },
    {
        img: "/co-working.svg",
        title: "Ortak çalışma bölgeleri",
        description: "Eğitim merkezimizin her şubesinde öğrencilerimize özel ortak çalışma alanları bulunmaktadır. Burada sınıf dışında özgürce İngilizce çalışabilir veya ek bir öğretmenden ders alabilirsiniz.",
    },
];

const MobileWhySelectedSwiper = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            // pagination={{ clickable: true }}
            // navigation={true}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="flex flex-col items-center bg-[#f7f7f7] p-6 rounded-[1.3rem] dark:bg-activeGray dark:bg-opacity-10">
                    <img src={slide.img} alt={slide.alt} className="w-16 mb-4" />
                    <div className="info text-center">
                        <h3 className="text-xl lg:text-3xl font-medium mb-2.5 dark:text-white">
                            {slide.title}
                        </h3>
                        <p className="text-sm lg:text-base opacity-50 dark:text-white">
                            {slide.description}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MobileWhySelectedSwiper;
