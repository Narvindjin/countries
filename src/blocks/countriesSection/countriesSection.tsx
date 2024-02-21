import React from 'react';
import StyledContainer from "../../components/container/container";
import CountriesList from "../../components/countriesList/countriesList";
import {StyledForm, SectionContainer} from "./styles";
import SearchInput from "../../components/searchInput/searchInput";
import SelectInput from "../../components/selectInput/selectInput";

const CountriesSection = () => {
    return (
        <StyledContainer>
            <SectionContainer>
                <StyledForm>
                    <SearchInput></SearchInput>
                </StyledForm>
                <CountriesList></CountriesList>
            </SectionContainer>
        </StyledContainer>
    )
}

export default CountriesSection