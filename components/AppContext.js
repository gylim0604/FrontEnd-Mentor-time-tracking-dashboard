import React, { createContext, useContext, useState } from 'react';
import dataJSON from '../public/data.json';

const AppContext = createContext();

const filterData = (el) => {
    let reduced = dataJSON.reduce(function (filtered, option) {
        // if (option.timeframes) {
        // let someNewValue = { name: option.name, newProperty: 'Foo' };
        // filtered.push(someNewValue);
        // }
        let timeframe = option.timeframes;
        // let fitlered = Object.keys(timeframe).filter((key)=>);
        console.log(timeframe);
        return filtered;
    }, []);
    return reduced;
};

export function ContextWrapper({ children }) {
    let initialState = {
        selected: 'Daily',
        data: dataJSON,
    };
    const [state, setState] = useState(initialState);

    return (
        <AppContext.Provider
            value={{
                state,
                handleChange: (el) => {
                    setState({ ...state, selected: el });
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
