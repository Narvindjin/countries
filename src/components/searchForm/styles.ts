import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: ${(props) => props.theme.desktopMargin};
`