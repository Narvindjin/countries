import React, {useEffect} from 'react';
import CountriesSection from "../../blocks/countriesSection/countriesSection";
import { regionInterface } from '../../blocks/wrapper/wrapper';

interface mainPageInterface {
    optionsArray: regionInterface[];
}

const MainPage = ({optionsArray, children}:React.PropsWithChildren<mainPageInterface>) => {
    return (
        <CountriesSection optionsArray = {optionsArray}/>
    )
}

export default MainPage