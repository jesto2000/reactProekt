import React from 'react';
import {addMessageActive, addNewMessageActive} from "../datafile/DilogsPageReduser";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


let DilogsStoreToProps = (state)=>{
 return{
     DialogsData:state.dataDialogs
 }
}

let DilogsMetodsToProps =(action)=>{
  return{
      addMesege: () => {
          action(addMessageActive())
      },

    addNewMesage:(message)=>{action(addNewMessageActive(message))}}
}

let Dilogs_W = connect(DilogsStoreToProps,DilogsMetodsToProps)(Dialogs)

export default Dilogs_W;