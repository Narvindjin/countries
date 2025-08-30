import styled from "styled-components";
import {textNormalDetail} from "../../mixins";
import {ButtonLink} from "../../components/button/buttonLink";
import {Link} from "react-router";


const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    width: fit-content;
`
const BackButton = styled(ButtonLink)`
    width: 125px;
    & span {
        margin-left: 10px;
    }
`

const BlockContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.desktopMargin};
    padding-top: calc(${(props) => props.theme.desktopMargin} + 30px);
    position: relative;
    ${textNormalDetail};
`

export {BlockContainer, BackButton, StyledLink}