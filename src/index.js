import React from 'react';
import './index.css';
import baza from "./components/datafile/data-redux";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const renderDom = (data) => {
    return (ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App data={data} metodMain={baza.dispatch.bind(baza)} />
                </BrowserRouter>

            </React.StrictMode>,
            document.getElementById('root')
        )


    )


}
renderDom(baza.getState());
console.log(baza.getState());

baza.subscribe(()=>{

    let data = baza.getState();
    renderDom(data);

});