import {
  BrowserRouter,
  createBrowserRouter,
  Links,
  Meta,
  Params,
  Route,
  RouterProvider,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css'
import { receivedCountry } from "./interfacesAPI/interfacesAPI";
import { jsonFetchGet } from "./components/jsonFetch/jsonFetch";
import Home from "./routes/home";
import ErrorBoundary from "./components/errors/errorBoundary";
import DetailPage from "./pages/detail/detailPage";
import NotFound from "./components/errors/notFound";
import MainPage from "./pages/main/mainPage";
import Loader from "./components/loader/loader";

export interface LoaderInterface {
  params: Params,
  apiData: receivedCountry[] | null,
}

const FIRST_FETCH_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,nativeName,currencies,population,languages,borders,flags,cca3'

const root = document.getElementById("root");
const loader = async ({ params }) => {
  const apiData: receivedCountry[] | null = await jsonFetchGet(FIRST_FETCH_URL);
  const returnObject: LoaderInterface = { params, apiData }
  return returnObject
}
const router = createBrowserRouter([
  {
    element: <Home></Home>,
    loader: loader,
    HydrateFallback: Loader,
    children: [
      {
        path: '/',
        element: <MainPage></MainPage>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/:countryName',
        element: <DetailPage></DetailPage>,
        errorElement: <ErrorBoundary />
      },
      {
        path: '*',
        element: <NotFound></NotFound>,
        errorElement: <ErrorBoundary />
      }
    ]
  },
], {
  basename: '/countries'
});

createRoot(root!).render(
  <RouterProvider router={router}>
  </RouterProvider>
);
