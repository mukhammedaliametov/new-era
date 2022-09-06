import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        image: "1.png",
        title: "ДАТЧИК УРОВНЯ ТОПЛИВА OMNICOMM LLS 5",
        description:
            "Это высокоточные датчики уровня топлива, предназначенные для измерения уровня топлива в топливном баке транспортного средства. Датчики подключаются к терминалу системы мониторинга транспорта и передают на него значения уровня топлива.",
    },
    {
        image: "2.webp",
        title: "GPS ТРЕКЕР TELTONIKA FMB 125",
        description:
            "Мониторинг транспорта с контролем топлива. \nУстанавливается на любое транспортное средство, с подключением до 5 датчиков уровня топлива",
    },
    {
        image: "3.png",
        title: "GPS ТРЕКЕР TELTONIKA FMB 920",
        description:
            "Устанавливается на транспортные средства, имеющие пластиковую приборную панель, без подключения датчика уровня топлива",
    },
    {
        image: "4.jpg",
        title: "ПЕРВЫЙ В МИРЕ БЕСПРОВОДНОЙ ДАТЧИК УРОВНЯ ТОПЛИВА ЭСКОРТ TD-BLE",
        description:
            "Отсуствие вандализма связанного с проводами\n Литий-тионилхлоридная батарея со сроком работы более 7 лет\n Корпус датчика оснащен дополнительным защитным кожухом из ударапрочного полиамида, стойкого к механическим повреждениям",
    },
    {
        image: "5.jpg",
        title: "ДАТЧИК УРОВНЯ ТОПЛИВА ЭСКОРТ ТД 150",
        description:
            "Это высокоточные датчики уровня топлива, предназначенные для измерения уровня топлива в топливном баке транспортного средства. Датчики подключаются к терминалу системы мониторинга транспорта и передают на него значения уровня топлива.",
    },
];

export const Equipment: FC = () => {
    return (
        <section className="flex justify-center items-center">
            <div className="container flex flex-col items-center">
                <h1 className="font-display text-display mb-54">
                    Оборудование
                </h1>
                <div className="flex">
                    <Swiper
                        className="max-w-[1000px]"
                        spaceBetween={50}
                        loop
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={swiper => console.log(swiper)}
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        navigation
                    >
                        {slides.map(({ image, title, description }) => (
                            <SwiperSlide key={image}>
                                <div className="flex items-center h-full w-full px-32 pr-44">
                                    <div className="flex justify-center shrink-0 items-center mr-32">
                                        <Image
                                            src={`/assets/images/slides/${image}`}
                                            height={380}
                                            width={440}
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="font-display text-xl max-w-[440px] mb-8">
                                            {title}
                                        </span>
                                        <span className="text-tiny mb-36">
                                            {description}
                                        </span>
                                        <a
                                            href="#"
                                            className="bg-primary font-bold text-sm p-10 px-44 rounded uppercase"
                                            download
                                        >
                                            Скачать флаер
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
