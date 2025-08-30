import React, { useState } from 'react';
import Wrapper from "../blocks/wrapper/wrapper";
import { lightTheme, darkTheme } from "../theme";
import GlobalStyle from "../globalStyles";
import { ThemeProvider } from "styled-components";
import {CountryContextContainer} from "../contexts/contexts";

export default function Home() {
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