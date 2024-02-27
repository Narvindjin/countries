import React, {MutableRefObject, useContext} from 'react';
import {StyledList, Divider} from "./styles";
import CountryCard from "../countryCard/countryCard";
import { CountryContext } from '../../contexts/contexts';
import { receivedCountry } from '../../interfacesAPI/interfacesAPI';

interface listInterFace {
    countriesToShow: receivedCountry[];
    loaderElement: MutableRefObject<HTMLLIElement | null>
}

const CountriesList = ({loaderElement, countriesToShow}: React.PropsWithChildren<listInterFace>) => {
    const countriesObject = useContext(CountryContext)
    return (
        <>
            <StyledList>
                {countriesToShow.map((country) => {
                        return (
                            <li key={country.cca3}>
                                <CountryCard country={country}/>
                            </li>
                        )
                })
                }
                <Divider ref={loaderElement}/>
            </StyledList>
        </>
    )
}

export default CountriesList;