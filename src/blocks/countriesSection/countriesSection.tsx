import React, {useState} from 'react';
import StyledContainer from "../../components/container/container";
import CountriesList from "../../components/countriesList/countriesList";
import {StyledForm, SectionContainer} from "./styles";
import SearchInput from "../../components/searchInput/searchInput";
import SelectInput from "../../components/selectInput/selectInput";
import {mapObjectInterface} from "../../interfacesAPI/interfacesAPI";
import { regionInterface } from '../wrapper/wrapper';

interface sectionInterface {
    countriesMapObject: mapObjectInterface
    firstArray: string[],
    optionsArray: regionInterface[],
}

const CountriesSection = ({countriesMapObject, optionsArray, firstArray, children}:React.PropsWithChildren<sectionInterface>) => {
    const [countriesArray, changeCountriesArray] = useState(firstArray);

    return (
        <StyledContainer>
            <SectionContainer>
                <StyledForm>
                    <SearchInput placeholder='Search for a country'></SearchInput>
                    <SelectInput optionsArray = {optionsArray}></SelectInput>
                </StyledForm>
                <CountriesList countriesToShow={countriesArray} countriesMapObject = {countriesMapObject}></CountriesList>
            </SectionContainer>
        </StyledContainer>
    )
}

export default CountriesSection