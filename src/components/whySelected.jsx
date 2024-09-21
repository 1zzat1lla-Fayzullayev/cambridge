/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { getText } from "../language";
import Wrapper from "../layout/wrapper";
import MobileWhySelectedSwiper from "./mobileWhySelectedSwiper";
import { LanguageContext } from "../context/LanguageContext";

function WhySelected() {
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext);

    const Card = ({ imageSrc, title, description }) => {
        const [skewX, setSkewX] = useState(0);
        const [skewY, setSkewY] = useState(0);

        const handleMouseMove = (e) => {
            const { clientX, clientY, currentTarget } = e;
            const { left, top, width, height } = currentTarget.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const deltaX = (clientX - centerX) / (width / 2);
            const deltaY = (clientY - centerY) / (height / 2);

            setSkewX(deltaY * 10); 
            setSkewY(-deltaX * 10);
        };

        const handleMouseLeave = () => {
            setSkewX(0);
            setSkewY(0);
        };

        return (
            <div
                className="card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `skew(${skewY}deg, ${skewX}deg)`,
                    transition: 'transform 0.2s ease',
                }}
            >
                <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] min-h-[200px] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10">
                    <img src={imageSrc} sizes="(max-width: 768px) 150px, 300px" className="w-16" />
                    <div className="info">
                        {/* <h3 className="text-xl lg:text-3xl mt-4 font-medium mb-2.5 dark:text-white">
                            {title}
                        </h3> */}
                        <p className="text-sm lg:text-base opacity-50 dark:text-white">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Wrapper>
            <section className="why wrapper-padding">
                <div className="pt-10 text-center">
                    <h2 className="text-[#050a41] text-4xl font-bold mb-2 sm:text-center xl:text-5xl dark:text-white">
                        {getText("whySelectedHeading")}
                    </h2>
                    <p className="text-[#050a41] text-base opacity-50 mb-10 sm:text-center md:text-lg xl:text-xl max-w-2xl mx-auto dark:text-white dark:opacity-50">
                        {/* Optional text can be added here */}
                    </p>
                </div>

                {/* Mobile swiper */}
                <div className="md:hidden">
                    <MobileWhySelectedSwiper />
                </div>

                {/* Desktop cards */}
                <div className="hidden md:flex items-center justify-center gap-3">
                    <div className="flex flex-col gap-3 max-w-[33%]">
                        <Card
                            imageSrc="/support.svg"
                            title={getText("whySelectedCard1")}
                            description={getText("whySelectedCard1")}
                        />
                        <Card
                            imageSrc="/test.svg"
                            title={getText("whySelectedCard2")}
                            description={getText("whySelectedCard2")}
                        />
                    </div>
                    <div className="flex flex-col gap-3 max-w-[33%]">
                        <Card
                            imageSrc="/event.svg"
                            title={getText("whySelectedCard3")}
                            description={getText("whySelectedCard3")}
                        />
                        <Card
                            imageSrc="/co-working.svg"
                            title={getText("whySelectedCard4")}
                            description={getText("whySelectedCard4")}
                        />
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

export default WhySelected;
