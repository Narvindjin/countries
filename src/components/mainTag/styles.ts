import styled from "styled-components";
import media from "../../breakpoints";

const StyledMain = styled.main`
    @media (${media.mobile}) {
        margin-top: 70px;
    }
`

export {StyledMain}