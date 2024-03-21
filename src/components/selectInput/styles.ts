import { GroupBase, StylesConfig } from "react-select"
import { regionInterface } from "../../blocks/wrapper/wrapper"
import { theme } from "../../theme"
import styled from "styled-components"
import { shadowStandardValue } from "../../mixins"

const FlexContainer = styled.div`
  display: flex;
`

const handleSelectStyles = (theme:theme) => {
    const selectStyles:StylesConfig<regionInterface, false, GroupBase<regionInterface>> = {
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: "100%",
          backgroundColor: theme.colorElement,
          color: theme.colorText,
          border: 'none',
          minWidth: '200px',
          boxShadow: shadowStandardValue,
          paddingLeft: '10px',
          fontSize: '1.4rem',
          transition: '',
          minHeight: '45px',
            cursor: 'pointer',
        }),
        indicatorSeparator: (baseStyles, state) => ({
          ...baseStyles,
          display: 'none',
        }),
        dropdownIndicator: (base, state) => ({
          ...base,
          color: theme.colorText,
        }),
        placeholder: (base, state) => ({
          ...base,
          opacity: 1,
          color: theme.colorText,
        }),
        option: (base, state) => ({
          ...base,
          color: state.isFocused?'orange':theme.colorText,
          padding: '5px 15px 5px 15px',
          backgroundColor: 'transparent',
          textTransform: 'capitalize',
            cursor: 'pointer'
        }),
        input: (base, state) => ({
          ...base,
        }),
        menu: (base, state) => ({
          ...base,
          backgroundColor: theme.colorElement,
          border: 'none',
          boxShadow: shadowStandardValue,
          paddingTop: '10px',
          paddingBottom: '10px',
        }),
        singleValue: (base, state) => ({
          ...base,
          color: theme.colorText,
          textTransform: 'capitalize',
        })
    }
    return selectStyles
}

export {handleSelectStyles, FlexContainer}