import React, {useState, useEffect, Dispatch, SetStateAction} from "react";
import {StyledWrapper} from "./styles";
import Header from "../header/header";
import MainTag from "../../components/mainTag/mainTag";
import MainPage from "../../pages/main/mainPage";
import {theme} from "../../theme";
import {jsonFetchGet} from "../../components/jsonFetch/jsonFetch";
import {receivedCountry, countryMap, mapObjectInterface} from "../../interfacesAPI/interfacesAPI";

const FIRST_FETCH_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,nativeName,currencies,population,subregion,tld,languages,borders,flags,cca3'

interface props {
    changeThemeHandler: () => void;
    selectedTheme: theme;
}

const Wrapper = ({changeThemeHandler, selectedTheme}: React.PropsWithChildren<props>) => {
    const [isLoading, switchLoadingStatus] = useState(true);
    const [isOkay, switchOkay] = useState(true);
    const COUNTRIES_PER_PAGE = 20;
    const countriesMap: countryMap = new Map();
    const [firstArray, setFirstArray]:[string[], Dispatch<SetStateAction<string[]>>] = useState(['init'])
    const [countriesMapObject, updateMapObject]:[mapObjectInterface, Dispatch<SetStateAction<mapObjectInterface>>] = useState({countries: countriesMap})

    const loadingHandler = () => {
        if (isLoading) {
            switchLoadingStatus(false)
        }
    }

    const preloadImage = (url:string):Promise<string> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                resolve(url)
            }
            img.onerror = () => resolve(url)
            setTimeout (() => {
                resolve(url)
            }, 3000)
        })
    }

    useEffect(() => {
        const loadCountries = async () => {
            const responseObject: receivedCountry[] | null = await jsonFetchGet(FIRST_FETCH_URL);
            if (responseObject === null) {
                switchOkay(false);
            } else {
                responseObject.forEach((element: receivedCountry) => {
                    countriesMap.set(element.cca3, element)
                });
                updateMapObject({countries: countriesMap})
                const newFirstArray = Array.from(countriesMapObject.countries.keys()).slice(0, COUNTRIES_PER_PAGE)
                setFirstArray(newFirstArray)
                const promises:Promise<string>[] = [];
                newFirstArray.forEach((countryKey) => {
                    const country = countriesMap.get(countryKey);
                    if (country) {
                        promises.push(preloadImage(country.flags.png))
                    }
                })
                await Promise.all(promises)
                loadingHandler();
            }
        }
        if (isLoading) {
            loadCountries();
        }
    }, [])

    return (
        <>
            {isLoading ? (
                'loading placeholder'
            ) : (
                isOkay ?
                    (<StyledWrapper>
                        <Header changeThemeHandler={changeThemeHandler} selectedTheme={selectedTheme}/>
                        <MainTag>
                            <MainPage firstArray={firstArray} countriesMapObject={countriesMapObject}></MainPage>
                        </MainTag>
                    </StyledWrapper>) :
                    "there's been a problem with API :("
            )}
        </>
    )
}

export default Wrapper