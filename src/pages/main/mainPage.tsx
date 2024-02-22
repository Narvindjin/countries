import React, {useEffect} from 'react';
import CountriesSection from "../../blocks/countriesSection/countriesSection";
import {mapObjectInterface} from "../../interfacesAPI/interfacesAPI";

interface mainPageInterface {
    countriesMapObject: mapObjectInterface;
    firstArray: string[]
}

const MainPage = ({countriesMapObject, firstArray, children}:React.PropsWithChildren<mainPageInterface>) => {
    return (
        <CountriesSection firstArray={firstArray} countriesMapObject={countriesMapObject} />
    )
}

export default MainPage