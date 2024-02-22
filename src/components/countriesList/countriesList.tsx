import React from 'react';
import {StyledList} from "./styles";
import CountryCard from "../countryCard/countryCard";
import {mapObjectInterface} from "../../interfacesAPI/interfacesAPI";

interface listInterFace {
    countriesToShow: string[];
    countriesMapObject: mapObjectInterface;
}

const CountriesList = ({countriesToShow, countriesMapObject, children}: React.PropsWithChildren<listInterFace>) => {
    return (
        <StyledList>
            {countriesToShow.map((country) => {
                const countryObject = countriesMapObject.countries.get(country)
                if (countryObject) {
                    return (
                        <li key={country}>
                            <CountryCard country={countryObject}/>
                        </li>
                    )
                } else {
                    return null
                }
            })
            }
        </StyledList>
    )
}

export default CountriesList;