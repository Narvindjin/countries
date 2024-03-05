import styled from "styled-components";
import {fontBold, textNormalDetail} from "../../mixins";
import media from "../../breakpoints";
import {DetailsContainer} from "../detailLine/detail";

const StyledArticle = styled.article`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: nowrap;
    gap: 100px;
    position: relative;
    align-items: center;
    justify-content: space-between;
`

const ImageContainer = styled.div`
    width: 40%;
    max-width: 100%;
    height: auto;
    
    & img {
        width: 100%;
        height: auto;
    }
`

const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 2.8rem;
    ${fontBold};
    color: ${(props) => props.theme.colorElement};
    margin-top: 0;
    margin-bottom: 40px;
    
    @media (${media.mobile}) {
        font-size: 2.2rem;
    }
`

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45%;
    gap: 5px;
`

const StyledDetailsContainer = styled(DetailsContainer)`
    ${textNormalDetail}
`

export {StyledArticle, StyledDetailsContainer, ImageContainer, TextContainer, Title, ColumnContainer, Column}