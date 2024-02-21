import React, {useState, useEffect} from "react";
import {StyledWrapper} from "./styles";
import Header from "../header/header";
import MainTag from "../../components/mainTag/mainTag";
import MainPage from "../../pages/main/mainPage";
import {theme} from "../../theme";
import { jsonFetchGet } from "../../components/jsonFetch/jsonFetch";

const FIRST_FETCH_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,nativeName,currencies,population,subregion,tld,languages,borders,flags'
const FIRST_PAGE_COUNTRIES = 20;

interface props {
    changeThemeHandler: () => void;
    selectedTheme: theme;
}

interface recievedCountry {
}

const countriesMap = new Map();

const Wrapper = ({changeThemeHandler, selectedTheme}:React.PropsWithChildren<props>) => {
    const [isLoading, switchLoadingStatus] = useState(true);
    const [isOkay, switchOkay] = useState(true);

    useEffect(() => {
        const loadMainCountries = async() => {
                const responseObject = await jsonFetchGet(FIRST_FETCH_URL);
                if (responseObject === null) {
                    switchOkay(false);
                } else {
                    console.log(responseObject);
                    responseObject.forEach(element => {
                        
                    });
                }
                switchLoadingStatus(false);
            }
        loadMainCountries();
    }, [])

    return (
        <>
            {isLoading? (
                'loading placeholder'
            ) : (
                isOkay?
                (<StyledWrapper>
                    <Header changeThemeHandler={changeThemeHandler} selectedTheme={selectedTheme}/>
                    <MainTag>
                        <MainPage></MainPage>
                    </MainTag>
                </StyledWrapper>):
                "there's been a problem with API :("
            )}
        </>
    )
}

export default Wrapper