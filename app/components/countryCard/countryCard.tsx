import React from 'react';
import {TextContainer, StyledDetailsContainer, ImageContainer, StyledCard, CountryTitle} from "./styles";
import {DetailsDescription, DetailsTerm} from "../detailLine/detail";
import {receivedCountry} from "../../interfacesAPI/interfacesAPI";
import {Link} from "react-router";

interface card {
    country: receivedCountry;
}

const CountryCard = ({country}:card) => {
    return (
        <Link to={country.cca3}>
            <StyledCard>
                <ImageContainer>
                    <img src={country.flags.png} alt={country.flags.alt?country.flags.alt:'Flag of ' + country.name.official} width={300} height={210}/>
                </ImageContainer>
                <TextContainer>
                    <CountryTitle>{country.name.common}</CountryTitle>
                    <StyledDetailsContainer>
                        <DetailsTerm>Population</DetailsTerm>
                        <DetailsDescription>{country.population}</DetailsDescription>
                    </StyledDetailsContainer>
                    <StyledDetailsContainer>
                        <DetailsTerm>Region</DetailsTerm>
                        <DetailsDescription>{country.region}</DetailsDescription>
                    </StyledDetailsContainer>
                    <StyledDetailsContainer>
                        <DetailsTerm>Capital</DetailsTerm>
                        <DetailsDescription>{country.capital}</DetailsDescription>
                    </StyledDetailsContainer>
                </TextContainer>
            </StyledCard>
        </Link>
    )
}

export default CountryCard;