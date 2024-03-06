import styled from "styled-components";
import {fontNormal, fontLight} from "../../mixins";

const DetailsContainer = styled.dl`
    display: inline;
    margin: 0;
`

const DetailsTerm = styled.dt`
    display: inline;
    ${fontNormal};
    text-transform: capitalize;
    
    &:after {
        content: ': ';
    }
`

const DetailsDescription = styled.dd`
    display: inline;
    ${fontLight};
    margin-left: 0;
`

export {DetailsTerm, DetailsDescription, DetailsContainer}