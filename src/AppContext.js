import React, {useContext, createContext, useState} from "react";

export const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);
export const AppProvider = ({children}) => {
    const [activeTitle, setActiveTitle] = useState(null);
    const [titles, setTitles] = useState([]);
    const [variables, setVariables] = useState([]);
    const [searchTerm, setSearchTerm] = useState(null);
    const providerValue = {
        activeTitle,
        setActiveTitle,
        titles,
        setTitles,
        variables,
        setVariables,
        searchTerm,
        setSearchTerm
    };
    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    );
}