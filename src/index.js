import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App";

import {BrowserRouter} from "react-router-dom";

import {QueryClient, QueryClientProvider} from "react-query"

import "./App.scss"
import CartReducer from "./components/cartreducer/CartReducer";

const el = document.getElementById("app");
const root = createRoot(el);

const queryClient = new QueryClient()

root.render(
<BrowserRouter>
    <CartReducer>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </CartReducer>
</BrowserRouter>, el);