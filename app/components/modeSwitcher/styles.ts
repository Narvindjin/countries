import styled from "styled-components";
import { hoverFadeOut } from "../../mixins";

const SwitcherButton = styled.button`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    border: none;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colorText};
    background-color: transparent;
    ${hoverFadeOut};
`

export {SwitcherButton}