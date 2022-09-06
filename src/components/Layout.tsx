import { FC, ReactNode } from "react";
import { Form } from "./Form";
import { Header } from "./Header";
import { YMaps } from '@pbe/react-yandex-maps';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <YMaps>
            <Header />
            {children}
            <Form />
        </YMaps>
    );
};
