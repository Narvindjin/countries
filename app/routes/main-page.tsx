import type { Route } from "./+types/main-page";
import { Outlet, type Params } from "react-router";
import type {receivedCountry} from "../interfacesAPI/interfacesAPI";
import {jsonFetchGet} from "../components/jsonFetch/jsonFetch";
import React, { useState } from 'react';
import Wrapper from "../blocks/wrapper/wrapper";
import { lightTheme, darkTheme } from "../theme";
import GlobalStyle from "../globalStyles";
import { ThemeProvider } from "styled-components";
import {CountryContextContainer} from "../contexts/contexts";

export interface LoaderInterface {
    params: Params,
    apiData: receivedCountry[] | null,
}

const FIRST_FETCH_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,nativeName,currencies,population,languages,borders,flags,cca3'

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  const apiData: receivedCountry[] | null = await jsonFetchGet(FIRST_FETCH_URL);
  const returnObject: LoaderInterface = { params, apiData }
  return returnObject
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const cookieName = 'theme-cookie'
    const themeCookie = document.cookie.split("; ")
  .find((row) => row.startsWith(cookieName))
  ?.split("=")[1];
    let firstTheme = lightTheme;
    if (themeCookie === 'dark') {
        firstTheme = darkTheme;
    }
    const [selectedTheme, changeTheme] = useState(firstTheme)
    const changeThemeHandler = () => {
        if (selectedTheme === lightTheme) {
            changeTheme(darkTheme)
            document.cookie=cookieName + "=dark; max-age=31536000; Secure"
        } else {
            changeTheme(lightTheme);
            document.cookie=cookieName + "=light; max-age=31536000; Secure"
        }
    }
    return (
        <React.StrictMode>
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyle />
                <CountryContextContainer>
                    <Wrapper changeThemeHandler={changeThemeHandler} >
                    </Wrapper>
                </CountryContextContainer>
            </ThemeProvider>
        </React.StrictMode>
    );
}