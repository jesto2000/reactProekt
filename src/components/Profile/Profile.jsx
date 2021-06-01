import React from 'react';
import h from './Profile.module.css';
import Allpost from "./Allpost/Allpost";
import ProfileInf from "./ProfileInf/ProfileInf";


const Profile = (props) => {



    return <div className={h.content}>
        <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
        <ProfileInf/>

        <Allpost  baza={props.datapost.posts}
                  matodMain={props.metodMain}

                  newpost={props.datapost.newpost}
        />


    </div>

}

export default Profile;