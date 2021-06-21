import React from 'react';
import {connect} from "react-redux";
import Headerpost from "./Headerpost";
import {addNewPostActive, addPostActive} from "../../../datafile/ProfileHeaderReduser";


let PostsStoreToProps = (state) => {
    return {
        PostsData: state.dataPosts
    }
}

let PostsMetodsToProps = (action) => {
    return {
        addPost: () => {
            action(addPostActive())
        }
        ,
        addNewPost: (message) => {
            action(addNewPostActive(message))
        }

    }
}

let Headerpost_W = connect(PostsStoreToProps, PostsMetodsToProps)(Headerpost)

export default Headerpost_W;