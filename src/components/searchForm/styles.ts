import styled from "styled-components";
import media from "../../breakpoints";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: ${(props) => props.theme.desktopMargin};
    flex-wrap: wrap;

    @media (${media.mobile}) {
        gap: 35px;
    }
`