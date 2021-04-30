import React, {createContext, useContext, useState} from "react";

interface LayoutProps {
    children: React.ReactNode
}

interface ContextProps {
    loaderStatus: string,
    setLoaderStatus: (params: string) => void
}

const LoaderContext = createContext<ContextProps>({
    loaderStatus: 'disable',
    setLoaderStatus: () => status === 'enable' ? status = 'disable' : status = 'enable'
});

export const LoaderProvider = (props: LayoutProps) => {
    const [loaderStatus, setLoaderStatus] = useState('disable');
    return (
        <LoaderContext.Provider value={{ loaderStatus, setLoaderStatus }}>
            {props.children}
        </LoaderContext.Provider>
    )
}

export const useLoaderContext = () => useContext(LoaderContext)