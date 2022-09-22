import { FC } from "react";
import Image from "next/image";

import { Button } from "../components/ui";
import { useModal } from "../hooks/handleModal";

export const Equipment: FC = () => {
    const { handleModal } = useModal();

    return (
        <section className="flex justify-center items-center">
            <div className="flex flex-col items-center w-full">
                {/* <Typography type="h1" color="black">
                    Новые продукты
                </Typography> */}
                <div className="flex flex-col w-full">
                    <div className="flex justify-center items-center bg-primary">
                        <div className="container flex items-center py-32">
                            <div className="flex justify-center items-center h-[400px] w-1/2 relative">
                                <Image
                                    src={`/assets/images/slides/3.png`}
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <span className="text-tiny">
                                    МОНИТОРИНГ ТРАНСПОРТА
                                </span>
                                <span className="text-tiny mb-8">
                                    GPS ТРЕКЕР{" "}
                                    <strong>TELTONIKA FMB 920</strong>
                                </span>
                                <span className="mb-12">
                                    Устанавливается на транспортные средства,
                                    имеющие пластиковую приборную панель, без
                                    подключения датчика уровня топлива
                                </span>
                                <a
                                    href="/assets/ffs/1.pdf"
                                    className="bg-black text-primary py-12 px-20 cursor-pointer rounded max-w-fit"
                                    download
                                >
                                    Скачать флаер
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="container flex items-center py-32">
                            <div className="flex flex-col w-1/2">
                                <span className="text-tiny">
                                    МОНИТОРИНГ ТРАНСПОРТА С КОНТРОЛЕМ ТОПЛИВА
                                </span>
                                <span className="mb-8">
                                    Удаленный контроль расхода топлива
                                    возможен&nbsp; после установки GPS трекера
                                    FMB 125 и датчиков&nbsp; уровня топлива на
                                    выбор OMNICOMM LLS 5 или&nbsp; ЭСКОРТ ТД 150
                                </span>
                                <span className="text-tiny mb-8">
                                    GPS ТРЕКЕР{" "}
                                    <strong>TELTONIKA FMB 125</strong>
                                </span>
                                <span className="mb-12">
                                    Устанавливается на любое транспортное
                                    средство, с подключением до 5 датчиков
                                    уровня топлива
                                </span>
                                <a
                                    href="/assets/ffs/1.pdf"
                                    className="bg-primary py-12 px-20 cursor-pointer rounded max-w-fit"
                                    download
                                >
                                    Скачать флаер
                                </a>
                            </div>
                            <div className="flex justify-center items-center h-[400px] w-1/2 relative">
                                <Image
                                    src={`/assets/images/slides/4.png`}
                                    layout="fill"
                                    objectFit="contain"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-primary">
                        <div className="container flex items-center py-32">
                            <div className="flex justify-center items-center h-[400px] w-1/2 relative">
                                <Image
                                    src={`/assets/images/slides/2.png`}
                                    layout="fill"
                                    objectFit="contain"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <span className="text-tiny">
                                    МОНИТОРИНГ ТРАНСПОРТА С КОНТРОЛЕМ ТОПЛИВА
                                </span>
                                <span className="mb-8">
                                    Удаленный контроль расхода топлива
                                    возможен&nbsp; после установки GPS трекера
                                    FMB 125 и датчиков&nbsp; уровня топлива на
                                    выбор OMNICOMM LLS 5 или&nbsp; ЭСКОРТ ТД 150
                                </span>
                                <span className="text-tiny mb-8">
                                    GPS ТРЕКЕР{" "}
                                    <strong>TELTONIKA FMB 125</strong>
                                </span>
                                <span className="mb-12">
                                    Устанавливается на любое транспортное
                                    средство, с подключением до 5 датчиков
                                    уровня топлива
                                </span>
                                <a
                                    href="/assets/ffs/1.pdf"
                                    className="bg-black text-primary py-12 px-20 cursor-pointer rounded max-w-fit"
                                    download
                                >
                                    Скачать флаер
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="container grid grid-cols-3 w-full py-32">
                            <div className="flex flex-col items-center w-full">
                                <span className="mb-12 text-center">
                                    ДАТЧИК УРОВНЯ ТОПЛИВА{" "}
                                    <strong>OMNICOMM LLS 5</strong>
                                </span>
                                <div className="flex justify-center items-center h-[480px] w-1/2 relative">
                                    <Image
                                        src={`/assets/images/slides/11.png`}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between">
                                <Button
                                    onClick={() => handleModal(1)}
                                    color="primary"
                                >
                                    Выбрать оборудивонаие
                                </Button>
                                <span className="text-center">
                                    Это высокоточные датчики уровня топлива,
                                    предназначенные для измерения уровня топлива
                                    в топливном баке транспортного средства.
                                    Датчики подключаются к терминалу системы
                                    мониторинга транспорта и передают на него
                                    значения уровня топлива.
                                </span>
                                <div className="flex justify-center items-center h-[154px] w-[154px] relative">
                                    <Image
                                        src={`/assets/images/slides/40per.png`}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <span className="mb-12  text-center">
                                    ДАТЧИК УРОВНЯ ТОПЛИВА{" "}
                                    <strong>ЭСКОРТ ТД 150</strong>
                                </span>
                                <div className="flex justify-center items-center h-[480px] w-1/2 relative">
                                    <Image
                                        src={`/assets/images/slides/5.png`}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
