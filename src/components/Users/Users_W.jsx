import React from 'react';
import {connect} from "react-redux";
import Users from "./users";
import {AddusersAC, FollowAC, UnfollowAC} from "../datafile/UsersPageReduser";



let UserStoreToProps = (state) => {
    return {
        UsersData: state.dataUsers.users
    }
}

let UserMetodsToProps = (dispatch) => {
    return {
        followAA: (UserID) => {
            dispatch(FollowAC(UserID));
        },
        unfollow: (UserID) => {
            dispatch(UnfollowAC(UserID));
        },
        getUsers:(users) => {
            dispatch(AddusersAC(users));
        }

    }
}

let Users_W = connect(UserStoreToProps, UserMetodsToProps)(Users)

export default Users_W;