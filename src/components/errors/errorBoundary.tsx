import React, {useEffect} from 'react';
import {useRouteError} from "react-router-dom";
const ErrorBoundary = () => {
    const error = useRouteError();
    useEffect(() => {
        console.log(error);
    }, []);
    return(
        <div>
            Ошибка
        </div>
    )
}

export default ErrorBoundary;