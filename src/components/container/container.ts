import styled from "styled-components";
import media from "../../breakpoints";

export const StyledContainer = styled.div`
    padding-left: 90px;
    padding-right: 90px;
    height: 100%;
    
    @media (${media.mobile}) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

export default StyledContainer