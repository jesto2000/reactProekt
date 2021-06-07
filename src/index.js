import React from 'react';
import './index.css';
import baza from "./components/datafile/data-redux";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


const renderDom = (data) => {
    return (ReactDOM.render(
            <Provider store={data}>
                <BrowserRouter>
                    <App data={data} metodMain={baza.dispatch.bind(baza)}/>
                </BrowserRouter>
            </Provider>
            ,
            document.getElementById('root')
        )


    )


}
renderDom(baza.getState());
console.log(baza.getState());

baza.subscribe(() => {

    let data = baza.getState();
    renderDom(data);

});