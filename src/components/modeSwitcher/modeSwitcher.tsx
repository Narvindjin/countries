import React from 'react';
import { SwitcherButton } from './styles';
import {theme} from "../../theme";

interface props {
    changeHandler: () => void;
    selectedTheme: theme;
}

const ModeSwitcher = ({changeHandler, selectedTheme}:React.PropsWithChildren<props>) => {
    return (
        <SwitcherButton onClick={(() => changeHandler)}>
            <span>{selectedTheme.theme==="dark"?"Dark Mode":"Light Mode"}</span>
        </SwitcherButton>
    )
}

export default ModeSwitcher