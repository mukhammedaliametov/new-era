import { FC } from "react";
import { useFormik } from "formik";
import { useModal } from "../hooks/handleModal";

export const Form: FC = () => {
    const { isActive, handleModal } = useModal();

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
        },
        onSubmit: (data: any) => {
            fetch(`/api/request`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
        },
    });

    return (
        <div
            className={`${
                isActive ? "flex" : "hidden"
            } justify-center items-center bg-black/60 h-screen w-full fixed top-0 z-20`}
            onClick={() => handleModal(false)}
        >
            <form
                className="flex flex-col items-center w-1/2 p-32 rounded bg-primary text-center z-30"
                onSubmit={formik.handleSubmit}
                onClick={e => e.stopPropagation()}
            >
                <h1 className="font-bold text-xl mb-10">
                    Получить консультацию
                </h1>
                <span className="mb-12">
                    Перезвоним в течение 10 минут и ответим на все интересующие
                    вопросы
                </span>
                <input
                    name="name"
                    type="tel"
                    className="w-full mb-12 p-12 py-16 rounded"
                    placeholder="Введите имя"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <input
                    name="phone"
                    type="tel"
                    className="w-full mb-12 p-12 py-16 rounded"
                    placeholder="Введите телефон*"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                <button
                    className="bg-black p-24 text-primary font-bold min-w-[320px] rounded"
                    type="submit"
                >
                    Отправить
                </button>
            </form>
        </div>
    );
};