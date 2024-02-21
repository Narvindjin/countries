import React from 'react';
import {StyledList} from "./styles";
import CountryCard from "../countryCard/countryCard";

const CountriesList = () => {
    return (
        <StyledList>
            <li>
                <CountryCard/>
            </li>
        </StyledList>
    )
}

export default CountriesList;