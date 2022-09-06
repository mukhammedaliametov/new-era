import { FC, useEffect, useState } from "react";
import { Map, Placemark } from "@pbe/react-yandex-maps";

export const Contacts: FC = () => {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="flex justify-center items-center bg-black">
            <div className="container flex flex-col items-center">
                <h1 className="font-display text-display mb-54 text-primary">
                    Контакты
                </h1>
                <div className="flex justify-center relative">
                    {isLoaded && (
                        <Map
                            defaultState={{
                                center: [42.47422942766454, 59.61304045092482],
                                zoom: 17,
                            }}
                            height={540}
                            width={920}
                        >
                            <Placemark
                                geometry={[
                                    42.47422942766454, 59.61304045092482,
                                ]}
                            />
                        </Map>
                    )}
                    <div className="flex flex-col min-w-[400px] max-w-[400px] bg-primary py-24 px-16">
                        <div className="flex flex-col mb-24">
                            <span className="flex items-center text-xl mb-4">
                                <span className="mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-24 h-24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                </span>
                                Адрес:
                            </span>
                            <span className="font-bold text-tiny">
                                Республика Каракалпакстан, Нукус, проспект
                                Дослык, 159
                            </span>
                        </div>
                        <div className="flex flex-col mb-24">
                            <span className="flex items-center text-xl mb-4">
                                <span className="mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-24 h-24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                                        />
                                    </svg>
                                </span>
                                Email:
                            </span>
                            <a
                                href="mailto:new-era@gmail.com"
                                className="font-bold text-tiny"
                            >
                                new-era@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <span className="flex items-center text-xl mb-4">
                                <span className="mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-24 h-24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                </span>
                                Номер телефона:
                            </span>
                            <a href="tel:+998991949494" className="font-bold text-tiny">
                                +99899 194 94 94
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
