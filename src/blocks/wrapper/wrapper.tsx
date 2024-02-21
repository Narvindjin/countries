import React from "react";
import {Wrapper} from "./styles";
import Header from "../header/header";
import MainTag from "../../components/mainTag/mainTag";
import MainPage from "../../pages/main/mainPage";
import {theme} from "../../theme";

interface props {
    changeHandler: () => void;
    selectedTheme: theme;
}

const Wrapper = ({changeThemeHandler, selectedTheme}:React.PropsWithChildren<props>) => {
    return(
        <Wrapper>
            <Header changeThemeHandler={changeThemeHandler} selectedTheme={selectedTheme}/>
            <MainTag>
                <MainPage></MainPage>
            </MainTag>
        </Wrapper>
    )
}

export default Wrapper