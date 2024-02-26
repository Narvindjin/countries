import React, { useState } from 'react';
import Wrapper from "./blocks/wrapper/wrapper";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import Header from "./blocks/header/header";
import MainTag from "./components/mainTag/mainTag";
import MainPage from "./pages/main/mainPage";

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
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyle />
                <Wrapper changeThemeHandler={changeThemeHandler} />
        </ThemeProvider>
    );
}

export default App;
