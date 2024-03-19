import React, {useContext} from 'react';
import {
    currencyDictionary, currencyInterface,
    languageDictionary, nativeNameInterfaceInner,
    nativeNameInterfaceOuter,
    receivedCountry,
} from "../../interfacesAPI/interfacesAPI";
import {
    StyledArticle,
    StyledDetailsContainer,
    ImageContainer,
    TextContainer,
    Title,
    ColumnContainer,
    Column, BorderContainer, BorderName, BorderButton
} from "./styles";
import {DetailsTerm, DetailsDescription} from "../detailLine/detail";
import {Link} from "react-router-dom";
import {CountryContext} from "../../contexts/contexts";

interface props {
    country: receivedCountry | null
}

type objectInterfaces = nativeNameInterfaceOuter | currencyDictionary | languageDictionary;

type lowerObjectInterfaces = nativeNameInterfaceInner | currencyInterface | string;

const isNativeName = (object: lowerObjectInterfaces): object is nativeNameInterfaceInner => {
    return typeof object === "object" && "common" in object;
}

const isCurrency = (object: lowerObjectInterfaces): object is currencyInterface => {
    return typeof object === "object" && "name" in object;
}

const CountryBlock = ({country}: props) => {
    const actualCountryObject = useContext(CountryContext)

    const constructString = (object: objectInterfaces) => {
        let stringToReturn: string = '';
        if (country) {
            for (const localName in object) {
                if (isNativeName(object[localName])) {
                    const propertyObject = object[localName] as nativeNameInterfaceInner;
                    if (stringToReturn === '') {
                        stringToReturn = propertyObject.common;
                    } else {
                        stringToReturn = stringToReturn + ', ' + propertyObject.common;
                    }
                } else if (isCurrency(object[localName])) {
                    const propertyObject = object[localName] as currencyInterface;
                    if (stringToReturn === '') {
                        stringToReturn = propertyObject.name;
                    } else {
                        stringToReturn = stringToReturn + ', ' + propertyObject.name;
                    }
                } else {
                    const propertyString = object[localName] as string
                    if (stringToReturn === '') {
                        stringToReturn = propertyString;
                    } else {
                        stringToReturn = stringToReturn + ', ' + propertyString;
                    }
                }
            }
        }
        return stringToReturn
    }

    const getBorderingCountryName = (key:string) => {
        const countryObject = actualCountryObject.countriesMap.countries.get(key);
        if (countryObject) {
            return countryObject.name.common
        } else {
            return null
        }
    }
    return (
        <>
            {country ? (<StyledArticle>
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
                                <DetailsDescription>{constructString(country.name.nativeName)}</DetailsDescription>
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
                            <DetailsDescription>{constructString(country.currencies)}</DetailsDescription>
                        </StyledDetailsContainer>
                        <StyledDetailsContainer>
                            <DetailsTerm>Languages</DetailsTerm>
                            <DetailsDescription>{constructString(country.languages)}</DetailsDescription>
                        </StyledDetailsContainer>
                        </Column>
                    </ColumnContainer>
                    {country.borders.length > 0?
                    <BorderContainer>
                        <BorderName>Border Countries: </BorderName>
                        {country.borders.map((borderingCountry) => {
                            borderingCountry = borderingCountry.toLowerCase();
                            return (
                                <div key={borderingCountry}>
                                    <Link to={'/' + borderingCountry}>
                                        {<BorderButton>{getBorderingCountryName(borderingCountry)}</BorderButton>}
                                    </Link>
                                </div>
                            )
                        })}
                    </BorderContainer>: null
                    }
                </TextContainer>
            </StyledArticle>) : 'no country :('
            }
        </>
    )
}

export default CountryBlock;