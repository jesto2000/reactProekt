import React from 'react';
import connect from "react-redux";
import Users from "./users";
import {AddusersAC, FollowAC, UnfollowAC} from "../datafile/UsersPageReduser";
;


let UserStoreToProps = (state) => {
    return {
        UsersData: state.dataUsers.Users
    }
}

let UserMetodsToProps = (action) => {
    return {
        follow: (uid) => {
            action(FollowAC(uid))
        }
        ,
        unfollow: (uid) => {
            action(UnfollowAC(uid))
        },
        getUsers:(users) =>{
            action(AddusersAC(users))
        }

    }
}

let Users_W = connect(UserStoreToProps, UserMetodsToProps)(Users)

export default Users_W;