import styled from "styled-components";
import {fontBold, textNormal, shadowStandard} from "../../mixins";
import {DetailsContainer} from "../detailLine/detail";

const StyledCard = styled.article`
    display: flex;
    flex-direction: column;
    background-color: ${((props) => props.theme.colorElement)};
    height: 100%;
    ${shadowStandard}
`

const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    
    & img {
        aspect-ratio: 320/210;
        width: 100%;
        height: auto;
        object-fit: fill;
    }
`

const TextContainer = styled.div`
    padding: 20px 30px 40px 30px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
`

const CountryTitle = styled.h2 `
    margin-top: 0;
    margin-bottom: 6px;
    ${fontBold};
    font-size: 2.2rem;
`

const StyledDetailsContainer = styled(DetailsContainer)`
    ${textNormal};
    
    &:first-of-type {
        margin-top: auto;
    }
`

export {StyledCard, CountryTitle, StyledDetailsContainer, TextContainer, ImageContainer}
