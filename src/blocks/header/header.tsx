import React from 'react';
import StyledContainer from '../../components/container/container';
import ModeSwitcher from '../../components/modeSwitcher/modeSwitcher';
import { StyledHeader, HeaderContainer, HeaderLink } from './styles';
import {theme} from "../../theme";

interface headerProps {
    changeHandler: () => void;
    selectedTheme: theme;
}

function Header({changeHandler, selectedTheme}:React.PropsWithChildren<headerProps>) {
    return (
        <StyledHeader>
            <StyledContainer>
                <HeaderContainer>
                    <HeaderLink href={'/'}>Where in the world?</HeaderLink>
                    <ModeSwitcher changeHandler={changeHandler} selectedTheme={selectedTheme}></ModeSwitcher>
                </HeaderContainer>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header