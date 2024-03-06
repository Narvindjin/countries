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
    width: 35%;
    max-width: 100%;
    height: auto;
    
    & img {
        width: 100%;
        height: auto;
    }
`

const TextContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 2.8rem;
    ${fontBold};
    color: ${(props) => props.theme.colorText};
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
    width: 48%;
    gap: 5px;
`

const StyledDetailsContainer = styled(DetailsContainer)`
    ${textNormalDetail}
`

const BorderContainer = styled.div`
    display: block;
`

const BorderName = styled.span`
    ${textNormalDetail};
    ${fontBold};
`

const BorderList = styled.ul`
    padding: 0;
    margin: 0;
    display: inline-flex;
    gap: 5px;
    list-style-type: none;
`

const BorderButton = styled.div`
    
`

export {StyledArticle, StyledDetailsContainer, ImageContainer, TextContainer, Title, ColumnContainer, Column, BorderContainer, BorderName, BorderList, BorderButton}