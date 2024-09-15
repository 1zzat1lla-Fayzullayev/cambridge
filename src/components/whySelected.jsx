/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import Wrapper from "../layout/wrapper";
import MobileWhySelectedSwiper from "./mobileWhySelectedSwiper";

function WhySelected() {
    return (
        <Wrapper>
            <section className="why wrapper-padding">
                <div className="pt-10 text-center">
                    <h2 className="text-[#050a41] text-4xl font-bold mb-2 sm:text-center xl:text-5xl dark:text-white">
                        Почему люди выбирают нас?
                    </h2>
                    <p className="text-[#050a41] text-base opacity-50 mb-10 sm:text-center md:text-lg xl:text-xl max-w-2xl mx-auto dark:text-white dark:opacity-50">
                        Центр изучения английского языка Cambridge занимается обучением молодежи английскому языку с 2014 года и на данный момент имеет 14 филиалов
                    </p>
                </div>

                {/* Mobile uchun */}
                <div className="md:hidden">
                    <MobileWhySelectedSwiper />
                </div>

                {/* Desktop uchun */}
                <div className="hidden md:flex md:items-stretch gap-3">
                    <div data-aos="fade-right" delay="100" className="flex flex-col gap-3 max-w-[33%] aos-init aos-animate">
                        {/* Card 1 */}
                        <div className="flex flex-col gap-3 ">
                            <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10">
                                <img
                                    src="/public/support.svg"
                                    sizes="(max-width: 768px) 150px, 300px"
                                    className="w-16"
                                />
                                <div className="info">
                                    <h3 className="text-xl lg:text-3xl font-medium mt-10 mb-2.5 dark:text-white">
                                        Бесплатный второй учитель
                                    </h3>
                                    <p className="text-sm lg:text-base opacity-50 dark:text-white">
                                        Если вы не смогли хорошо усвоить тему, вторые учителя всегда будут рядом и помогут вам с любыми вопросами.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-3 ">
                            <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10">
                                <img
                                    src="/public/test.svg"
                                    sizes="(max-width: 768px) 150px, 300px"
                                    className="w-16"
                                />
                                <div className="info">
                                    <h3 className="text-xl lg:text-3xl font-medium mt-10 mb-2.5 dark:text-white">
                                        Тестовый Центр
                                    </h3>
                                    <p className="text-sm lg:text-base opacity-50 dark:text-white">
                                        У нас есть отдельный тестовый центр, где вы можете сдать как 'MOCK' экзамены, так и настоящий экзамен IELTS. Вы правильно прочитали, вы будете сдавать настоящий экзамен IELTS в Cambridge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Card 3 */}
                    <div className="flex flex-col gap-3 ">
                        <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10  aos-init aos-animate">
                            <img
                                src="/public/teachers.png"
                                sizes="(max-width: 768px) 150px, 300px"
                                className="md:w-[90%] md:mx-auto w-16"
                            />
                            <div className="info">
                                <h3 className="text-xl lg:text-3xl font-medium mt-4 mb-2.5 dark:text-white">
                                    Опытные преподаватели
                                </h3>
                                <p className="text-sm lg:text-base opacity-50 dark:text-white">
                                    Каждый преподаватель прошел специальные курсы повышения квалификации. Наши уважаемые преподаватели имеют результаты IELTS до 9.0.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" delay="100" className="flex flex-col gap-3 max-w-[33%] aos-init aos-animate">

                        {/* Card 4 */}
                        <div className="flex flex-col gap-3 ">
                            <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10">
                                <img
                                    src="/public/event.svg"
                                    sizes="(max-width: 768px) 150px, 300px"
                                    className="w-16"
                                />
                                <div className="info">
                                    <h3 className="text-xl lg:text-3xl font-medium mt-4 mb-2.5 dark:text-white">
                                        Бесплатные мероприятия
                                    </h3>
                                    <p className="text-sm lg:text-base opacity-50 dark:text-white">
                                        Теннис, гольф, мафия, кино, общение со знаменитостями и незабываемые поездки – все это совершенно бесплатно для студентов Cambridge.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="flex flex-col gap-3 ">
                            <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10">
                                <img
                                    src="/public/co-working.svg"
                                    sizes="(max-width: 768px) 150px, 300px"
                                    className="w-16"
                                />
                                <div className="info">
                                    <h3 className="text-xl lg:text-3xl font-medium mt-4 mb-2.5 dark:text-white">
                                        Co-working зоны
                                    </h3>
                                    <p className="text-sm lg:text-base opacity-50 dark:text-white">
                                        В каждом филиале нашего учебного центра есть специальные co-working зоны для наших учеников. Здесь вы можете свободно заниматься английским вне уроков или проходить занятия с дополнительным преподавателем.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Wrapper>
    );
}

export default WhySelected;
