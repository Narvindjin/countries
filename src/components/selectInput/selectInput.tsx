import React, { useContext } from 'react'
import Select from 'react-select'
import { handleSelectStyles } from './styles';
import { regionInterface } from '../../blocks/wrapper/wrapper';
import { useTheme } from 'styled-components';
import {InvisibleLabel} from "../searchInput/styles";

interface props {
    optionsArray: regionInterface[];
}

const SelectInput = ({optionsArray}: props) => {
    const currentTheme = useTheme()
    return (
        <div>
            <InvisibleLabel htmlFor={'region-filter'}>Filter by Region</InvisibleLabel>
            <Select name={'region-filter'} id={'region-filter'} options={optionsArray} placeholder="Filter by Region" styles={handleSelectStyles(currentTheme)}></Select>
        </div>
    )
}

export default SelectInput