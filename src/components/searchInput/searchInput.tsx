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
            <InvisibleLabel htmlFor={'country-name'}>{placeholder}</InvisibleLabel>
            <StyledInput name={'country-name'} id={'country-name'} onChange={onChangeHandler} placeholder={placeholder} $filled={filled}/>
        </InputContainer>
    )
}

export default SearchInput;