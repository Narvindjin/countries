import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import StyledContainer from "../../components/container/container";
import CountriesList from "../../components/countriesList/countriesList";
import { SectionContainer } from "./styles";
import { receivedCountry } from "../../interfacesAPI/interfacesAPI";
import { regionInterface } from '../wrapper/wrapper';
import { CountryContext } from "../../contexts/contexts";
import SearchForm from "../../components/searchForm/searchForm";

const CountriesSection = () => {
    const arrayContextObject = useContext(CountryContext);
    const contextCountryArray = arrayContextObject.array as receivedCountry[]
    const [countriesArray, changeCountriesArray] = useState(contextCountryArray.slice(0, arrayContextObject.amountPerPage));
    const numberOfItems = useRef<number>(arrayContextObject.amountPerPage);
    const loaderElement = useRef<HTMLLIElement | null>(null);

    const handleScrollObserver = useCallback(() => {
            if (numberOfItems.current < contextCountryArray.length) {
                const newNumber = numberOfItems.current + arrayContextObject.amountPerPage;
                numberOfItems.current = newNumber;
                const newCountriesArray = contextCountryArray.slice(0, newNumber)
                changeCountriesArray(newCountriesArray)
            }
    }, [contextCountryArray, arrayContextObject.amountPerPage])

    useEffect(() => {
        console.log(contextCountryArray)
        numberOfItems.current = arrayContextObject.amountPerPage;
        changeCountriesArray(contextCountryArray.slice(0, arrayContextObject.amountPerPage))
    }, [contextCountryArray, arrayContextObject.amountPerPage]);

    useEffect(() => {
            let throttled = true;
            setTimeout(() => {
                throttled = false;
            }, 150)
            const intersectionObserver = new IntersectionObserver((entries) => {
                if (!entries[0].isIntersecting) return;
                if (!throttled) {
                    handleScrollObserver();
                    throttled = true
                    setTimeout(() => {
                        throttled = false;
                    }, 150)
                }
            });
            if (loaderElement.current) {
                const elementToWatch = loaderElement.current as Element
                console.log('connected');
                intersectionObserver.observe(elementToWatch);
                return () => {
                    console.log('disconnected');
                    intersectionObserver.disconnect();
                }
            }
    }, [handleScrollObserver]);

    return (
        <StyledContainer>
            <SectionContainer>
                <SearchForm></SearchForm>
                <CountriesList loaderElement={loaderElement} countriesToShow={countriesArray}></CountriesList>
            </SectionContainer>
        </StyledContainer>
    )
}

export default CountriesSection