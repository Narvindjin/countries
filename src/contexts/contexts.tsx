import {createContext, Dispatch, SetStateAction, useState} from "react";
import React from "react";

interface countryContextInterface {
    array: string[],
    setter: Dispatch<SetStateAction<string[]>> | null,
    amountPerPage: number
}

const initialState = {
    array: ['init'],
    setter: null,
    amountPerPage: 20,
}

export const CountryContext = createContext<countryContextInterface>(initialState)


const CountryContextContainer = ({ children }: React.PropsWithChildren) => {
    const [filteredCountryKeyArray, setKeyArray]:[string[], Dispatch<SetStateAction<string[]>>] = useState(['init'])
    return (
        <CountryContext.Provider value={{
            array: filteredCountryKeyArray,
            setter: setKeyArray,
            amountPerPage: 20,
        }}>
            {children}
        </CountryContext.Provider>
    )
}

export {CountryContextContainer}
