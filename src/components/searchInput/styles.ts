import styled from "styled-components";
import {visuallyHidden, textNormal} from "../../mixins";

const StyledInput = styled.input`
    display: flex;
    flex-direction: row;
    position: relative;
    padding-left: 50px;
    padding-right: 20px;
    background-color: ${(props) => props.theme.colorElement};
    color: ${(props) => props.theme.colorInput};
    border: none;
    border-radius: 5px;
    min-width: 500px;
    min-height: 60px;
    align-items: center;
    ${textNormal};
`

const InvisibleLabel = styled.label`
    ${visuallyHidden};
`

export {StyledInput, InvisibleLabel}