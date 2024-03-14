import styled from "styled-components";
import {fontLight} from "../../mixins";
import {shadowStandard} from "../../mixins";

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
    ${shadowStandard}
`

export {ButtonLink}