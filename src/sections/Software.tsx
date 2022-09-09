import Image from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { useModal } from "../hooks/handleModal";
import { Button } from "../components/ui";

export const Software: FC = () => {
    const { handleModal } = useModal();

    return (
        <section id="software" className="flex justify-center items-center">
            <div className="container flex flex-col items-center">
                <h1 className="font-display text-display mb-54">
                    Программное обеспечение
                </h1>
                <div className="flex items-center">
                    <div className="flex w-1/2 relative">
                        <Image
                            src="/assets/images/local-ru.webp"
                            className="rounded-xl"
                            height={280}
                            width={500}
                            alt=""
                        />
                        <div className="block bg-primary top-50 left-50 h-[280px] w-[500px] rounded-xl absolute -z-10"></div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <span className="font-display text-2xl mb-6">
                            Wialon Local работает в TAS-IX
                        </span>
                        <Swiper
                            className="max-h-[150px]"
                            direction={"vertical"}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                        >
                            <SwiperSlide>
                                <p className="text-tiny">
                                    С помощью данной программы Вы сможете
                                    контролировать автомобили в режиме реального
                                    времени, отправлять команды (например,
                                    блокировку двигателя), программа может
                                    строить треки и отчеты за интересующий
                                    интервал и самостоятельно отправлять на Ваш
                                    e-mail.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="text-tiny">
                                    Wialon Local вобрал в себя всё самое лучшее
                                    от существующих облачных решений: богатый
                                    функционал, для работы с которым не
                                    требуется клиентское ПО - пользователи могут
                                    контролировать свой транспорт через сайт
                                    оператора с любого компьютера, планшета или
                                    смартфона.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="text-tiny">
                                    Современная система GPS /ГЛОНАСС
                                    мониторинга&nbsp; Широкие технические
                                    возможности&nbsp; Максимально удобный в
                                    использовании интерфейс&nbsp; Отличная
                                    скорость работы&nbsp; Непревзойденная
                                    надежность хранения данных&nbsp; Оптимальная
                                    совместимость с различными видами
                                    оборудования&nbsp; Уникальное мобильное
                                    приложение
                                </p>
                            </SwiperSlide>
                        </Swiper>
                        <Button
                            onClick={() => handleModal(true)}
                            color="primary"
                        >
                            Узнать подробнее
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
