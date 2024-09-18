/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Wrapper from "../layout/wrapper";
import { faFacebookF, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ theme }) {
    return (
        <div className="bg-[#f8f9fa1a] mt-[100px]">
            <footer className="dark:bg-activeGray dark:bg-opacity-10 duration-300 w-full">
                <div className="footer-top">
                    <Wrapper>
                        <div className="py-6 flex flex-col sm:flex-row justify-between items-start gap-6 md:gap-12 lg:py-12">
                            <div className="max-w-sm">
                                <img
                                    src={theme === 'light' ? "/turkchasoati1.png" : "/turkchasoati2.png"}
                                    alt="Logo"
                                    className='w-36 lg:w-48'
                                />
                                <p className="text-[#85888E] mt-2">Kurslarımız hakkında daha fazla bilgi alın.</p>
                            </div>
                            <div className="sm:max-w-[12rem]">
                                <h2 className="text-[1.500rem] lg:text-[1.875rem]">İletişim</h2>
                                <a href="tel:+998334691101" className="flex items-center gap-x-2 text-[#85888E] mt-2">
                                    <FontAwesomeIcon icon={faTelegram} />
                                    +998(33) 469 11 01
                                </a>
                            </div>
                            <div className="flex gap-x-4">
                                <a aria-label="Watch us on Instagram" target="_blank" href="https://www.instagram.com/eduagencyuz/">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-[#85888E]" />
                                </a>
                                <a aria-label="Watch us on Facebook" target="_blank" href="https://facebook.com/eduagency.uz">
                                    <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-[#85888E]" />
                                </a>
                                <a aria-label="Watch us on Telegram" target="_blank" href="https://t.me/eduagency_uz">
                                    <FontAwesomeIcon icon={faTelegram} size="2x" className="text-[#85888E]" />
                                </a>
                            </div>
                        </div>
                    </Wrapper>
                </div>
                <div className="footer-bottom border-t border-[#3b4155] w-full">
                    <Wrapper>
                        <div className="flex items-center justify-between py-6">
                            <p className="text-[#85888E]">Copyright © 2024 Turkchasoati</p>
                            <a href="#" className="text-[#85888E]">
                                Teklif
                            </a>
                        </div>
                    </Wrapper>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
