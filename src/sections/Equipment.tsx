import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Typography } from "../components/ui";

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
            <div className="container flex flex-col items-center py-32 px-16">
                <Typography type="h1" color="black">
                    Оборудование
                </Typography>
                <div className="flex">
                    <Swiper
                        className="max-w-[360px] xl:max-w-[1000px]"
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
                                <div className="flex flex-col xl:flex-row items-center h-full w-full px-32 pr-44">
                                    <div className="flex justify-center shrink-0 items-center xl:mr-32">
                                        <Image
                                            src={`/assets/images/slides/${image}`}
                                            height={380}
                                            width={440}
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
                                        <span className="font-display text-xl max-w-[440px] mb-8">
                                            {title}
                                        </span>
                                        <span className="text-tiny mb-36">
                                            {description}
                                        </span>
                                        <Button
                                            color="primary"
                                        >
                                            Скачать флаер
                                        </Button>
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
