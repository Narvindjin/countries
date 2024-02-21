import styled from "styled-components";
import {fontBold, fontLight, textNormal} from "../../mixins";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
`

const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    
    & img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`

const TextContainer = styled.div`
    padding: 20px 15px 30px 15px;
    display: flex;
    flex-direction: column;
`

const CountryTitle = styled.h2 `
    margin-top: 0;
    margin-bottom: 20px;
    ${fontBold};
    font-size: 2.2rem;
`

const DetailsContainer = styled.dl`
    display: flex;
    flex-direction: column;
    gap: 5px;
    ${textNormal};
`

const DetailsTerm = styled.dt`
    ${fontBold};
    
    &:after {
        content: ': ';
    }
`

const DetailsDescription = styled.dd`
    ${fontLight};
`

export {StyledCard, CountryTitle, DetailsDescription, DetailsContainer, DetailsTerm, TextContainer, ImageContainer}
