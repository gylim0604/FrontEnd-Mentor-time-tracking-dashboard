import React, { createContext, useContext, useState } from 'react';
import dataJSON from '../public/data.json';

const AppContext = createContext();

const filterData = (el) => {
    let reduced = dataJSON.reduce(function (filtered, option) {
        let timeframe = option.timeframes;
        filtered.push({ ...option, timeframes: timeframe[el] });
        return filtered;
    }, []);
    return reduced;
};

export function ContextWrapper({ children }) {
    let initialState = {
        selected: '',
        data: [],
    };
    const [state, setState] = useState(initialState);

    return (
        <AppContext.Provider
            value={{
                state,
                handleChange: (el) => {
                    setState({
                        ...state,
                        data: filterData(el.toLowerCase()),
                        selected: el,
                    });
                    filterData(el);
                },
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
