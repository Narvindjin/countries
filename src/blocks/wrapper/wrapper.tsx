import React, {useState, useEffect, Dispatch, SetStateAction, useContext} from "react";
import {StyledWrapper, Loader, LoaderContainer, LoaderInner, LoaderText} from "./styles";
import Header from "../header/header";
import MainTag from "../../components/mainTag/mainTag";
import MainPage from "../../pages/main/mainPage";
import {jsonFetchGet} from "../../components/jsonFetch/jsonFetch";
import {receivedCountry, countryMap} from "../../interfacesAPI/interfacesAPI";
import {CountryContext} from "../../contexts/contexts";
import {Outlet, useLoaderData} from "react-router-dom";
import {LoaderInterface} from "../../index";

const FIRST_FETCH_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,nativeName,currencies,population,subregion,tld,languages,borders,flags,cca3'

interface props {
    changeThemeHandler: () => void;
}

interface regionInterface {
    value: string|null;
    label: string;
}

const Wrapper = ({changeThemeHandler}: React.PropsWithChildren<props>) => {
    const actualCountryObject = useContext(CountryContext);
    const [isLoading, switchLoadingStatus] = useState(true);
    const [isOkay, switchOkay] = useState(true);
    const loaderData:LoaderInterface = useLoaderData() as LoaderInterface;

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

    const loadCountries = async () => {
        const newOptionsSet: Set<string> = new Set();
        const tempCountriesMap: countryMap = new Map();
        const responseObject = loaderData.apiData;
        if (responseObject === null) {
            switchOkay(false);
        } else {
            responseObject.sort((a,b) => {
                if (a.name.common > b.name.common) {
                    return 1
                } else {
                    return -1
                }
            })
            responseObject.forEach((element: receivedCountry) => {
                tempCountriesMap.set(element.cca3, element);
                const region = element.region.toLowerCase();
                if (!newOptionsSet.has(region)) {
                    newOptionsSet.add(region);
                }
            });
            const newOptionsArray:regionInterface[] = actualCountryObject.optionsArray;
            for (const option of newOptionsSet.values()) {
                const regionObject:regionInterface = {
                    value: option,
                    label: option,
                }
                newOptionsArray.push(regionObject);
            }
            if (!actualCountryObject.countriesMapSetter || !actualCountryObject.setter || !actualCountryObject.optionsArraySetter) {
                console.log('error with country object');
                return
            }
            actualCountryObject.optionsArraySetter(newOptionsArray);
            actualCountryObject.countriesMapSetter({countries: tempCountriesMap})
            const firstArray = Array.from(tempCountriesMap.values());
            actualCountryObject.setter(firstArray)
            const firstPageArray = firstArray.slice(0, actualCountryObject.amountPerPage);
            const promises:Promise<string>[] = [];
            firstPageArray.forEach((country) => {
                if (country) {
                    promises.push(preloadImage(country.flags.png))
                }
            })
            await Promise.all(promises)
            console.log(promises);
            loadingHandler();
        }
    }

    useEffect(() => {
        if (isLoading) {
            loadCountries();
        }
    }, [isLoading])

    return (
        <>
            {isLoading ? (
                <LoaderContainer>
                    <LoaderInner>
                    <LoaderText>Loading...</LoaderText>
                    <Loader></Loader>
                    </LoaderInner>
                </LoaderContainer>
            ) : (
                isOkay ?
                    (
                        <StyledWrapper>
                            <Header changeThemeHandler={changeThemeHandler}/>
                            <MainTag>
                                <Outlet></Outlet>
                            </MainTag>
                        </StyledWrapper>) :
                    "there's been a problem with API :("
            )}
        </>
    )
}

export default Wrapper
export type {regionInterface}