import Image from "next/image";
import { FC, useState } from "react";
import { useDeviceDetector } from "../hooks/useDeciveDecetor";

export const Header: FC = () => {
    const [isActive, setActive] = useState(false);
    const {isMobile} = useDeviceDetector()
    const handleActive = () => setActive(prevState => !prevState);

    return (
        <header
            className={`flex justify-center ${isMobile ? 'flex-start' : 'items-center'} bg-white ${
                isActive ? "h-[220px]" : "h-54"
            } lg:h-[92px] w-full px-20 fixed z-20 transition-all delay-100 border-b-2`}
        >
            <div className="container flex items-center justify-between flex-wrap max-h-[48px] pt-4 xl:pt-0">
                <div className="flex items-center flex-shrink-0 text-secondary mr-32">
                    <Image
                        src="/assets/images/logo.svg"
                        height={44}
                        width={140}
                        className="font-display text-xl"
                        alt=""
                    />
                </div>
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
                <div
                    className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto font-body ${
                        isActive ? "translate-y-[12px]" : "translate-y-[-150%]"
                    } lg:translate-y-0 transition-transform delay-100`}
                >
                    <div className="text-sm lg:flex-grow">
                        <a
                            href="#about"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-18"
                        >
                            О компании
                        </a>
                        <a
                            href="#possibilities"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-18"
                        >
                            Возможности
                        </a>
                        <a
                            href="#software"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-18"
                        >
                            Программное обеспечение
                        </a>
                        <a
                            href="#software"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-18"
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
                    <div>
                        <a
                            href="tel:+998991949494"
                            className="inline-block text-xl font-bold px-4 py-2 leading-none mt-4 lg:mt-0"
                        >
                            +99899 194-94-94
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
