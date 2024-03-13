import {createContext, Dispatch, SetStateAction, useState} from "react";
import React from "react";
import { countryMap, mapObjectInterface, receivedCountry } from "../interfacesAPI/interfacesAPI";
import {regionInterface} from "../blocks/wrapper/wrapper";

const countriesMap: countryMap = new Map();

interface countryContextInterface {
    array: receivedCountry[] | null,
    setter: Dispatch<SetStateAction<receivedCountry[] | null>> | null,
    amountPerPage: number,
    countriesMap: mapObjectInterface,
    countriesMapSetter: Dispatch<SetStateAction<mapObjectInterface>> | null,
    optionsArray: regionInterface[],
    optionsArraySetter: Dispatch<SetStateAction<regionInterface[]>> | null,
}

const initialState = {
    array: null,
    setter: null,
    amountPerPage: 20,
    countriesMap: {countries: countriesMap},
    countriesMapSetter: null,
    optionsArray: [],
    optionsArraySetter: null,
}

export const CountryContext = createContext<countryContextInterface>(initialState)


const CountryContextContainer = ({ children }: React.PropsWithChildren) => {
    const [filteredCountryArray, setArray] = useState<receivedCountry[] | null>(null);
    const [countriesMapObject, updateMapObject]:[mapObjectInterface, Dispatch<SetStateAction<mapObjectInterface>>] = useState(initialState.countriesMap);
    const [optionsArray, setOptionsArray]:[regionInterface[], Dispatch<SetStateAction<regionInterface[]>>] = useState<regionInterface[]>(initialState.optionsArray);

    return (
        <CountryContext.Provider value={{
            array: filteredCountryArray,
            setter: setArray,
            amountPerPage: 20,
            countriesMap: countriesMapObject,
            countriesMapSetter: updateMapObject,
            optionsArray: optionsArray,
            optionsArraySetter: setOptionsArray,
        }}>
            {children}
        </CountryContext.Provider>
    )
}

export {CountryContextContainer}
