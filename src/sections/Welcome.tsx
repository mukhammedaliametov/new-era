import { FC, useState } from "react";
import { Button } from "../components/ui";
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
                <div className="container flex flex-col justify-center items-center text-primary p-24">
                    <h1 className="font-display text-sm md:text-xl xl:text-3xl w-full xl:w-[720px] mt-72  mb-32 leading-5 xl:leading-9 uppercase text-center">
                        NEW ERA - СИСТЕМЫ GPS МОНИТОРИНГА ТРАНСПОРТА ЭТО ГОТОВЫЕ
                        РЕШЕНИЯ, ПРЕДНАЗНАЧЕННЫЕ ДЛЯ ОПТИМИЗАЦИИ ЗАТРАТ И
                        ПОВЫШЕНИЯ ЭФФЕКТИВНОСТИ ИСПОЛЬЗОВАНИЯ ВАШЕГО АВТОПАРКА
                    </h1>
                    <Button
                        onClick={() => handleModal(true)}
                        color="primary"
                        className="animate-bounce"
                    >
                        Получить консультацию
                    </Button>
                </div>
            </div>
        </section>
    );
};
