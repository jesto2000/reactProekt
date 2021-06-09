import React from 'react';
import {connect} from "react-redux";
import Allpost from "./Allpost";



let AllpostStoreToProps = (state)=>{
    return{
        PostsData:state.dataPosts
    }
}



let Allpost_W = connect(AllpostStoreToProps)(Allpost)

export default Allpost_W;