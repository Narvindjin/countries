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

    const searchForCountry = (iterator) => {

    }

    const handleFormSubmit = (evt:FormEvent) => {
        evt.preventDefault();
        if (!formRef.current) {
            return
        }
        const form = formRef.current as HTMLFormElement;
        const searchData = new FormData(form);
        const countryMapValues = countryObject.countriesMap.countries.values();
        const newKeyArray:string[] = [];
    }

    return (
        <StyledForm action={'#'} ref={formRef} method={'get'} onSubmit={handleFormSubmit}>
            <SearchInput placeholder='Search for a country'></SearchInput>
            <SelectInput optionsArray={optionsArray}></SelectInput>
        </StyledForm>
    )
}
export default SearchForm