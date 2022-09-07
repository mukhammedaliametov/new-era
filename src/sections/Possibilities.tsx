import Image from "next/image";
import { FC, useState } from "react";

const possibilities = [
    {
        image: "ps1",
        title: "Контроль текущего местоположения транспорта",
        options: [
            "Выявление несанкционированных рейсов",
            "Соблюдение разрешенных маршрутов",
            "Локатор - возможность выборочного слежения за объектами без необходимости отдельной авторизации в системе мониторинга",
        ],
    },
    {
        image: "ps2",
        title: "Контроль расхода топлива с использованием датчика уровня топлива",
        options: [
            "Учёт заправок/сливов топлива",
            "Выявление случаев повышенного расхода",
            "Определение фактических норм расхода топлива",
        ],
    },
    {
        image: "ps3",
        title: "Контроль пробега \nтранспортного средства",
        options: [
            "Автоматическое оповещение о необходимости прохождения ТО",
            "Возможность расчёта с заказчиком по километражу",
            "Исключение махинаций со спидометром",
        ],
    },
    {
        image: "ps4",
        title: "Контроль над посещением обозначенных геозон",
        options: [
            "Контроль выполнения маршрутного задания",
            "Создание POI",
            "Несанкционированный выезд за обозначенную зону",
            "Несанкционированный въезд в запрещённые зоны",
        ],
    },
    {
        image: "ps5",
        title: "Контроль над соблюдением Скоростного режима",
        options: [
            "Отслеживание параметров движения",
            "Обеспечение безопасности грузопассажирских перевозок",
        ],
    },
    {
        image: "ps6",
        title: "Контроль над деятельностью водителей",
        options: [
            "Выявление простоев, нарушение графика",
            "Выявление агрессивного вождения",
            "Повышение дисциплины и аккуратности водителей",
            "Идентификация водителей с помощью электронных ключей",
            "Выявление махинаций с чеками, отчётностью, приписками пробега",
            "ECO driving - Функциональный модуль для определения качества вождения (значение ускорения, торможения, момент поворота)",
        ],
    },
    {
        image: "ps7",
        title: "Контроль работы дополнительного оборудования",
        options: [
            "Учёт времени и режимов работы любых механизмов и агрегатов: двигателя автомобиля, генераторов, компрессоров, кранов, навесного оборудования и т.д.",
            "Удалённое блокирование системы запуска автомобиля (иммобилайзер)",
            "Мониторинг температуры в рефрижераторах",
            "Подключение CAN к шине ",
        ],
    },
    {
        image: "ps8",
        title: "Составление аналитических отчетов по всем параметрам работы автотранспорта",
        options: [
            'Функция "Быстрый отчёт" за выбранный период времени',
            "Автоматическое уведомление по e-mail о нарушениях указанных событий ",
            "Формирование собственных шаблонов отчётов",
            "Анализ полученных данных посредством широкого набора табличных и графических отчётов",
        ],
    },
];

export const Possibilities: FC = () => {
    const [selectedPoss, setSelectedPoss] = useState(0);

    return (
        <section id="possibilities" className="flex justify-center items-center bg-primary">
            <div className="container flex flex-col items-center">
                <h1 className="font-display text-display mb-54">Возможности</h1>
                <div className="flex items-start w-full">
                    <div className="grid grid-cols-4 gap-44 w-1/2">
                        {possibilities.map(
                            ({ image, title }, index: number) => (
                                <div
                                    key={image}
                                    className={`flex flex-col items-center bg-white text-black min-h-[160px] min-w-[120px] py-24 px-12 rounded-xl cursor-pointer border-4 ${
                                        selectedPoss === index
                                            ? "border-black/80"
                                            : "border-primary"
                                    }`}
                                    onClick={() => setSelectedPoss(index)}
                                >
                                    <Image
                                        className="text-primary mb-32"
                                        src={`/assets/icons/${image}.svg`}
                                        height={54}
                                        width={54}
                                        alt=""
                                        style={{ color: "red" }}
                                    />
                                    <span className="font-bold text-xs text-center">
                                        {title}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                    <div className="flex flex-col w-1/2 px-36">
                        <span className="font-display text-2xl mb-24">
                            {possibilities[selectedPoss].title}
                        </span>
                        {possibilities[selectedPoss].options.map(
                            (option: string, index: number) => (
                                <div
                                    key={`option__${index}`}
                                    className="flex font-bold text-tiny mb-12 last:mb-0"
                                >
                                    - {option}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
