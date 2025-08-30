import React, { useContext } from 'react';
import { SwitcherButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from 'styled-components';

interface props {
    changeHandler: () => void;
}

const ModeSwitcher = ({changeHandler}:React.PropsWithChildren<props>) => {
    const context = useContext(ThemeContext)
    return (
        <SwitcherButton onClick={(() => changeHandler())}>
            <span>{context && context.theme==="dark"?
            <FontAwesomeIcon icon={faSun}/>:<FontAwesomeIcon icon={faMoon}/>}</span>
            <span>{context && context.theme==="dark"?"Light Mode":"Dark Mode"}</span>
        </SwitcherButton>
    )
}

export default ModeSwitcher