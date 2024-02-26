import React, { useContext } from 'react'
import Select from 'react-select'
import { handleSelectStyles } from './styles';
import { regionInterface } from '../../blocks/wrapper/wrapper';
import { useTheme } from 'styled-components';

interface props {
    optionsArray: regionInterface[];
}

const SelectInput = ({optionsArray}: props) => {
    const currentTheme = useTheme()
    return (
        <Select options={optionsArray} placeholder="Filter by Region" styles={handleSelectStyles(currentTheme)}></Select>
    )
}

export default SelectInput