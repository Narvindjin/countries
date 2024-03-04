import styled from "styled-components";
import media from "../../breakpoints";
import {fontBold, shadowStandard} from "../../mixins";

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    background-color: ${(props) => props.theme.colorElement};
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    z-index: 10;
    ${shadowStandard}

    @media (${media.tablet}) {
        position: fixed;
        top: 0;
        left: 0;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${(props) => props.theme.desktopMargin};
    justify-content: space-between;

    @media (${media.mobile}) {
        gap: 15px;
    }
`

const HeaderLink = styled.a`
    display: block;
    font-size: 2.4rem;
    ${fontBold};

    @media (${media.mobile}) {
        font-size: 2rem;
    }
`

export {StyledHeader, HeaderContainer, HeaderLink}