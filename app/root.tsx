import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import React, { useState } from 'react';

import type { Route } from "./+types/root";
import './index.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/nunito-sans-600.woff2" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/nunito-sans-300.woff2" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/nunito-sans-400.woff2" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/nunito-sans-800.woff2" />
        <link rel="preconnect" href="https://restcountries.com" />
        <link rel="preconnect" href="https://flagcdn.com"></link>
        <Meta />
        <Links>
        </Links>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Outlet/>
  )
}

export function HydrateFallback() {
  return <Outlet/>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
