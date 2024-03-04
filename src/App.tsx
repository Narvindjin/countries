import React, { useState } from 'react';
import Wrapper from "./blocks/wrapper/wrapper";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import {CountryContextContainer} from "./contexts/contexts";

function App() {
    const [selectedTheme, changeTheme] = useState(lightTheme)
    const changeThemeHandler = () => {
        if (selectedTheme === lightTheme) {
            changeTheme(darkTheme)
        } else {
            changeTheme(lightTheme);
        }
    }
    return (
        <React.StrictMode>
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyle />
                <CountryContextContainer>
                    <Wrapper changeThemeHandler={changeThemeHandler} />
                </CountryContextContainer>
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default App;
