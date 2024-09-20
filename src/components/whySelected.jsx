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
                        Nega aynan biz?
                    </h2>
                    <p className="text-[#050a41] text-base opacity-50 mb-10 sm:text-center md:text-lg xl:text-xl max-w-2xl mx-auto dark:text-white dark:opacity-50">
                        {/* Cambridge English Language Center, 2014'ten bu yana gençlere İngilizce öğretiyor ve şu anda 14 şubesi var. */}
                    </p>
                </div>

                {/* Mobile uchun */}
                <div className="md:hidden">
                    <MobileWhySelectedSwiper />
                </div>

                {/* Desktop uchun */}
                <div className="hidden md:flex items-center justify-center gap-3">
                    <div data-aos="fade-right" delay="100" className="flex flex-col gap-3 max-w-[33%] aos-init aos-animate">
                        {/* Card 1 */}
                        <div className="flex flex-col gap-3 min-h-[200px]">
                            <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10">
                                <img
                                    src="/support.svg"
                                    sizes="(max-width: 768px) 150px, 300px"
                                    className="w-16"
                                />
                                <div className="info">
                                    <h3 className="text-xl lg:text-3xl mt-4 font-medium mb-2.5 dark:text-white">
                                        {/* 1- Tecrübeli ve Profesyonel Türk Öğretmenler */}
                                    </h3>
                                    <p className="text-sm lg:text-base opacity-50 dark:text-white">
                                        {/* Bir konuyu iyi anlayamadıysanız, ikinci öğretmenler her türlü sorunuzda size yardımcı olmak için her zaman orada olacaklardır. */}
                                        Tajribali va professional turk tili o'qituvchilari
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-3 min-h-[200px]">
                            <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10">
                                <img
                                    src="/test.svg"
                                    sizes="(max-width: 768px) 150px, 300px"
                                    className="w-16"
                                />
                                <div className="info">
                                    <h3 className="text-xl lg:text-3xl mt-4 font-medium mb-2.5 dark:text-white">
                                        {/* 2- Gerçek Sınavlara Yakın Test Hizmetleri */}
                                    </h3>
                                    <p className="text-sm lg:text-base opacity-50 dark:text-white">
                                        {/* Hem 'MOCK' sınavlarına hem de gerçek IELTS sınavına girebileceğiniz ayrı bir test merkezimiz bulunmaktadır. Doğru okudunuz, gerçek IELTS sınavına Cambridge'de gireceksiniz. */}
                                        Haqiqiy imtihonlarga yaqin sinov xizmatlari
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div data-aos="fade-left" delay="100" className="flex flex-col gap-3 max-w-[33%] aos-init aos-animate">

                        {/* Card 4 */}
                        <div className="flex flex-col gap-3 min-h-[200px]">
                            <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10">
                                <img
                                    src="/event.svg"
                                    sizes="(max-width: 768px) 150px, 300px"
                                    className="w-16"
                                />
                                <div className="info">
                                    <h3 className="text-xl lg:text-3xl font-medium mt-4 mb-2.5 dark:text-white">
                                        {/* 3-Ücretsiz Etkinlikler */}
                                    </h3>
                                    <p className="text-sm lg:text-base opacity-50 dark:text-white">
                                        {/* Tenis, golf, mafya, sinema, ünlülerle tanışma ve unutulmaz geziler; bunların hepsi Cambridge öğrencileri için tamamen ücretsizdir. */}
                                        Bepul tadbirlar
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="flex flex-col gap-3 min-h-[200px]">
                            <div className="rounded-[1.3rem] flex-grow bg-[#f7f7f7] p-6 flex flex-col justify-between items-start dark:bg-activeGray dark:bg-opacity-10">
                                <img
                                    src="/co-working.svg"
                                    sizes="(max-width: 768px) 150px, 300px"
                                    className="w-16"
                                />
                                <div className="info">
                                    <h3 className="text-xl lg:text-3xl font-medium mt-4 mb-2.5 dark:text-white">
                                        {/* 4-Öğrenciye Özel Kariyer Danışmanlığı ve Gelişim Programı Tasarlama */}
                                    </h3>
                                    <p className="text-sm lg:text-base opacity-50 dark:text-white">
                                        {/* Eğitim merkezimizin her şubesinde öğrencilerimize özel ortak çalışma alanları bulunmaktadır. Burada sınıf dışında özgürce İngilizce çalışabilir veya ek bir öğretmenden ders alabilirsiniz. */}
                                        Talabalar uchun maxsus martaba bo'yicha maslahat va rivojlanish dasturini ishlab chiqish
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
