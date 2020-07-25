import React, { useState, useEffect, ReactNode, useContext } from 'react';
import axios from 'axios';

interface Config {
    apiUrl: string
}

const ConfigContext = React.createContext<Config>({ apiUrl: "" });

export function ConfigProvider(props: Props) {
    const [config, setConfig] = useState<Config>();
    useEffect(() => { axios.get("config.json").then(response => setConfig(response.data)) }, []);

    return (
        config ? <ConfigContext.Provider value={config} children={props.children} /> : <>Loading...</>
    );
}

export const useConfig = () => useContext(ConfigContext);

interface Props {
    children?: ReactNode
}