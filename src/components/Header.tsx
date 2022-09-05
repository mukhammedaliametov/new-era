import { FC, useState } from "react";

export const Header: FC = () => {
    const [isActive, setActive] = useState(false);

    const handleActive = () => setActive(prevState => !prevState);

    return (
        <header className={`flex items-center justify-between flex-wrap bg-primary ${isActive ? 'h-[220px]' : 'h-54'} lg:h-[72px] w-full px-24 fixed z-10`}>
            <div className="flex items-center flex-shrink-0 text-secondary mr-6">
                <span className="font-display text-xl">New Era</span>
            </div>
            <div className="block lg:hidden font-body">
                <button
                    className="flex items-center px-3 py-2 border rounded border-teal-400 hover:border-white"
                    onClick={handleActive}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto font-body ${isActive ? '' : 'translate-y-[-120%]'} lg:translate-y-0`}>
                <div className="text-sm lg:flex-grow">
                    <a
                        href="#about"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-18"
                    >
                        О компании
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-18"
                    >
                        Возможности
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-18"
                    >
                        Оборудование
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-18"
                    >
                        Клиенты
                    </a>
                    <a
                        href="#responsive-header"
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
        </header>
    );
};
