import Wrapper from "../layout/wrapper";

function Footer() {
    return (
        <>
            <div className="bg-[#f8f9fa1a] mt-[100px]">
                <footer className="dark:bg-activeGray dark:bg-opacity-10 duration-300 w-full">
                    <div className="footer-top">
                        <Wrapper>
                            <div className="py-6 flex flex-col gap-y-5 sm:flex-row flex-wrap sm:items-start sm:gap-x-5 md:gap-x-14 lg:py-12 w-full">
                                <a aria-current="page" href="#" className="router-link-active router-link-exact-active md:w-full xl:w-fit">
                                    <img src="/logo-white.svg" width="180" alt="Logo of Cambridge Learning Center" />
                                </a>
                                <div className="max-w-sm md:w-xs md:flex-grow">
                                    <h2 className="text-[1.500rem] lg:text-[1.875rem]">Cambridge Learning Center</h2>
                                    <div className="flex flex-wrap gap-y-4">
                                        <a href="#" className="text-[1.125rem] text-[#85888E] flex items-center w-1/2">
                                            Учителя
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae12cf4f=""><g opacity="0.5" clipPath="url(#clip0_766_3224)" data-v-ae12cf4f=""><path d="M12.75 5.25L5.25 12.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path><path d="M6 5.25H12.75V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path></g><defs data-v-ae12cf4f=""><clipPath id="clip0_766_3224" data-v-ae12cf4f=""><rect width="18" height="18" fill="white" data-v-ae12cf4f=""></rect></clipPath></defs></svg>
                                        </a>
                                        <a href="#" className="text-[1.125rem] text-[#85888E] flex items-center w-1/2">
                                            Курсы
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae12cf4f=""><g opacity="0.5" clipPath="url(#clip0_766_3224)" data-v-ae12cf4f=""><path d="M12.75 5.25L5.25 12.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path><path d="M6 5.25H12.75V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path></g><defs data-v-ae12cf4f=""><clipPath id="clip0_766_3224" data-v-ae12cf4f=""><rect width="18" height="18" fill="white" data-v-ae12cf4f=""></rect></clipPath></defs></svg>
                                        </a>
                                        <a href="#" className="text-[1.125rem] text-[#85888E] flex items-center w-1/2">
                                            Филиалы
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae12cf4f=""><g opacity="0.5" clipPath="url(#clip0_766_3224)" data-v-ae12cf4f=""><path d="M12.75 5.25L5.25 12.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path><path d="M6 5.25H12.75V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path></g><defs data-v-ae12cf4f=""><clipPath id="clip0_766_3224" data-v-ae12cf4f=""><rect width="18" height="18" fill="white" data-v-ae12cf4f=""></rect></clipPath></defs></svg>
                                        </a>
                                        <a href="#" className="text-[1.125rem] text-[#85888E] flex items-center w-1/2">
                                            Сертификат
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae12cf4f=""><g opacity="0.5" clipPath="url(#clip0_766_3224)" data-v-ae12cf4f=""><path d="M12.75 5.25L5.25 12.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path><path d="M6 5.25H12.75V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path></g><defs data-v-ae12cf4f=""><clipPath id="clip0_766_3224" data-v-ae12cf4f=""><rect width="18" height="18" fill="white" data-v-ae12cf4f=""></rect></clipPath></defs></svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="sm:w-1/3 sm:max-w-[11rem]">
                                    <h2 className="text-[1.500rem] lg:text-[1.875rem]">Контакты</h2>
                                    <a aria-label="Call to Cambridge LC" href="#" className="flex items-center gap-x-2 [text-[#85888E]">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae12cf4f=""><g opacity="0.5" data-v-ae12cf4f=""><path d="M8.2875 11.2125L6.9 12.6C6.6075 12.8925 6.1425 12.8925 5.8425 12.6075C5.76 12.525 5.6775 12.45 5.595 12.3675C4.8225 11.5875 4.125 10.77 3.5025 9.915C2.8875 9.06 2.3925 8.205 2.0325 7.3575C1.68 6.5025 1.5 5.685 1.5 4.905C1.5 4.395 1.59 3.9075 1.77 3.4575C1.95 3 2.235 2.58 2.6325 2.205C3.1125 1.7325 3.6375 1.5 4.1925 1.5C4.4025 1.5 4.6125 1.545 4.8 1.635C4.995 1.725 5.1675 1.86 5.3025 2.055L7.0425 4.5075C7.1775 4.695 7.275 4.8675 7.3425 5.0325C7.41 5.19 7.4475 5.3475 7.4475 5.49C7.4475 5.67 7.395 5.85 7.29 6.0225C7.1925 6.195 7.05 6.375 6.87 6.555L6.3 7.1475C6.2175 7.23 6.18 7.3275 6.18 7.4475C6.18 7.5075 6.1875 7.56 6.2025 7.62C6.225 7.68 6.2475 7.725 6.2625 7.77C6.3975 8.0175 6.63 8.34 6.96 8.73C7.2975 9.12 7.6575 9.5175 8.0475 9.915C8.1225 9.99 8.205 10.065 8.28 10.14C8.58 10.4325 8.5875 10.9125 8.2875 11.2125Z" fill="white" data-v-ae12cf4f=""></path><path d="M16.4767 13.7478C16.4767 13.9578 16.4392 14.1753 16.3642 14.3853C16.3417 14.4453 16.3192 14.5053 16.2892 14.5653C16.1617 14.8353 15.9967 15.0903 15.7792 15.3303C15.4117 15.7353 15.0067 16.0278 14.5492 16.2153C14.5417 16.2153 14.5342 16.2228 14.5267 16.2228C14.0842 16.4028 13.6042 16.5003 13.0867 16.5003C12.3217 16.5003 11.5042 16.3203 10.6417 15.9528C9.77922 15.5853 8.91672 15.0903 8.06172 14.4678C7.76922 14.2503 7.47672 14.0328 7.19922 13.8003L9.65172 11.3478C9.86172 11.5053 10.0492 11.6253 10.2067 11.7078C10.2442 11.7228 10.2892 11.7453 10.3417 11.7678C10.4017 11.7903 10.4617 11.7978 10.5292 11.7978C10.6567 11.7978 10.7542 11.7528 10.8367 11.6703L11.4067 11.1078C11.5942 10.9203 11.7742 10.7778 11.9467 10.6878C12.1192 10.5828 12.2917 10.5303 12.4792 10.5303C12.6217 10.5303 12.7717 10.5603 12.9367 10.6278C13.1017 10.6953 13.2742 10.7928 13.4617 10.9203L15.9442 12.6828C16.1392 12.8178 16.2742 12.9753 16.3567 13.1628C16.4317 13.3503 16.4767 13.5378 16.4767 13.7478Z" fill="white" data-v-ae12cf4f=""></path></g></svg>
                                        +998 78 777 77 74
                                    </a>
                                </div>
                                <div className="sm:w-1/2 md:w-[12rem] md:max-w-[15rem] md:flex-grow">
                                    <h2 className="text-[1.500rem] lg:text-[1.875rem]">Социальные сети</h2>
                                    <ul className="flex gap-x-4 mb-5">
                                        <li>
                                            <a aria-label="Watch us on YouTube" target="_blank" href="#">
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae12cf4f=""><g opacity="0.5" data-v-ae12cf4f=""><path d="M21.25 5H8.75C5 5 2.5 7.5 2.5 11.25V18.75C2.5 22.5 5 25 8.75 25H21.25C25 25 27.5 22.5 27.5 18.75V11.25C27.5 7.5 25 5 21.25 5ZM17.3625 16.2875L14.275 18.1375C13.025 18.8875 12 18.3125 12 16.85V13.1375C12 11.675 13.025 11.1 14.275 11.85L17.3625 13.7C18.55 14.425 18.55 15.575 17.3625 16.2875Z" fill="white" data-v-ae12cf4f=""></path></g></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="Watch us on Instagram" target="_blank" href="#">
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae12cf4f=""><g opacity="0.5" data-v-ae12cf4f=""><path d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM15 19.85C12.325 19.85 10.15 17.675 10.15 15C10.15 12.325 12.325 10.15 15 10.15C17.675 10.15 19.85 12.325 19.85 15C19.85 17.675 17.675 19.85 15 19.85ZM22.4 8.6C22.3375 8.75 22.25 8.8875 22.1375 9.0125C22.0125 9.125 21.875 9.2125 21.725 9.275C21.575 9.3375 21.4125 9.375 21.25 9.375C20.9125 9.375 20.6 9.25 20.3625 9.0125C20.25 8.8875 20.1625 8.75 20.1 8.6C20.0375 8.45 20 8.2875 20 8.125C20 7.9625 20.0375 7.8 20.1 7.65C20.1625 7.4875 20.25 7.3625 20.3625 7.2375C20.65 6.95 21.0875 6.8125 21.4875 6.9C21.575 6.9125 21.65 6.9375 21.725 6.975C21.8 7 21.875 7.0375 21.95 7.0875C22.0125 7.125 22.075 7.1875 22.1375 7.2375C22.25 7.3625 22.3375 7.4875 22.4 7.65C22.4625 7.8 22.5 7.9625 22.5 8.125C22.5 8.2875 22.4625 8.45 22.4 8.6Z" fill="white" data-v-ae12cf4f=""></path></g></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="Watch us on Telegram" target="_blank" href="#">
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae12cf4f=""><g opacity="0.5" data-v-ae12cf4f=""><path d="M23.2946 19.5877L25.4402 13.151C27.3145 7.52802 28.2516 4.71653 26.7676 3.23244C25.2835 1.74836 22.472 2.68552 16.849 4.55984L10.4123 6.7054C5.87404 8.21817 3.6049 8.97455 2.96007 10.0837C2.34664 11.1389 2.34664 12.4421 2.96007 13.4973C3.6049 14.6065 5.87404 15.3629 10.4123 16.8756C10.9748 17.0631 11.6075 16.9292 12.0287 16.512L18.9107 9.69369C19.2979 9.3101 19.9227 9.31301 20.3063 9.70019C20.6899 10.0874 20.687 10.7122 20.2998 11.0958L13.5289 17.804C13.0647 18.2639 12.9177 18.9678 13.1244 19.5877C14.6371 24.1259 15.3935 26.3951 16.5027 27.0399C17.5579 27.6534 18.8611 27.6534 19.9163 27.0399C21.0254 26.3951 21.7818 24.1259 23.2946 19.5877Z" fill="white" data-v-ae12cf4f=""></path></g></svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" target="_blank">
                                        <button aria-label="Base card" className="flex items-center justify-center px-8 py-4 rounded-2xl duration-200 blue-gradient w-full">
                                            <span className="text-base lg:text-lg text-white">Оплатить онлайн</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </Wrapper>

                    </div>
                    <div className="footer-bottom border-t border-[#3b4155] w-full">
                        <Wrapper>
                            <div className="flex items-center justify-between flex-wrap py-6 gap-4">
                                <p className="text-[text-[#85888E]]">Copyright © 2024 Cambridge LLC. All Rights Reserved</p>
                                <a href="#" className="text-[text-[#85888E]] inline-flex items-center">
                                    Оферта
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae12cf4f=""><g opacity="0.5" clipPath="url(#clip0_766_3224)" data-v-ae12cf4f=""><path d="M12.75 5.25L5.25 12.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path><path d="M6 5.25H12.75V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-v-ae12cf4f=""></path></g><defs data-v-ae12cf4f=""><clipPath id="clip0_766_3224" data-v-ae12cf4f=""><rect width="18" height="18" fill="white" data-v-ae12cf4f=""></rect></clipPath></defs></svg>
                                </a>
                            </div>
                        </Wrapper>
                    </div>
                </footer >
            </div >
        </>
    );
}

export default Footer;
