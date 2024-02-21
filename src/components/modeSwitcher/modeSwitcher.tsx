import React from 'react';
import { SwitcherButton } from './styles';
import {theme} from "../../theme";

interface props {
    switchHandler: () => void;
    selectedTheme: theme;
}

const ModeSwitcher = ({switchHandler, selectedTheme}:React.PropsWithChildren<props>) => {
    return (
        <SwitcherButton onClick={switchHandler}>
            <span>{selectedTheme.theme==="dark"?"Dark Mode":"Light Mode"}</span>
        </SwitcherButton>
    )
}

export default ModeSwitcher