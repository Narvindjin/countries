import React from 'react';
import StyledContainer from '../../components/container/container';
import ModeSwitcher from '../../components/modeSwitcher/modeSwitcher';
import { StyledHeader, HeaderContainer, HeaderLink } from './styles';

function Header() {
    return (
        <StyledHeader>
            <StyledContainer>
                <HeaderContainer>
                    <HeaderLink>Where in the world?</HeaderLink>
                    <ModeSwitcher></ModeSwitcher>
                </HeaderContainer>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header