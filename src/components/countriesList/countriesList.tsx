import React, {MutableRefObject, useEffect, useRef} from 'react';
import {StyledList, Divider} from "./styles";
import CountryCard from "../countryCard/countryCard";
import {mapObjectInterface} from "../../interfacesAPI/interfacesAPI";

interface listInterFace {
    countriesToShow: string[];
    countriesMapObject: mapObjectInterface;
    loaderElement: MutableRefObject<HTMLLIElement | null>
}

const CountriesList = ({loaderElement, countriesToShow, countriesMapObject}: React.PropsWithChildren<listInterFace>) => {
    return (
        <>
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
                <Divider ref={loaderElement}/>
            </StyledList>
        </>
    )
}

export default CountriesList;