import { useState, useEffect } from 'react';
import Wrapper from "../layout/wrapper";
import ThemeToggle from '../ui/themeToggle';

function Navbar() {
    const [isLangMenuOpen, setLangMenuOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    }, []);

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
                            src={theme === 'light' ? "/logo.svg" : "/logo-white.svg"}
                            alt="Logo"
                            className='w-36 lg:w-44'
                        />
                        <ul className="lg:flex hidden items-center gap-[20px]">
                            <li><a href="#" className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>Учителя</a></li>
                            <li><a href="#" className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>Курсы</a></li>
                            <li><a href="#" className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>Филиалы</a></li>
                            <li><a href="#" className='text-base text-mainBlue flex cursor-pointer dark:text-white dark:opacity-50'>Сертификат</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <div className="relative">
                            <button
                                aria-label="Language"
                                className="flex items-center w-28 justify-center"
                                onClick={toggleLangMenu}
                            >
                                <img src="/flag-ru.svg" alt="flag icon" />
                                <span className="pl-2 pr-1 text-mainBlue dark:text-white">Rus</span>
                                <img className={`duration-500 ${isLangMenuOpen ? 'rotate-180' : ''}`} src={theme === 'light' ? "/arrow.svg" : "/arrow-white.svg"} alt="arrow icon" />
                            </button>
                            {isLangMenuOpen && (
                                <div className="shadow-2xl bg-white p-2 rounded-2xl w-28 flex flex-col gap-y-1 absolute mt-3 top-full z-[150] dark:bg-[#212431]">
                                    <button aria-label="Language" className="flex items-center px-3 py-1 rounded-lg hover:bg-lightBlue hover:bg-opacity-10 dark:text-white">
                                        <img src="/flag-en.svg" alt="flag icon" />
                                        <span className="opacity-50 pl-2 pr-1 font-normal duration-300 dark:text-white">Eng</span>
                                    </button>
                                    <button aria-label="Language" className="flex items-center px-3 py-1 rounded-lg hover:bg-lightBlue hover:bg-opacity-10 dark:text-white">
                                        <img src="/flag-ru.svg" alt="flag icon" />
                                        <span className="opacity-50 pl-2 pr-1 font-normal duration-300 dark:text-white">Rus</span>
                                    </button>
                                    <button aria-label="Language" className="flex items-center px-3 py-1 rounded-lg hover:bg-lightBlue hover:bg-opacity-10 dark:text-white">
                                        <img src="/flag-uz.svg" alt="flag icon" />
                                        <span className="pl-2 pr-1 font-normal duration-300 dark:text-white">Uzb</span>
                                    </button>
                                </div>
                            )}
                        </div>
                        {/* <button className='nav-button lg:flex items-center justify-center px-8 rounded-2xl duration-200 orange-gradient py-3 text-white mr-5 hidden xl:block'>
                            <span className='text-base lg:text-lg text-white'>Войти</span>
                        </button> */}
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
                    <a href="#" className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:text-white dark:bg-[#f8f9fa1a] dark:bg-opacity-10">Учителя</a>
                    <a href="#" className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:text-white dark:bg-[#f8f9fa1a] dark:bg-opacity-10">Курсы</a>
                    <a href="#" className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:text-white dark:bg-[#f8f9fa1a] dark:bg-opacity-10">Филиалы</a>
                    <a href="#" className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:text-white dark:bg-[#f8f9fa1a] dark:bg-opacity-10">Сертификат</a>
                    <a href="#" target="_blank">
                        <button aria-label="Base card" className="flex items-center justify-center px-8 py-4 rounded-2xl duration-200 blue-gradient w-full">
                            <span className="text-base lg:text-lg text-white">Оплатить онлайн</span>
                        </button>
                    </a>
                </div>
                {/* <button aria-label="Base card" className="flex items-center justify-center px-8 py-4 rounded-2xl duration-200 orange-gradient sm:mx-auto md:mx-0 w-full">
                    <span className="text-base lg:text-lg text-white">Войти</span>
                </button> */}
            </div>
        </>
    );
}

export default Navbar;
