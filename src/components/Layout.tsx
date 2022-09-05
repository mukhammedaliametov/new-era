import { FC, ReactNode } from "react";
import { Form } from "./Form";
import { Header } from "./Header";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <Form />
        </>
    );
};
