import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, chengePost} from "./components/datafile/data";
import React from 'react';

// export const renderDom = (Data) =>{
// return ( ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App data={Data} addPost={addPost} chengePost={chengePost} />
//         </BrowserRouter>
//
//     </React.StrictMode>,
//     document.getElementById('root')
// )
//
//
//
//
//
//
// )
//
//
//
// }