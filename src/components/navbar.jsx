/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react';
import Wrapper from "../layout/wrapper";
import ThemeToggle from '../ui/themeToggle';
import { LanguageContext } from '../context/LanguageContext';
import { getText } from '../language';

function Navbar({ theme, setTheme }) {
    const [isLangMenuOpen, setLangMenuOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext)


    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
        return () => {
            window.removeEventListener("scroll", changeNavbar);
        };
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
        <div className={`fixed w-screen z-[999] ${navbar ? 'blur-background' : ''}`}>
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
                </div>
            </div>
        </div>
    );

}

export default Navbar;
