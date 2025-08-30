import React from 'react';
import CountriesSection from "../../blocks/countriesSection/countriesSection";
import type {OutletInterface} from '../../blocks/wrapper/wrapper';
import { useOutletContext } from 'react-router';
import Loader from "../../components/loader/loader";


const MainPage = () => {
    const outletContext = useOutletContext<OutletInterface>()
    return (
        <>
        {outletContext.isLoading?
            <></>:
            <CountriesSection/>
        }
        </>
    )
}

export default MainPage