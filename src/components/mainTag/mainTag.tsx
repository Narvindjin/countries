import React from 'react';
import {StyledMain} from "./styles";



const MainTag = ({children}:React.PropsWithChildren) => {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}

export default MainTag