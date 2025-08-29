import styled from "styled-components";
import {fontLight} from "../../mixins";
import {shadowAndOpacity} from "../../mixins";

const ButtonLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 7px;
    align-items: center;
    width: 100px;
    min-width: 100px;
    position: relative;
    ${fontLight};
    ${shadowAndOpacity}
`

export {ButtonLink}