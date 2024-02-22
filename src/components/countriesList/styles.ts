import styled from "styled-components";

const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-flow: row;
    gap: 30px;
    list-style-type: none;
    padding-left: 0;
`

export {StyledList}