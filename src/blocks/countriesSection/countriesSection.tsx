import React, {useContext, useEffect, useRef, useState} from 'react';
import StyledContainer from "../../components/container/container";
import CountriesList from "../../components/countriesList/countriesList";
import {SectionContainer} from "./styles";
import {mapObjectInterface, receivedCountry} from "../../interfacesAPI/interfacesAPI";
import {regionInterface} from '../wrapper/wrapper';
import {CountryContext} from "../../contexts/contexts";
import SearchForm from "../../components/searchForm/searchForm";

interface sectionInterface {
    optionsArray: regionInterface[],
}

const CountriesSection = ({optionsArray}: React.PropsWithChildren<sectionInterface>) => {
    const arrayContextObject = useContext(CountryContext);
    const contextCountryArray = arrayContextObject.array as receivedCountry[]
    const [countriesArray, changeCountriesArray] = useState(contextCountryArray.slice(0, arrayContextObject.amountPerPage));
    const numberOfItems = useRef<number>(arrayContextObject.amountPerPage);
    const loaderElement = useRef<HTMLLIElement | null>(null);
    const [isObserved, changeIsObserved] = useState(false);
    const [isThrottled, changeIsThrottled] = useState(false);

    const handleScrollObserver = () => {
        if (!isThrottled) {
            changeIsThrottled(true);
            /*этот чек может сломаться*/
            if (numberOfItems.current < contextCountryArray.length) {
                const newNumber = numberOfItems.current + arrayContextObject.amountPerPage;
                numberOfItems.current = newNumber;
                const newCountriesArray = contextCountryArray.slice(0, newNumber)
                console.log(numberOfItems.current);
                changeCountriesArray(newCountriesArray)
                setTimeout(() => {
                    changeIsThrottled(false)
                }, 350)
            }
        }
    }

    useEffect(() => {
        changeCountriesArray(contextCountryArray.slice(0, arrayContextObject.amountPerPage))
    }, [contextCountryArray, arrayContextObject.amountPerPage]);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) return;
            handleScrollObserver();
        }, {rootMargin: "70px 0px 0px 0px"});
        if (loaderElement.current) {
            const elementToWatch = loaderElement.current as Element
            if (!isObserved) {
                console.log('observed');
                changeIsObserved(true);
                intersectionObserver.observe(elementToWatch);
            }
            return () => {
                intersectionObserver.disconnect();
            }
        }
    }, []);

    return (
        <StyledContainer>
            <SectionContainer>
                <SearchForm optionsArray={optionsArray}></SearchForm>
                <CountriesList loaderElement={loaderElement} countriesToShow={countriesArray}></CountriesList>
            </SectionContainer>
        </StyledContainer>
    )
}

export default CountriesSection