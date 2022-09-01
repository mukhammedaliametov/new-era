import { FC, useState } from "react";

export const Welcome: FC = () => {
    const [sliderActive, setSliderActive] = useState(1);

    const handleSlider = (buttonType: "prev" | "next") => {
        setSliderActive(prevState => {
            if (buttonType === "next") {
                if (prevState === 3) {
                    return 1;
                } else {
                    return prevState + 1;
                }
            } else {
                if (prevState === 1) {
                    return 3;
                } else {
                    return prevState - 1;
                }
            }
        });
    };

    return (
        <section className={`flex w-full bg-welcome relative`}>
            <div className="block h-full w-full bg-black/30 absolute" />
            <div className="bg-black flex text-primary flex-col h-3/5 w-3/5 bottom-0 right-0 p-32 absolute">
                <h1 className="font-display text-display w-4/5 mb-32 uppercase">
                    New Era - GPS мониторинг транспорта и контроль расхода
                    топлива
                </h1>
                <div className="flex items-center text-xl mb-24">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 mr-6 cursor-pointer"
                        onClick={() => handleSlider("prev")}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                    </svg>
                    0{sliderActive} / 03
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 ml-6 cursor-pointer"
                        onClick={() => handleSlider("next")}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </div>
                <div className="flex mb-8 h-[120px] max-h-[120px]">
                    <span
                        className={`${
                            sliderActive === 1 ? "block" : "hidden"
                        } w-2/5`}
                    >
                        <p>
                            <strong>
                                Оптимальная логистика. GPS мониторинг
                            </strong>{" "}
                            на основе искусственного интеллекта и Big Data по
                            запатентованной технологии напрямую от разработчиков
                        </p>
                    </span>
                    <span
                        className={`${
                            sliderActive === 2 ? "block" : "hidden"
                        } w-2/5`}
                    >
                        <p>
                            <strong>
                                Спутниковый GPS-мониторинг транспорта.
                            </strong>
                            &nbsp;Полный контроль собственного и наемного
                            транспорта.
                        </p>
                    </span>
                    <span
                        className={`${
                            sliderActive === 3 ? "block" : "hidden"
                        } w-2/5`}
                    >
                        <p>
                            <strong>Контроль наёмного транспорта.</strong>
                            &nbsp;Автоматизация работы мобильных сотрудников.
                            Эффективная работа вашего бизнеса.
                        </p>
                    </span>
                </div>
                <a
                    href="#"
                    className="flex justify-center items-center bg-primary font-bold text-black h-64 w-[400px]"
                >
                    Получить консультацию
                </a>
            </div>
        </section>
    );
};
