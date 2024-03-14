import React, {useContext, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {CountryContext} from "../../contexts/contexts";
import {receivedCountry} from "../../interfacesAPI/interfacesAPI";
import StyledContainer from "../../components/container/container";
import {BackButton, BlockContainer, StyledLink} from "./styles";
import CountryBlock from "../../components/countryBlock/countryBlock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const DetailBlock = () => {
    const actualCountryObject = useContext(CountryContext);
    const [currentCountry, changeCurrentCountry] = useState<receivedCountry | null>(null)
    const countriesMap = actualCountryObject.countriesMap
    const location = useLocation();
    const stringToSearch = location.pathname.substring(1);
    const country = countriesMap.countries.get(stringToSearch);
    if (country && country !== currentCountry) {
        changeCurrentCountry(country)
    } else if (!country && currentCountry !== null) {
        changeCurrentCountry(null);
    }
    return (
        <StyledContainer>
            <BlockContainer>
            {
                currentCountry?
                    <>
                    <div>
                        <StyledLink to={'/'}>
                            <BackButton>
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span>Back</span>
                            </BackButton>
                        </StyledLink>
                    </div>
                    <CountryBlock country={currentCountry}></CountryBlock>
                    </>:
                    <div>No page could be found</div>
            }
            </BlockContainer>
        </StyledContainer>
    )
}

export default DetailBlock;