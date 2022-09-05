import { createContext, FC, ReactNode, useState } from "react";

interface ModalContextType {
    isActive: boolean;
    handleModal: (value: boolean) => void;
}

// @ts-ignore
export const ModalContext = createContext<ModalContextType>();
ModalContext.displayName = "Modal Context";

interface ModalContextProviderProps {
    children: ReactNode;
}

const ModalContextProvider: FC<ModalContextProviderProps> = ({ children }) => {
    const [isActive, setActive] = useState<boolean>(false);

    return (
        <ModalContext.Provider
            value={{
                isActive,
                handleModal: (value: boolean) => setActive(value),
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
