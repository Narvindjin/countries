import React, { ChangeEvent, MutableRefObject } from 'react'
import Select, { ActionMeta, SelectOptionActionMeta, SingleValue } from 'react-select'
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
    const onChangeHandler = (newValue: SingleValue<regionInterface>, actionMeta: ActionMeta<regionInterface>) => {
        if (newValue && form.current) {
            setTimeout(() => {
                form.current?.requestSubmit();
            }, 1)
        }
    }
    return (
        <FlexContainer>
            <InvisibleLabel htmlFor={'region-filter'}>Filter by Region</InvisibleLabel>
            <Select isSearchable={false} onChange={onChangeHandler} name={'region-filter'} id={'region-filter'} options={optionsArray} placeholder="Filter by Region" styles={handleSelectStyles(currentTheme)}></Select>
        </FlexContainer>
    )
}

export default SelectInput