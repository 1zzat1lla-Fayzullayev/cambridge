/* eslint-disable react/no-unescaped-entities */
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
                        Turk tilini o'rganing
                    </h1>
                    <p className="py-5 text-base lg:text-lg text-[#050a41] dark:text-white dark:opacity-50 text-start">
                        Turk dunyosining eshiklarini oching...
                    </p>
                    <a
                        href="#"
                        target="_blank"
                        className="block w-full max-w-max"
                    >
                        <button
                            className="flex header-btn items-center justify-center px-8 py-4 rounded-2xl duration-200 blue-gradient w-full max-w-max"
                        >
                            <span className="text-base lg:text-lg text-white">
                                Birinchi darsingizga yoziling
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
                    className="md:w-[50%] lg:w-[53%] mt-7 flex justify-center items-center relative"
                >
                    <div className="mask-container">
                        <img
                            src="/imgHeader.jpg"
                            alt=""
                            className="masked-image"

                        />
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

export default Header;
