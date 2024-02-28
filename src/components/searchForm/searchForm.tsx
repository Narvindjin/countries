import React, {FormEvent, MutableRefObject, useContext, useRef} from "react";
import {StyledForm} from "./styles";
import SearchInput from "../searchInput/searchInput";
import SelectInput from "../selectInput/selectInput";
import {regionInterface} from "../../blocks/wrapper/wrapper";
import {CountryContext} from "../../contexts/contexts";
import { receivedCountry } from "../../interfacesAPI/interfacesAPI";

interface props {
    optionsArray: regionInterface[];
}

const SearchForm = ({optionsArray}:props) => {
    const countryObject = useContext(CountryContext);
    const formRef:MutableRefObject<HTMLFormElement | null> = useRef(null)

    const filterRegions = (iterator:IterableIterator<receivedCountry>, value:string, arrayToFill: receivedCountry[]) => {
        if (value) {
            for (const valueObject of iterator) {
                if (valueObject.region === value) {
                    arrayToFill.push(valueObject);
                }
            }
        }
    }

    const searchForCountry = (iterator:IterableIterator<receivedCountry> | receivedCountry[], value:string) => {
        const newCountryArray:receivedCountry[] = [];
        const valueStandardized = value.toLowerCase();
        const checkForMatches = (countryObject:receivedCountry) => {
            if (countryObject.name.common.toLowerCase().includes(valueStandardized) || countryObject.name.official.toLowerCase().includes(valueStandardized)) {
                return true
            }
            return false
        }
        for (const countryObject of iterator) {
            if (checkForMatches(countryObject)) {
                newCountryArray.push(countryObject)
            }
        }
        return newCountryArray;
    }

    const handleFormSubmit = (evt:FormEvent) => {
        evt.preventDefault();
        if (!formRef.current) {
            return
        }
        const form = formRef.current as HTMLFormElement;
        const searchData = new FormData(form);
        const countryMapValues = countryObject.countriesMap.countries.values();
        let newArrayToShow:receivedCountry[] = [];
        const regionValue = searchData.get('region-filter') as string | null;
        const searchValue = searchData.get('country-name') as string | null;
        if (regionValue) {
            filterRegions(countryMapValues, regionValue, newArrayToShow)
            if (searchValue) {
                newArrayToShow = searchForCountry(newArrayToShow, searchValue);
            }
        } else {
            if (searchValue) {
                newArrayToShow = searchForCountry(countryMapValues, searchValue);
            }
        }
        if (countryObject.setter) {
            countryObject.setter(newArrayToShow);
        }
    }

    return (
        <StyledForm action={'#'} ref={formRef} method={'get'} onSubmit={handleFormSubmit}>
            <SearchInput placeholder='Search for a country'></SearchInput>
            <SelectInput optionsArray={optionsArray}></SelectInput>
        </StyledForm>
    )
}
export default SearchForm