import React from 'react';
import './index.css';
import data from "./components/datafile/data-redux";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={data}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
            ,
            document.getElementById('root'))







