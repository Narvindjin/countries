import React, {useContext, useEffect, useRef, useState} from 'react';
import StyledContainer from "../../components/container/container";
import CountriesList from "../../components/countriesList/countriesList";
import {SectionContainer} from "./styles";
import {mapObjectInterface} from "../../interfacesAPI/interfacesAPI";
import {regionInterface} from '../wrapper/wrapper';
import {CountryContext} from "../../contexts/contexts";
import SearchForm from "../../components/searchForm/searchForm";

interface sectionInterface {
    countriesMapObject: mapObjectInterface
    optionsArray: regionInterface[],
}

const CountriesSection = ({countriesMapObject, optionsArray}: React.PropsWithChildren<sectionInterface>) => {
    const arrayContextObject = useContext(CountryContext);
    const [countriesArray, changeCountriesArray] = useState(arrayContextObject.array.slice(0, arrayContextObject.amountPerPage));
    const numberOfItems = useRef<number>(arrayContextObject.amountPerPage);
    const loaderElement = useRef<HTMLLIElement | null>(null);
    const [isObserved, changeIsObserved] = useState(false);
    const [isThrottled, changeIsThrottled] = useState(false);

    const handleScrollObserver = () => {
        if (!isThrottled) {
            changeIsThrottled(true);
            /*этот чек может сломаться*/
            if (numberOfItems.current < arrayContextObject.array.length) {
                const newNumber = numberOfItems.current + arrayContextObject.amountPerPage;
                numberOfItems.current = newNumber;
                const newCountriesArray = arrayContextObject.array.slice(0, newNumber)
                console.log(numberOfItems.current);
                changeCountriesArray(newCountriesArray)
                setTimeout(() => {
                    changeIsThrottled(false)
                }, 350)
            }
        }
    }

    useEffect(() => {
        changeCountriesArray(arrayContextObject.array.slice(0, arrayContextObject.amountPerPage))
    }, [arrayContextObject.array]);

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
                <CountriesList loaderElement={loaderElement} countriesToShow={countriesArray}
                               countriesMapObject={countriesMapObject}></CountriesList>
            </SectionContainer>
        </StyledContainer>
    )
}

export default CountriesSection