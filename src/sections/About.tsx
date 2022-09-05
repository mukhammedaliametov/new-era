import { FC } from "react";

export const About: FC = () => {
    return (
        <section id="about" className="flex justify-center items-center bg-primary">
            <div className="container flex flex-col justify-center items-center">
                <h1 className="font-display text-display mb-54">О компании</h1>
                <div className="flex flex-col">
                    <div className="flex w-full mb-48">
                        <span className="min-w-[92px] font-display text-7xl mr-24 opacity-50">
                            01
                        </span>
                        <div className="flex flex-col">
                            <span className="font-display text-2xl mb-4">
                                Бизнес профиль
                            </span>
                            <p className="text-base">
                                Торговая марка New Era ® принадлежит ООО «New
                                Era Company Service» (Далее Компания). Компания
                                специализируется на предоставлении
                                функциональных и надежных решений в сферах M2M и
                                IoT. На этом рынке компания работает с 2005 года
                                и на сегодняшний день является одной из ведущих
                                компаний, разработчиком и владельцем ряда
                                уникальных технологий и продуктов, включая
                                платформу глобального спутникового мониторинга
                                WIALON.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full mb-48">
                        <span className="min-w-[92px] font-display text-7xl mr-24 opacity-50">
                            02
                        </span>
                        <div className="flex flex-col">
                            <span className="font-display text-2xl mb-4">
                                Решения B2B и B2C
                            </span>
                            <p className="text-base">
                                Клиентами компании являются более 30,000 частных
                                лиц и компаний в разных регионах РУз. Мы также
                                гордимся тем, что среди наших клиентов много
                                крупных коммерческих, государственных и
                                муниципальных организаций. Важную роль в успехе
                                играет обширная сеть партнеров по всей стране.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full mb-48">
                        <span className="min-w-[92px] font-display text-7xl mr-24 opacity-50">
                            03
                        </span>
                        <div className="flex flex-col">
                            <span className="font-display text-2xl mb-4">
                                Инновации и технологии
                            </span>
                            <p className="text-base">
                                Компания владеет собственной
                                телекоммуникационной платформой для
                                предоставления геоинформационных сервисов.
                                Дата-центр располагается в Ташкенте и отвечает
                                высоким требованиям производительности и
                                безопасности. Наши клиенты всегда уверены в
                                быстром доступе к информации, а также ее
                                защищенности.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full mb-48">
                        <span className="min-w-[92px] font-display text-7xl mr-24 opacity-50">
                            04
                        </span>
                        <div className="flex flex-col">
                            <span className="font-display text-2xl mb-4">
                                Команда
                            </span>
                            <p className="text-base">
                                Собственный штат профессиональных разработчиков
                                позволяет в кратчайшие сроки реализовывать
                                IT-проекты различной сложности, в том числе,
                                производить интеграцию с системами заказчика,
                                адаптировать продукты и разрабатывать
                                индивидуальные решения под специфические
                                требования.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full mb-48">
                        <span className="min-w-[92px] font-display text-7xl mr-24 opacity-50">
                            05
                        </span>
                        <div className="flex flex-col">
                            <span className="font-display text-2xl mb-4">
                                Юридические полномочия
                            </span>
                            <p className="text-base">
                                Соответствие законодательству является одним из
                                наших приоритетов. Компания имеет все
                                необходимые лицензии и разрешения,
                                действительные на территории РУз. Продукция
                                предприятия соответствует международным
                                стандартам, требованиям технических регламентов,
                                имеет положительные заключения о соответствии
                                требованиям UNICON.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};