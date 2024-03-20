import React, {MutableRefObject, useEffect, useState} from 'react';
import {ListWrapper, StyledList, Divider} from "./styles";
import CountryCard from "../countryCard/countryCard";
import { receivedCountry } from '../../interfacesAPI/interfacesAPI';

interface listInterFace {
    countriesToShow: receivedCountry[];
    loaderElement: MutableRefObject<HTMLLIElement | null>
}

const CountriesList = ({loaderElement, countriesToShow}: React.PropsWithChildren<listInterFace>) => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
        }
    },[isFirstLoad]);

    return (
        <ListWrapper>
            <StyledList $isFirstLoad={isFirstLoad}>
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
        </ListWrapper>
    )
}

export default CountriesList;