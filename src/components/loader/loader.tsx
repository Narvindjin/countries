import {LoaderIcon, LoaderContainer, LoaderInner, LoaderText} from "./styles";
import React from "react";

const Loader = () => {
    return (
        <LoaderContainer>
                    <LoaderInner>
                    <LoaderText>Loading...</LoaderText>
                    <LoaderIcon></LoaderIcon>
                    </LoaderInner>
                </LoaderContainer>
    )
}

export default Loader;