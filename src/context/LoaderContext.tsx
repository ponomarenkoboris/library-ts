import React, {createContext, useContext, useState} from "react";

interface LayoutProps {
    children: React.ReactNode
}

interface ContextProps {
    status: string,
    setStatus: Function
}

const LoaderContext = createContext<ContextProps>({
    status: 'disable',
    setStatus: () => status === 'enable' ? status = 'disable' : status = 'enable'
});

export const LoaderProvider = (props: LayoutProps) => {
    const [status, setStatus] = useState('disable');
    console.log(status)
    return (
        <LoaderContext.Provider value={{ status, setStatus }}>
            {props.children}
        </LoaderContext.Provider>
    )
}

export const useLoaderContext = () => useContext(LoaderContext)