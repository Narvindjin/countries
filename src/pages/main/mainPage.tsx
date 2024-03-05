import React from 'react';
import CountriesSection from "../../blocks/countriesSection/countriesSection";
import {OutletInterface} from '../../blocks/wrapper/wrapper';
import {useOutletContext} from "react-router-dom";
import Loader from "../../components/loader/loader";


const MainPage = () => {
    const outletContext = useOutletContext<OutletInterface>()
    return (
        <>
        {outletContext.isLoading?
            <Loader/>:
            <CountriesSection/>
        }
        </>
    )
}

export default MainPage