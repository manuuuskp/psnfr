import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"
import App from "./App";

import {BrowserRouter} from "react-router-dom";

import "./App.scss"

const el = document.getElementById("app");
const root = createRoot(el);

root.render(<BrowserRouter><App /></BrowserRouter>, el);