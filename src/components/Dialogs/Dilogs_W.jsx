import React from 'react';
import {addMessageActive, addNewMessageActive} from "../datafile/DilogsPageReduser";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


let DilogsStore = (state)=>{
 return{
     DialogsData:state.dataDialogs
 }
}

let DilogsMetods =(action)=>{
  return{
   addMesege:()=>{action(addMessageActive())}
  },{
    addNewMesage:(message)=>{action(addNewMessageActive(message))}

  }
}

let Dilogs_W = connect(DilogsStore,DilogsMetods)(Dialogs)