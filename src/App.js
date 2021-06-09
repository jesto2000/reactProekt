import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";


import {Switch, Route} from 'react-router-dom';
import Dilogs_W from "./components/Dialogs/Dilogs_W";


const App = (props) => {


    return  (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/profile' render={() => <Profile/>}/>



                <Route path='/dialogs' render={() => <Dilogs_W/>}/>
            </div>
        </div>)
    ;
}

export default App;
