import React, {MutableRefObject, useEffect, useState} from 'react'
import Select, { ActionMeta, SingleValue } from 'react-select'
import { handleSelectStyles, FlexContainer } from './styles';
import { regionInterface } from '../../blocks/wrapper/wrapper';
import { useTheme } from 'styled-components';
import {InvisibleLabel} from "../searchInput/styles";

interface props {
    optionsArray: regionInterface[];
    form: MutableRefObject<HTMLFormElement | null>;
}

const SelectInput = ({optionsArray, form}: props) => {
    const currentTheme = useTheme();
    const [currentOption, setCurrentOption] = useState<regionInterface | null>(null)

    useEffect(() => {
        if (currentOption) {
            form.current?.requestSubmit()
        }
    }, [currentOption, form]);

    const onChangeHandler = (newValue: SingleValue<regionInterface>, actionMeta: ActionMeta<regionInterface>) => {
        if (newValue && form.current) {
            setTimeout(() => {
                setCurrentOption(newValue);
            }, 1)
        }
    }
    return (
        <FlexContainer>
            <InvisibleLabel htmlFor={'region-filter'}>Filter by Region</InvisibleLabel>
            <Select isSearchable={false} value={currentOption} onChange={onChangeHandler} name={'region-filter'} id={'region-filter'} options={optionsArray} placeholder="Filter by Region" styles={handleSelectStyles(currentTheme)}></Select>
        </FlexContainer>
    )
}

export default SelectInput