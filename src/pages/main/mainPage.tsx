import React, {useEffect} from 'react';
import CountriesSection from "../../blocks/countriesSection/countriesSection";
import {mapObjectInterface} from "../../interfacesAPI/interfacesAPI";
import { regionInterface } from '../../blocks/wrapper/wrapper';

interface mainPageInterface {
    countriesMapObject: mapObjectInterface;
    firstArray: string[],
    optionsArray: regionInterface[];
}

const MainPage = ({countriesMapObject, optionsArray, firstArray, children}:React.PropsWithChildren<mainPageInterface>) => {
    return (
        <CountriesSection firstArray={firstArray} optionsArray = {optionsArray} countriesMapObject={countriesMapObject} />
    )
}

export default MainPage