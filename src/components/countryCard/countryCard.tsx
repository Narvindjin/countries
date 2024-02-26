import React from 'react';
import {TextContainer, DetailsContainer, ImageContainer, DetailsDescription, DetailsTerm, StyledCard, CountryTitle} from "./styles";
import {receivedCountry} from "../../interfacesAPI/interfacesAPI";

interface card {
    country: receivedCountry;
}

const CountryCard = ({country}:card) => {
    return (
        <StyledCard href="#">
            <ImageContainer>
                <img src={country.flags.png} alt={country.flags.alt?country.flags.alt:'Flag of ' + country.name.official} width={300} height={210}/>
            </ImageContainer>
            <TextContainer>
                <CountryTitle>{country.name.common}</CountryTitle>
                <DetailsContainer>
                    <DetailsTerm>Population</DetailsTerm>
                    <DetailsDescription>{country.population}</DetailsDescription>
                </DetailsContainer>
                <DetailsContainer>
                    <DetailsTerm>Region</DetailsTerm>
                    <DetailsDescription>{country.region}</DetailsDescription>
                </DetailsContainer>
                <DetailsContainer>
                    <DetailsTerm>Capital</DetailsTerm>
                    <DetailsDescription>{country.capital}</DetailsDescription>
                </DetailsContainer>
            </TextContainer>
        </StyledCard>
    )
}

export default CountryCard;