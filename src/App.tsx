import React, {useState} from 'react';
import {Wrapper} from "./wrapper";
import {lightTheme, darkTheme} from "./theme";
import GlobalStyle from "./globalStyles";
import {ThemeProvider} from "styled-components";

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
          <GlobalStyle/>
          <Wrapper/>
      </ThemeProvider>
  );
}

export default App;
