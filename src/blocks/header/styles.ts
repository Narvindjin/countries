import styled from "styled-components";
import media from "../../breakpoints";
import {fontBold} from "../../mixins";

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    background-color: ${(props) => props.theme.colorElement};
    padding-top: 15px;
    padding-bottom: 15px;
    
    @media (${media}) {
        position: fixed;
        top: 0;
        left: 0;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`

const headerLink = styled.a`
    display: block;
    
`