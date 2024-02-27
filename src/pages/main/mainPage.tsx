import React, {useEffect} from 'react';
import CountriesSection from "../../blocks/countriesSection/countriesSection";
import {mapObjectInterface} from "../../interfacesAPI/interfacesAPI";
import { regionInterface } from '../../blocks/wrapper/wrapper';

interface mainPageInterface {
    countriesMapObject: mapObjectInterface;
    optionsArray: regionInterface[];
}

const MainPage = ({countriesMapObject, optionsArray, children}:React.PropsWithChildren<mainPageInterface>) => {
    return (
        <CountriesSection optionsArray = {optionsArray} countriesMapObject={countriesMapObject} />
    )
}

export default MainPage