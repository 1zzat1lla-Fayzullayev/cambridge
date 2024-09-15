/* eslint-disable no-unused-vars */
import React from "react";

function SecondSwiper() {
    return (
        <section
            className="pt-14 md:pt-20 wrapper-padding aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="700"
        >
            <div className="flex gap-x-5 px-4">
                <div className="swiper swiper-initialized swiper-horizontal w-full h-[510px] xs:h-[600px] swiper-backface-hidden">
                    <div
                        className="swiper-wrapper"
                        style={{
                            transitionDuration: "0ms",
                            transform: "translate3d(-1400px, 0px, 0px)",
                            transitionDelay: "0ms",
                        }}
                    >
                        <div className="swiper-slide max-w-sm" style={{ marginRight: "20px" }}>
                            <div className="custom-video-player relative w-[300px] h-full rounded-3xl overflow-hidden">
                                <video className="w-full">
                                    <source src="https://app.cambridgeonline.uz/storage/site/tugad.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button
                                    aria-label="Play/Pause"
                                    className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center cursor-pointer bg-black backdrop-blur-[3px] bg-opacity-15 rounded-full duration-300 text-white"
                                >
                                    <img
                                        width="25"
                                        src="/pause.svg"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        width="25"


                                        src="/play.svg"
                                        className="pl-1"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm" style={{ marginRight: "20px" }}>
                            <div className="flex flex-col gap-y-5 h-full">
                                <img

                                    src="https://app.cambridgeonline.uz/storage/site/613eec6f-3407-4c14-b82d-145af6c88d58_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                                <img
                                    src="https://app.cambridgeonline.uz/storage/site/feeb9b95-993b-4481-ac9d-05819f14b6e4_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm swiper-slide-prev" style={{ marginRight: "20px" }}>
                            <div className="custom-video-player relative w-[300px] h-full rounded-3xl overflow-hidden">
                                <video className="w-full">
                                    <source src="https://app.cambridgeonline.uz/storage/site/80965c00-cb33-4aca-a513-f3f40d78a24d_main.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button
                                    aria-label="Play/Pause"
                                    className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center cursor-pointer bg-black backdrop-blur-[3px] bg-opacity-15 rounded-full duration-300 text-white"
                                >
                                    <img
                                        width="25"
                                        src="/pause.svg"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        width="25"


                                        src="/play.svg"
                                        className="pl-1"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm swiper-slide-active" style={{ marginRight: "20px" }}>
                            <div className="flex flex-col gap-y-5 h-full">
                                <img
                                    src="https://app.cambridgeonline.uz/storage/site/3463e33c-7f95-4c17-9a39-44720ffd02d0_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                                <img

                                    src="https://app.cambridgeonline.uz/storage/site/f49b857c-688b-4a6a-a843-b3d5b57f8596_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm swiper-slide-next" style={{ marginRight: "20px" }}>
                            <div className="custom-video-player relative w-[300px] h-full rounded-3xl overflow-hidden">
                                <video className="w-full">
                                    <source src="https://app.cambridgeonline.uz/storage/site/550480dc-469c-4c3a-b4f3-099f8015e274_main.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button
                                    aria-label="Play/Pause"
                                    className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center cursor-pointer bg-black backdrop-blur-[3px] bg-opacity-15 rounded-full duration-300 text-white"
                                >
                                    <img
                                        width="25"
                                        src="/pause.svg"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        width="25"


                                        src="/play.svg"
                                        className="pl-1"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="swiper swiper-initialized swiper-horizontal w-full h-[510px] xs:h-[600px] swiper-backface-hidden">
                    <div
                        className="swiper-wrapper"
                        style={{
                            transitionDuration: "0ms",
                            transform: "translate3d(-1400px, 0px, 0px)",
                            transitionDelay: "0ms",
                        }}
                    >
                        <div className="swiper-slide max-w-sm" style={{ marginRight: "20px" }}>
                            <div className="custom-video-player relative w-[300px] h-full rounded-3xl overflow-hidden">
                                <video className="w-full">
                                    <source src="https://app.cambridgeonline.uz/storage/site/tugad.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button
                                    aria-label="Play/Pause"
                                    className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center cursor-pointer bg-black backdrop-blur-[3px] bg-opacity-15 rounded-full duration-300 text-white"
                                >
                                    <img
                                        width="25"
                                        src="/pause.svg"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        width="25"


                                        src="/play.svg"
                                        className="pl-1"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm" style={{ marginRight: "20px" }}>
                            <div className="flex flex-col gap-y-5 h-full">
                                <img

                                    src="https://app.cambridgeonline.uz/storage/site/613eec6f-3407-4c14-b82d-145af6c88d58_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                                <img
                                    src="https://app.cambridgeonline.uz/storage/site/feeb9b95-993b-4481-ac9d-05819f14b6e4_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm swiper-slide-prev" style={{ marginRight: "20px" }}>
                            <div className="custom-video-player relative w-[300px] h-full rounded-3xl overflow-hidden">
                                <video className="w-full">
                                    <source src="https://app.cambridgeonline.uz/storage/site/80965c00-cb33-4aca-a513-f3f40d78a24d_main.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button
                                    aria-label="Play/Pause"
                                    className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center cursor-pointer bg-black backdrop-blur-[3px] bg-opacity-15 rounded-full duration-300 text-white"
                                >
                                    <img
                                        width="25"
                                        src="/pause.svg"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        width="25"


                                        src="/play.svg"
                                        className="pl-1"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm swiper-slide-active" style={{ marginRight: "20px" }}>
                            <div className="flex flex-col gap-y-5 h-full">
                                <img
                                    src="https://app.cambridgeonline.uz/storage/site/3463e33c-7f95-4c17-9a39-44720ffd02d0_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                                <img
                                    src="https://app.cambridgeonline.uz/storage/site/f49b857c-688b-4a6a-a843-b3d5b57f8596_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm swiper-slide-next" style={{ marginRight: "20px" }}>
                            <div className="custom-video-player relative w-[300px] h-full rounded-3xl overflow-hidden">
                                <video className="w-full">
                                    <source src="https://app.cambridgeonline.uz/storage/site/550480dc-469c-4c3a-b4f3-099f8015e274_main.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button
                                    aria-label="Play/Pause"
                                    className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center cursor-pointer bg-black backdrop-blur-[3px] bg-opacity-15 rounded-full duration-300 text-white"
                                >
                                    <img
                                        width="25"
                                        src="/pause.svg"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        width="25"
                                        src="/play.svg"
                                        className="pl-1"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="swiper swiper-initialized swiper-horizontal w-full h-[510px] xs:h-[600px] swiper-backface-hidden">
                    <div
                        className="swiper-wrapper"
                        style={{
                            transitionDuration: "0ms",
                            transform: "translate3d(-1400px, 0px, 0px)",
                            transitionDelay: "0ms",
                        }}
                    >
                        <div className="swiper-slide max-w-sm" style={{ marginRight: "20px" }}>
                            <div className="custom-video-player relative w-[300px] h-full rounded-3xl overflow-hidden">
                                <video className="w-full">
                                    <source src="https://app.cambridgeonline.uz/storage/site/tugad.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button
                                    aria-label="Play/Pause"
                                    className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center cursor-pointer bg-black backdrop-blur-[3px] bg-opacity-15 rounded-full duration-300 text-white"
                                >
                                    <img
                                        width="25"
                                        src="/pause.svg"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        width="25"
                                        src="/play.svg"
                                        className="pl-1"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm" style={{ marginRight: "20px" }}>
                            <div className="flex flex-col gap-y-5 h-full">
                                <img

                                    src="https://app.cambridgeonline.uz/storage/site/613eec6f-3407-4c14-b82d-145af6c88d58_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                                <img
                                    src="https://app.cambridgeonline.uz/storage/site/feeb9b95-993b-4481-ac9d-05819f14b6e4_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm swiper-slide-prev" style={{ marginRight: "20px" }}>
                            <div className="custom-video-player relative w-[300px] h-full rounded-3xl overflow-hidden">
                                <video className="w-full">
                                    <source src="https://app.cambridgeonline.uz/storage/site/80965c00-cb33-4aca-a513-f3f40d78a24d_main.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button
                                    aria-label="Play/Pause"
                                    className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center cursor-pointer bg-black backdrop-blur-[3px] bg-opacity-15 rounded-full duration-300 text-white"
                                >
                                    <img
                                        width="25"
                                        src="/pause.svg"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        width="25"


                                        src="/play.svg"
                                        className="pl-1"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm swiper-slide-active" style={{ marginRight: "20px" }}>
                            <div className="flex flex-col gap-y-5 h-full">
                                <img
                                    src="https://app.cambridgeonline.uz/storage/site/3463e33c-7f95-4c17-9a39-44720ffd02d0_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                                <img

                                    src="https://app.cambridgeonline.uz/storage/site/f49b857c-688b-4a6a-a843-b3d5b57f8596_main.jpg"
                                    className="h-[48%] flex-grow object-cover rounded-3xl w-full"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide max-w-sm swiper-slide-next" style={{ marginRight: "20px" }}>
                            <div className="custom-video-player relative w-[300px] h-full rounded-3xl overflow-hidden">
                                <video className="w-full">
                                    <source src="https://app.cambridgeonline.uz/storage/site/550480dc-469c-4c3a-b4f3-099f8015e274_main.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button
                                    aria-label="Play/Pause"
                                    className="controls absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center cursor-pointer bg-black backdrop-blur-[3px] bg-opacity-15 rounded-full duration-300 text-white"
                                >
                                    <img
                                        width="25"
                                        src="/pause.svg"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        width="25"


                                        src="/play.svg"
                                        className="pl-1"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}

export default SecondSwiper;
