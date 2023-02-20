import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"
import App from "./App";

import {BrowserRouter} from "react-router-dom";

import {QueryClient, QueryClientProvider} from "react-query"

import "./App.scss"

const el = document.getElementById("app");
const root = createRoot(el);

const queryClient = new QueryClient()

root.render(
<BrowserRouter>
    {/* <ProductStateReducer> */}
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
    {/* </ProductStateReducer> */}
</BrowserRouter>, el);