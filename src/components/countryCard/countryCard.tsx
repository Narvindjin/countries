import React from 'react';
import {TextContainer, DetailsContainer, ImageContainer, DetailsDescription, DetailsTerm, StyledCard, CountryTitle} from "./styles";

const CountryCard = () => {
    return (
        <StyledCard>
            <ImageContainer>
            </ImageContainer>
            <TextContainer>
                <CountryTitle></CountryTitle>
                <DetailsContainer>
                    <DetailsTerm></DetailsTerm>
                    <DetailsDescription></DetailsDescription>
                </DetailsContainer>
            </TextContainer>
        </StyledCard>
    )
}

export default CountryCard;