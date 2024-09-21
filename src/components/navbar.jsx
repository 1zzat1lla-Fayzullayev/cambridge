/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react';
import Wrapper from "../layout/wrapper";
import ThemeToggle from '../ui/themeToggle';
import { LanguageContext } from '../context/LanguageContext';
import { getText } from '../language';

function Navbar({ theme, setTheme }) {
    const [isLangMenuOpen, setLangMenuOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext)

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);


    const toggleLangMenu = () => {
        setLangMenuOpen(prev => !prev);
    };

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };


    return (
        <>
            <Wrapper>
                <div className="flex justify-between items-center py-3 md:py-4 relative z-[999]">
                    <div className="flex items-center gap-[30px]">
                        <img
                            src={theme === 'light' ? "/turkchasoati1.png" : "/turkchasoati2.png"}
                            alt="Logo"
                            className='w-36 lg:w-44'
                        />
                        <ul className="lg:flex hidden items-center gap-[20px]">
                            <li><a href="#" className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>{getText("navbarAbout")}</a></li>
                            <li><a href="#" className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>{getText("navbarGroups")}</a></li>
                            <li><a href="#" className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>{getText("navbarTeachers")}</a></li>
                            <li><a href="#" className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>{getText("navbarContact")}</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <div className="relative">
                            {/* <button
                                aria-label="Language"
                                className="flex items-center w-28 justify-center"
                                onClick={toggleLangMenu}
                            >
                                <img src="/turkey-flag.png" alt="flag icon" style={{ width: "28px", borderRadius: "5px" }} />
                                <span className="pl-2 pr-1 text-mainBlue dark:text-white">Turk</span>
                                <img className={`duration-500 ${isLangMenuOpen ? 'rotate-180' : ''}`} src={theme === 'light' ? "/arrow.svg" : "/arrow-white.svg"} alt="arrow icon" />
                            </button> */}
                            {/* {isLangMenuOpen && (
                                <div className="shadow-2xl bg-white p-2 rounded-2xl w-28 flex flex-col gap-y-1 absolute mt-3 top-full z-[150] dark:bg-[#212431]" value={selectedLanguage} onChange={(e) => changeLanguage(e.target.value)}>
                                    <button value="en" onClick={() => handleLanguageChange('en')} aria-label="Language" className="flex items-center px-3 py-1 rounded-lg hover:bg-lightBlue hover:bg-opacity-10 dark:text-white">
                                        <img src="/flag-en.svg" alt="flag icon" />
                                        <span className="opacity-50 pl-2 pr-1 font-normal duration-300 dark:text-white">Eng</span>
                                    </button>
                                    <button value="tr" onClick={() => handleLanguageChange('tr')} aria-label="Language" className="flex items-center px-3 py-1 rounded-lg hover:bg-lightBlue hover:bg-opacity-10 dark:text-white">
                                        <img src="/turkey-flag.png" alt="flag icon" style={{ width: "28px", borderRadius: "5px" }} />
                                        <span className="opacity-50 pl-2 pr-1 font-normal duration-300 dark:text-white">Turk</span>
                                    </button>
                                    <button value="uz" onClick={() => handleLanguageChange('uz')} aria-label="Language" className="flex items-center px-3 py-1 rounded-lg hover:bg-lightBlue hover:bg-opacity-10 dark:text-white">
                                        <img src="/flag-uz.svg" alt="flag icon" />
                                        <span className="pl-2 pr-1 font-normal duration-300 dark:text-white">Uzb</span>
                                    </button>
                                </div>
                            )} */}
                            <div className="flex items-center gap-[5px] outline-none border-none cursor-pointer">
                                <img
                                    src={selectedFlag}
                                    style={{ width: "20px", objectFit: "cover" }}
                                />
                                <select
                                    className='bg-transparent border-none outline-none cursor-pointer'
                                    onChange={(e) => changeLanguage(e.target.value)}
                                    value={selectedLanguage}
                                >
                                    <option className='dark:bg-[#121624] border-none' value="uz">Oʻzbek</option>
                                    <option className='dark:bg-[#121624] border-none' value="en">English</option>
                                    <option className='dark:bg-[#121624] border-none' value="tr">Türkçe</option>
                                </select>
                            </div>
                        </div>
                        <ThemeToggle onChange={handleThemeChange} />
                        <div
                            className={`burger ${isMenuOpen ? 'open' : ''} block lg:hidden`}
                            onClick={toggleMenu}
                        >
                            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41] dark:bg-white"></div>
                            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41] dark:bg-white"></div>
                            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41] dark:bg-white"></div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <div className={`menu duration-300 h-full xl:w-[calc(100%-170px)] lg:hidden max-w-xl xl:max-w-none xl:h-auto bg-white fixed inset-0 z-[99] pt-20 lg:pt-24 px-5 pb-6 flex flex-col justify-between xl:hidden dark:bg-[#121624] ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className="xl:flex xl:gap-x-5">
                    <a href="#" className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:text-white dark:bg-[#f8f9fa1a] dark:bg-opacity-10">{getText("navbarAbout")}</a>
                    <a href="#" className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:text-white dark:bg-[#f8f9fa1a] dark:bg-opacity-10">{getText("navbarGroups")}</a>
                    <a href="#" className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:text-white dark:bg-[#f8f9fa1a] dark:bg-opacity-10">{getText("navbarTeachers")}</a>
                    <a href="#" className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:text-white dark:bg-[#f8f9fa1a] dark:bg-opacity-10">{getText("navbarContact")}</a>
                    {/* <a href="#" target="_blank">
                        <button aria-label="Base card" className="flex items-center justify-center px-8 py-4 rounded-2xl duration-200 blue-gradient w-full">
                            <span className="text-base lg:text-lg text-white">Çevrimiçi ödeme yapın</span>
                        </button>
                    </a> */}
                </div>
                {/* <button aria-label="Base card" className="flex items-center justify-center px-8 py-4 rounded-2xl duration-200 orange-gradient sm:mx-auto md:mx-0 w-full">
                    <span className="text-base lg:text-lg text-white">Войти</span>
                </button> */}
            </div>
        </>
    );
}

export default Navbar;
