import React, {useEffect} from 'react';
import {useRouteError} from "react-router";
const ErrorBoundary = () => {
    const error = useRouteError();
    useEffect(() => {
        console.log(error);
    }, [error]);
    return(
        <div>
            Ошибка
        </div>
    )
}

export default ErrorBoundary;