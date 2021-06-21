import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";


import { Route} from 'react-router-dom';
import Dilogs_W from "./components/Dialogs/Dilogs_W";
import Users_W from "./components/Users/Users_W";


const App = (props) => {


    return  (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/users' render={() => <Users_W/>}/>



                <Route path='/dialogs' render={() => <Dilogs_W/>}/>
            </div>
        </div>)
    ;
}

export default App;
