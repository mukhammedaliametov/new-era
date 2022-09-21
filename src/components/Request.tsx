import { FC, useState } from "react";
import { useDeviceDetector } from "../hooks/useDeciveDecetor";
import { Button } from "./ui";

export const Request: FC = () => {
    const { isMobile } = useDeviceDetector();

    return (
        <div className="flex justify-center bg-primary lg:h-[320px] w-full">
            <div className="container flex flex-col justify-center py-36 p-16 md:p-0">
                <h2 className="font-display text-3xl mb-6">
                    БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                </h2>
                <span>Оставьте заявку и мы вам перезвоним</span>
                <div className="flex flex-col md:flex-row items-center mt-24">
                    <input
                        name="name"
                        type="text"
                        className="w-full max-w-[440px] mb-12 md:mb-0 md:mr-12 p-12 py-16 rounded"
                        placeholder="Введите имя"
                        // onChange={formik.handleChange}
                        // value={formik.values.name}
                    />
                    <input
                        name="phone"
                        type="tel"
                        className="w-full max-w-[440px] mb-12 md:mb-0 md:mr-12 p-12 py-16 rounded"
                        placeholder="Введите телефон*"
                        // onChange={formik.handleChange}
                        // value={formik.values.phone}
                    />
                    <button className="flex justify-center items-center font-bold text-sm xl:text-tiny h-54 xl:h-56 w-full md:w-[240px] xl:w-[400px] cursor-pointer bg-black text-primary rounded">
                        Отправить заявку
                    </button>
                </div>
            </div>
        </div>
    );
};
