import { FC, useState } from "react";
import { useModal } from "../hooks/handleModal";

export const Welcome: FC = () => {
    const { handleModal } = useModal();
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
            <div className="block h-full w-full bg-black/50 absolute" />
            <div className="flex justify-center items-center bg-black/70 h-full w-full top-0 left-0 absolute">
                <div className="container flex flex-col justify-center text-primary p-24">
                    <h1 className="font-display text-3xl w-[720px] mt-72  mb-32 leading-9 uppercase">
                        NEW ERA - СИСТЕМЫ GPS МОНИТОРИНГА ТРАНСПОРТА ЭТО ГОТОВЫЕ
                        РЕШЕНИЯ, ПРЕДНАЗНАЧЕННЫЕ ДЛЯ ОПТИМИЗАЦИИ ЗАТРАТ И
                        ПОВЫШЕНИЯ ЭФФЕКТИВНОСТИ ИСПОЛЬЗОВАНИЯ ВАШЕГО АВТОПАРКА
                    </h1>
                    <span
                        onClick={() => handleModal(true)}
                        className="flex justify-center items-center bg-primary font-bold text-black h-64 w-[400px] cursor-pointer"
                    >
                        Получить консультацию
                    </span>
                </div>
            </div>
        </section>
    );
};
