import React, { ChangeEvent, useState } from 'react';
import {InvisibleLabel, StyledInput, InputContainer} from "./styles";

interface Props {
    placeholder: string
}

const SearchInput = ({placeholder}: Props) => {
    const [filled, setFilled] = useState(false)
    const [currentQuery, setCurrentQuery] = useState('');
    const onChangeHandler = (evt:ChangeEvent<HTMLInputElement>) => {
            setFilled(true)
            setCurrentQuery(evt.currentTarget.value)
            evt.currentTarget.form?.requestSubmit();
    }

    return (
        <InputContainer $filled={filled}>
            <InvisibleLabel htmlFor={'country-name'}>{placeholder}</InvisibleLabel>
            <StyledInput name={'country-name'} value={currentQuery} id={'country-name'} onChange={onChangeHandler} placeholder={placeholder} $filled={filled}/>
        </InputContainer>
    )
}

export default SearchInput;