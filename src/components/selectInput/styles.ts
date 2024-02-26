import { CSSObjectWithLabel, ControlProps, GroupBase } from "react-select"
import { regionInterface } from "../../blocks/wrapper/wrapper"
import { theme } from "../../theme"

const handleSelectStyles = (theme:theme) => {
    const selectStyles = {
        control: (baseStyles: CSSObjectWithLabel, state: ControlProps<regionInterface, false, GroupBase<regionInterface>>) => ({
          ...baseStyles,
          height: "100%",
        }),
    }
    return selectStyles
}

export {handleSelectStyles}