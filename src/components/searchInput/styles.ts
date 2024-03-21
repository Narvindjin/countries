import styled from "styled-components";
import { visuallyHidden, textNormal, shadowStandard, hoverShadow } from "../../mixins";
import media from "../../breakpoints";

const StyledInput = styled.input<{ $filled: boolean }>`
    display: flex;
    flex-direction: row;
    position: relative;
    padding-left: ${(props) => props.$filled?'20px':'50px'};
    padding-right: 20px;
    background-color: ${(props) => props.theme.colorElement};
    color: ${(props) => props.theme.colorText};
    border: none;
    border-radius: 5px;
    max-width: 100%;
    width: 500px;
    min-height: 45px;
    align-items: center;
    ${textNormal};
    ${hoverShadow};

    @media (${media.tablet}) {
        width: 100%;
    }

    &::placeholder {
        color: ${(props) => props.theme.colorInput};
    }

    &:focus-visible {
        padding-left: 20px;
        z-index: 3;
    }
`

const InputContainer = styled.div<{ $filled: boolean }>`
    position: relative;

    @media (${media.tablet}) {
        width: 100%;
    }

    &::before {
        display: ${((props) => props.$filled ? 'none' : 'block')};
        position: absolute;
        z-index: 2;
        left: 20px;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        width: 15px;
        height: 18px;
        background-repeat: no-repeat;
        background-image: ${(props) => {
        if (props.theme.theme === 'dark') {
            return "url(\x22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(0, 0%, 80%)' viewBox='0 0 512 512'%3E%3Cpath d='M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376A206.8 206.8 0 0 1 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'/%3E%3C/svg%3E\x22)";
        }
        return "url(\x22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(0, 0%, 52%)' viewBox='0 0 512 512'%3E%3Cpath d='M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376A206.8 206.8 0 0 1 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'/%3E%3C/svg%3E\x22)";
    }
    }; 
        content: '';
    };
`

const InvisibleLabel = styled.label`
    ${visuallyHidden};
`

export { StyledInput, InvisibleLabel, InputContainer }