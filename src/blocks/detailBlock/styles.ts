import styled from "styled-components";
import {textNormalDetail} from "../../mixins";
import {ButtonLink} from "../../components/button/buttonLink";
import media from "../../breakpoints";

const BackButton = styled(ButtonLink)`

`

const BlockContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.desktopMargin};
    padding-top: calc(${(props) => props.theme.desktopMargin} + 30px);
    position: relative;
    ${textNormalDetail};
`

export {BlockContainer, BackButton}