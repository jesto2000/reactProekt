import React from 'react';
import h from './Profile.module.css';

import ProfileInf from "./ProfileInf/ProfileInf";
import Allpost_W from "./Allpost/Allpost_W";


const Profile = (props) => {



    return <div className={h.content}>
        <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
        <ProfileInf/>

        <Allpost_W/>


    </div>

}

export default Profile;