import styled from "styled-components";
import {textNormalDetail} from "../../mixins";
import media from "../../breakpoints";

const BlockContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.desktopMargin};
    padding-top: calc(${(props) => props.theme.desktopMargin} + 30px);
    position: relative;
    ${textNormalDetail};
`

export {BlockContainer}