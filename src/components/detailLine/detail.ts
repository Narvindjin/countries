import styled from "styled-components";
import {textNormal, fontNormal, fontLight} from "../../mixins";

const DetailsContainer = styled.dl`
    display: flex;
    flex-direction: row;
    margin: 0;
    gap: 5px;

    &:first-of-type {
        margin-top: auto;
    }
`

const DetailsTerm = styled.dt`
    ${fontNormal};
    text-transform: capitalize;
    
    &:after {
        content: ': ';
    }
`

const DetailsDescription = styled.dd`
    ${fontLight};
    margin-left: 0;
`

export {DetailsTerm, DetailsDescription, DetailsContainer}