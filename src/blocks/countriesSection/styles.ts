import styled from "styled-components";
import media from "../../breakpoints";

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.desktopMargin};
    padding-top: ${(props) => props.theme.desktopMargin};
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: ${(props) => props.theme.desktopMargin};
`

export {SectionContainer, StyledForm}

