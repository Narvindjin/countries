import styled from "styled-components";
import media from "../../breakpoints";

const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-flow: row;
    gap: 65px;
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.desktopMargin};

    @media (${media.smallDesktop}) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (${media.tablet}) {
        gap: 30px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (${media.mobile}) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Divider = styled.li`
    position: absolute;
    z-index: 0;
    bottom: 600px;
    height: 1px;
    width: 100%;
`

export {StyledList, Divider}