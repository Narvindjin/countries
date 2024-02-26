import React, { ChangeEvent, useState } from 'react';
import {InvisibleLabel, StyledInput, InputContainer} from "./styles";

interface Props {
    placeholder: string
}

const SearchInput = ({placeholder}: Props) => {
    const [filled, setFilled] = useState(false)
    const onChangeHandler = (evt:ChangeEvent<HTMLInputElement>) => {
        if (evt.currentTarget.value) {
            setFilled(true)
        } else {
            setFilled(false)
        }
    }

    return (
        <InputContainer $filled={filled}>
            <InvisibleLabel>{placeholder}</InvisibleLabel>
            <StyledInput onChange={onChangeHandler} placeholder={placeholder} $filled={filled}/>
        </InputContainer>
    )
}

export default SearchInput;