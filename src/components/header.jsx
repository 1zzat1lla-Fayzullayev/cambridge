import Wrapper from "../layout/wrapper";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Wrapper>
            <section className="flex flex-col lg:flex-row justify-between items-center py-12 overflow-x-hidden">
                <div
                    data-aos="fade-right"
                    data-aos-duration="500"
                    className="md:w-[50%]"
                >
                    <h1 className="text-[#050a41] dark:text-white font-bold text-5xl lg:text-6xl xl:text-7xl text-start">
                        Мы не просто обучаем английскому, мы меняем жизни людей!
                    </h1>
                    <p className="py-5 text-base lg:text-lg text-[#050a41] dark:text-white dark:opacity-50 text-start">
                        За 9 лет Cambridge способствовал изменению жизни более 50 000 молодых людей
                    </p>
                    <a
                        href="#"
                        target="_blank"
                        className="block w-full max-w-max "
                    >
                        <button
                            className="flex header-btn items-center justify-center px-8 py-4 rounded-2xl duration-200 blue-gradient w-full max-w-max"
                        >
                            <span className="text-base lg:text-lg text-white">
                                Запишитесь на первый урок
                            </span>
                            <img
                                src="/stars.svg"

                                className="ml-2"
                            />
                        </button>
                    </a>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="500"
                    className="md:w-[50%] lg:w-[53%] mt-7 flex justify-center items-center"
                >
                    <img
                        src="/books.png"
                        alt="Books illustrating English learning"
                        className="max-w-full h-auto"
                    />
                </div>
            </section>
        </Wrapper>
    );
}

export default Header;
