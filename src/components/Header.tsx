import Image from "next/image";
import { FC, useState } from "react";
import { useModal } from "../hooks/handleModal";
import { useDeviceDetector } from "../hooks/useDeciveDecetor";

export const Header: FC = () => {
    const [isActive, setActive] = useState(false);
    const { isMobile } = useDeviceDetector();
    const {handleModal} = useModal()
    const handleActive = () => setActive(prevState => !prevState);

    return (
        <header
            className={`flex flex-col justify-center ${
                isMobile ? "flex-start" : "items-center"
            } bg-white ${
                isActive ? "h-[220px]" : "h-[120px]"
            } lg:h-[118px] w-full fixed z-20 transition-all delay-100 drop-shadow-lg`}
        >
            <div className="flex justify-center items-center min-h-[64px] w-full">
                <div className="container flex justify-between items-center font-body text-sm">
                    <div className="flex items-center flex-shrink-0 text-secondary mr-32">
                        <Image
                            src="/assets/images/logo.svg"
                            height={44}
                            width={140}
                            className="font-display text-xl"
                            alt=""
                        />
                    </div>
                    <div className="flex items-center">
                        <a
                            href="tel:+998991949494"
                            className="inline-flex items-center text-xl font-bold leading-none mr-24"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-20 h-20 mr-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                            +99899 194-94-94
                        </a>
                        <button className="bg-primary py-12 px-28 mr-16 rounded" onClick={() => handleModal(1)}>
                            Позвоните мне
                        </button>
                        <button className="bg-primary py-12 px-28 mr-16 rounded">
                            Получить коммерческое
                        </button>
                        <button className="bg-primary py-12 px-28 rounded" onClick={() => handleModal(2)}>
                            Заказать тест
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-primary min-h-[54px] w-full">
                <div className="block lg:hidden font-body">
                    <button
                        className="flex items-center rounded"
                        onClick={handleActive}
                    >
                        <svg
                            className="fill-current h-24 w-24"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="container flex justify-start items-center font-body font-semibold text-xs uppercase lg:flex-grow">
                    <a
                        href="#about"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-32"
                    >
                        О компании
                    </a>
                    <a
                        href="#possibilities"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-32"
                    >
                        Возможности
                    </a>
                    <a
                        href="#software"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-32"
                    >
                        Программное обеспечение
                    </a>
                    <a
                        href="#software"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-32"
                    >
                        Оборудование
                    </a>
                    <a
                        href="#contacts"
                        className="block mt-4 lg:inline-block lg:mt-0"
                    >
                        Контакты
                    </a>
                </div>
            </div>
        </header>
    );
};
