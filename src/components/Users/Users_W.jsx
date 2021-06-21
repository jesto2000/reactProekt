import React from 'react';
import {connect} from "react-redux";
import Users from "./users";
;


let UserStoreToProps = (state) => {
    return {
        UsersData: state.Users
    }
}

let UserMetodsToProps = (action) => {
    return {
        addPost: () => {
            action()
        }
        ,
        addNewPost: () => {
            action()
        }

    }
}

let Users_W = connect(UserStoreToProps, UserMetodsToProps)(Users)

export default Users_W;