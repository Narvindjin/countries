import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements, Params,
    Route,
    RouterProvider,
    Routes
} from "react-router-dom";
import ErrorBoundary from "./components/errors/errorBoundary";
import NotFound from "./components/errors/notFound";
import {receivedCountry} from "./interfacesAPI/interfacesAPI";
import {jsonFetchGet} from "./components/jsonFetch/jsonFetch";
import MainPage from "./pages/main/mainPage";

const FIRST_FETCH_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,nativeName,currencies,population,subregion,tld,languages,borders,flags,cca3'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

interface LoaderInterface {
    params: Params,
    apiData: receivedCountry[] | null,
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                loader={async ({params}) => {
                        const apiData:receivedCountry[] | null = await jsonFetchGet(FIRST_FETCH_URL);
                        const returnObject:LoaderInterface = {params, apiData}
                return returnObject
                       }}
                element={<App/>}>
                <Route path={"/"}
                       element={<MainPage/>}
                       errorElement={<ErrorBoundary/>}
                />
                <Route
                    path="/:countryName"
                    errorElement={<ErrorBoundary/>}
                />
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Route>
    )
);

root.render(
    <RouterProvider router={router}/>
);

export type {LoaderInterface}
