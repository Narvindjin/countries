import styled from "styled-components";
import media from "../../breakpoints";

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.desktopMargin};
    padding-top: ${(props) => props.theme.desktopMargin};
    position: relative;
`

export {SectionContainer}

