import React from 'react';
import StyledContainer from '../../components/container/container';
import ModeSwitcher from '../../components/modeSwitcher/modeSwitcher';
import { StyledHeader, HeaderContainer, HeaderLink } from './styles';

interface headerProps {
    changeThemeHandler: () => void;
}

function Header({changeThemeHandler}:React.PropsWithChildren<headerProps>) {
    return (
        <StyledHeader>
            <StyledContainer>
                <HeaderContainer>
                    <HeaderLink to={'/'}>Where in the world?</HeaderLink>
                    <ModeSwitcher changeHandler={changeThemeHandler}></ModeSwitcher>
                </HeaderContainer>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header