import Image from "next/image";
import { FC } from "react";

const possibilities = [
    {
        icon: "ps1",
        title: "КОНТРОЛЬ ТЕКУЩЕГО МЕСТОПОЛОЖЕНИЯ ТРАНСПОРТА",
        description: "string",
    },
    {
        icon: "ps2",
        title: "КОНТРОЛЬ РАСХОДА ТОПЛИВА С ИСПОЛЬЗОВАНИЕМ ДАТЧИКА УРОВНЯ ТОПЛИВА",
        description: "string",
    },
    {
        icon: "ps3",
        title: "КОНТРОЛЬ ПРОБЕГА ТРАНСПОРТНОГО СРЕДСТВА",
        description: "string",
    },
    {
        icon: "ps4",
        title: "КОНТРОЛЬ НАД ПОСЕЩЕНИЕМ ОБОЗНАЧЕННЫХ ГЕОЗОН",
        description: "string",
    },
    {
        icon: "ps5",
        title: "КОНТРОЛЬ НАД СОБЛЮДЕНИЕМ СКОРОСТНОГО РЕЖИМА",
        description: "string",
    },
    {
        icon: "ps6",
        title: "КОНТРОЛЬ НАД ДЕЯТЕЛЬНОСТЬЮ ВОДИТЕЛЕЙ",
        description: "string",
    },
    {
        icon: "ps7",
        title: "КОНТРОЛЬ РАБОТЫ ДОПОЛНИТЕЛЬНОГО ОБОРУДОВАНИЯ",
        description: "string",
    },
    {
        icon: "ps8",
        title: "СОСТАВЛЕНИЕ АНАЛИТИЧЕСКИХ ОТЧЕТОВ ПО ВСЕМ ПАРАМЕТРАМ РАБОТЫ АВТОТРАНСПОРТА",
        description: "string",
    },
];

export const Possibilities: FC = () => {
    return (
        <section className="flex justify-center items-center bg-primary">
            <div className="container">
                <h1 className="font-display text-display mb-32">Возможности</h1>
                <div className="grid grid-cols-4 gap-32">
                    {possibilities.map((possibility, index) => {
                        return (
                            <div
                                className="flex flex-col items-center bg-black/20 min-h-[280px] py-24 px-16 rounded-xl"
                                key={index}
                            >
                                <Image
                                    src={`/assets/icons/${possibility.icon}.svg`}
                                    className="flex justify-center items-center mb-24 text-red-500"
                                    height={44}
                                    width={44}
                                    alt=""
                                />
                                <span className="text-tiny mb-14">
                                    {possibility.title}
                                </span>
                                <p className="text-sm">
                                    {possibility.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
