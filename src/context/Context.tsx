import { createContext } from 'react'
import main from '../config/config'

type ContextType = {};

export const Context = createContext<ContextType>({});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {

    const onSend = async (prompt: string) => {
        await main(prompt);
    };

    onSend("What is python?");

    const contextValue: ContextType = {}

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
