import React, {createContext, useContext, useState} from "react";

interface LayoutProps {
    children: React.ReactNode
}

// TODO write correct function type
interface ContextProps {
    status: string,
    setStatus: Function
}

const LoaderContext = createContext<ContextProps>({
    status: 'disable',
    setStatus: (): string => status === 'enable' ? status = 'disable' : status = 'enable'
});

export const LoaderProvider = (props: LayoutProps) => {
    const [status, setStatus] = useState('disable');
    return (
        <LoaderContext.Provider value={{ status, setStatus }}>
            {props.children}
        </LoaderContext.Provider>
    )
}

export const useLoaderContext = () => useContext(LoaderContext)