import styled from "styled-components";

const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-flow: row;
    gap: 65px;
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.desktopMargin};
`

const Divider = styled.li`
    position: absolute;
    z-index: 0;
    bottom: 100px;
    height: 1px;
    width: 100%;
`

export {StyledList, Divider}