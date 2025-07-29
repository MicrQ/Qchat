import { createContext, useState } from 'react'
import main from '../config/config'

type ContextType = {
    prevPrompts: string[];
    setPrevPrompts: (value: string[]) => void;
    onSent: (prompt: string) => Promise<void>;
    setRecentPrompt: (value: string) => void;
    recentPrompt: string;
    showResult: boolean;
    loading: boolean;
    result: string;
    input: string;
    setInput: (value: string) => void;
};

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [input, setInput]  = useState<string>('');
    const [recentPrompt, setRecentPrompt] = useState<string>('');
    const [prevPrompts, setPrevPrompts] = useState<string[]>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const delayParagraph = (idx: number, nextWord: string) => {
        setTimeout(() => {
            setResult((prev) => prev + nextWord);
        }, idx * 75);
    };

    const onSent = async (prompt: string) => {
        setResult('');
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input)
        setPrevPrompts((prev) => [...prev, input.slice(0, 15)]);
        setInput('');

        const res = await main(input);
        let resArray = res.split('**');
        let newRes = '';

        for (let i = 0; i < resArray.length; i++) {
            if (i === 0 || i % 2 !== 1)
                newRes += resArray[i];
            else
                newRes += `<b>${resArray[i]}</b>`;
        }

        newRes = newRes.replace(/\*/g, '<br/>')
        const finalRes = newRes.split(' ')
        
        for (let i = 0; i < finalRes.length; i++) {
            delayParagraph(i, finalRes[i] + ' ');
        }


        setResult(newRes);
        setLoading(false);
    };

    const contextValue: ContextType = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        result,
        input,
        setInput,
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
