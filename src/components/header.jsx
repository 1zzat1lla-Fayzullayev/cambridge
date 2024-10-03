/* eslint-disable no-unused-vars */
import Wrapper from "../layout/wrapper";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";
function Header() {
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext)

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="pt-[100px]">

            <Wrapper>
                <section className="flex flex-col lg:flex-row justify-between items-center py-12 overflow-x-hidden">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="500"
                        className="md:w-[50%]"
                    >
                        <h1 className="text-[#050a41] dark:text-white font-bold text-5xl lg:text-6xl xl:text-7xl text-start">
                            {getText("headerHeading")}
                        </h1>
                        <p className="py-5 text-base lg:text-lg text-[#050a41] dark:text-white dark:opacity-50 text-start">
                            {getText("headerParagraph")}
                        </p>
                        <a
                            href="#contact"
                            className="block w-full max-w-max"
                        >
                            <button
                                className="header-button"
                            >
                                <span className="text-base lg:text-lg text-white">
                                    {getText("headerButton")}
                                </span>
                            </button>
                        </a>
                    </div>
                    <div className="md:w-[50%] lg:w-[53%] mt-7 flex justify-center items-center relative" data-aos="fade-left"
                        data-aos-duration="500">
                        <div

                            className="mask-container"
                        >
                            <img
                                src="/imgHeader.jpg"
                                alt=""
                                className="masked-image"
                            />
                        </div>
                    </div>

                </section>
            </Wrapper>
        </div>

    );
}
export default Header;