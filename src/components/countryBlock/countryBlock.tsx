import React from 'react';
import {receivedCountry} from "../../interfacesAPI/interfacesAPI";
import {
    StyledArticle,
    StyledDetailsContainer,
    ImageContainer,
    TextContainer,
    Title,
    ColumnContainer,
    Column
} from "./styles";
import {DetailsTerm, DetailsDescription} from "../detailLine/detail";

interface props {
    country: receivedCountry | null
}

const CountryBlock = ({country}: props) => {
    return (
        <>
            {country? (<StyledArticle>
                <ImageContainer>
                    <img src={country.flags.png}
                         alt={country.flags.alt ? country.flags.alt : 'Flag of ' + country.name.official} width={300}
                         height={210}/>
                </ImageContainer>
                <TextContainer>
                    <Title>{country.name.common}</Title>
                    <ColumnContainer>
                        <Column>
                            <StyledDetailsContainer>
                                <DetailsTerm>Native name</DetailsTerm>
                                <DetailsDescription>{() => {
                                let stringToReturn;
                                for (const name in country.name.nativeName) {
                                    stringToReturn = stringToReturn + name.common;
                                }
                                return stringToReturn
                            }}</DetailsDescription>
                            </StyledDetailsContainer>
                            <StyledDetailsContainer>
                                <DetailsTerm>Population</DetailsTerm>
                                <DetailsDescription>{country.population}</DetailsDescription>
                            </StyledDetailsContainer>
                            <StyledDetailsContainer>
                                <DetailsTerm>Region</DetailsTerm>
                                <DetailsDescription>{country.region}</DetailsDescription>
                            </StyledDetailsContainer>
                            <StyledDetailsContainer>
                                <DetailsTerm>Sub Region</DetailsTerm>
                                <DetailsDescription>{country.subregion}</DetailsDescription>
                            </StyledDetailsContainer>
                            <StyledDetailsContainer>
                                <DetailsTerm>Capital</DetailsTerm>
                                <DetailsDescription>{country.capital}</DetailsDescription>
                            </StyledDetailsContainer>
                        </Column>
                        <Column>
                            <StyledDetailsContainer>
                                <DetailsTerm>Top Level Domain</DetailsTerm>
                                <DetailsDescription>{country.tld}</DetailsDescription>
                            </StyledDetailsContainer>
                            <StyledDetailsContainer>
                            <DetailsTerm>Currencies</DetailsTerm>
                            <DetailsDescription>{country.currencies}</DetailsDescription>
                        </StyledDetailsContainer>
                        <StyledDetailsContainer>
                            <DetailsTerm>Languages</DetailsTerm>
                            <DetailsDescription>{country.languages}</DetailsDescription>
                        </StyledDetailsContainer>
                        </Column>
                    </ColumnContainer>
                </TextContainer>
            </StyledArticle>) : 'no country :('
            }
            </>
            )
            }

            export default CountryBlock;