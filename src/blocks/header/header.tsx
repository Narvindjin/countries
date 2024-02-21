import React from 'react';
import StyledContainer from '../../components/container/container';
import ModeSwitcher from '../../components/modeSwitcher/modeSwitcher';
import { StyledHeader, HeaderContainer, HeaderLink } from './styles';
import {theme} from "../../theme";

interface headerProps {
    changeThemeHandler: () => void;
    selectedTheme: theme;
}

function Header({changeThemeHandler, selectedTheme}:React.PropsWithChildren<headerProps>) {
    return (
        <StyledHeader>
            <StyledContainer>
                <HeaderContainer>
                    <HeaderLink href={'/'}>Where in the world?</HeaderLink>
                    <ModeSwitcher changeHandler={changeThemeHandler} selectedTheme={selectedTheme}></ModeSwitcher>
                </HeaderContainer>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header