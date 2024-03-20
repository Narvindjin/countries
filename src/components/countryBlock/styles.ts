import styled from "styled-components";
import {fontBold, textNormalDetail, blockMargin, transitionRules} from "../../mixins";
import media from "../../breakpoints";
import {ButtonLink} from "../button/buttonLink";
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
    ${blockMargin};
    
    @media (${media.tablet}) {
        gap: 75px;
    }
    
    @media (${media.mobile}) {
        flex-direction: column;
    }
`

interface outsideProps {
    $isFirstLoad: boolean
}

const ImageContainer = styled.div<outsideProps>`
    width: 35%;
    max-width: 100%;
    height: auto;
    translate: ${({$isFirstLoad}) => $isFirstLoad? '-40px 0': 0};
    opacity: ${({$isFirstLoad}) => $isFirstLoad? 0: 1};
    
    ${transitionRules};
    
    & img {
        width: 100%;
        height: auto;
    }
    
    @media (${media.tablet}) {
        width: 50%;
    }
    
    @media (${media.mobile}) {
        width: 100%;
        translate: ${({$isFirstLoad}) => $isFirstLoad? '0 40px': 0};
    }
`

const TextContainer = styled.div<outsideProps>`
    width: 60%;
    display: flex;
    flex-direction: column;
    translate: ${({$isFirstLoad}) => $isFirstLoad? '40px 0': 0};
    opacity: ${({$isFirstLoad}) => $isFirstLoad? 0: 1};
    ${transitionRules};
    
    @media (${media.tablet}) {
        width: 40%;
    }
    
    @media (${media.mobile}) {
        width: 100%;
        translate: ${({$isFirstLoad}) => $isFirstLoad? '0 40px': 0};
    }
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
    gap: 15px;
    
    @media (${media.tablet}) {
        flex-direction: column;
        gap: 40px;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    gap: 12px;
    
    @media (${media.tablet}) {
        width: 100%;
    }
`

const StyledDetailsContainer = styled(DetailsContainer)`
    ${textNormalDetail}
`

const BorderContainer = styled.div`
    display: inline-flex;
    margin-top: 70px;
    column-gap: 15px;
    row-gap: 10px;
    flex-wrap: wrap;
    align-items: center;
`

const BorderName = styled.span`
    ${textNormalDetail};
    ${fontBold};
    min-width: fit-content;
`

const BorderButton = styled(ButtonLink)`
    width: fit-content;
`

export {StyledArticle, StyledDetailsContainer, ImageContainer, TextContainer, Title, ColumnContainer, Column, BorderContainer, BorderName, BorderButton}