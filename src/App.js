import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";

import {Switch, Route} from 'react-router-dom';


const App = (props) => {


    return  (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/profile' render={() => <Profile  datapost={props.data.dataPosts}
                                                               metodMain={props.metodMain}
                />}/>



                <Route path='/dialogs' render={() => <Dialogs  datadialogs={props.data.dataDialogs}
                                                               metodMain={props.metodMain}
                />}/>
            </div>
        </div>)
    ;
}

export default App;
