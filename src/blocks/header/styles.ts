import styled from "styled-components";
import media from "../../breakpoints";
import {fontBold} from "../../mixins";

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    background-color: ${(props) => props.theme.colorElement};
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;

    @media (${media.mobile}) {
        position: fixed;
        top: 0;
        left: 0;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
`

const HeaderLink = styled.a`
    display: block;
    font-size: 2.4rem;
    ${fontBold};
`

export {StyledHeader, HeaderContainer, HeaderLink}