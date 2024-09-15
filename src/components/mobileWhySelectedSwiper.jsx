import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; 

const slides = [
    {
        img: "/public/teachers.png",
        alt: "Опытные преподаватели",
        title: "Опытные преподаватели",
        description: "Каждый преподаватель прошел специальные курсы повышения квалификации. Наши уважаемые преподаватели имеют результаты IELTS до 9.0.",
    },
    {
        img: "/public/support.svg",
        alt: "Бесплатный второй учитель",
        title: "Бесплатный второй учитель",
        description: "Если вы не смогли хорошо усвоить тему, вторые учителя всегда будут рядом и помогут вам с любыми вопросами.",
    },
    {
        img: "/public/test.svg",
        alt: "Тестовый Центр",
        title: "Тестовый Центр",
        description: "У нас есть отдельный тестовый центр, где вы можете сдать как 'MOCK' экзамены, так и настоящий экзамен IELTS. Вы правильно прочитали, вы будете сдавать настоящий экзамен IELTS в Cambridge.",
    },
    {
        img: "/public/event.svg",
        alt: "Бесплатные мероприятия",
        title: "Бесплатные мероприятия",
        description: "Теннис, гольф, мафия, кино, общение со знаменитостями и незабываемые поездки – все это совершенно бесплатно для студентов Cambridge.",
    },
    {
        img: "/public/co-working.svg",
        alt: "Co-working зоны",
        title: "Co-working зоны",
        description: "В каждом филиале нашего учебного центра есть специальные co-working зоны для наших учеников. Здесь вы можете свободно заниматься английским вне уроков или проходить занятия с дополнительным преподавателем.",
    },
];

const MobileWhySelectedSwiper = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
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
