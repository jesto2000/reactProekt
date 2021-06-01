import React from 'react';
import h from './Dialogs.module.css';
import Names from "./Names/Names";
import Messages from "./Mesages/Mesages";
import {addMessageActive, addNewMessageActive} from "../datafile/DilogsPageReduser";


const Dialogs = (props) => {

    let names = props.datadialogs.names;
    let messages = props.datadialogs.messages;

    let masivNames = names.map(p => <Names name={p.namechar} id={p.id}/>);
    let masivMesages = messages.map(p => <Messages messages={p.message} id={p.id}/>);

    let text = React.createRef();

    let mesageChenge = () => {
        let mesage = text.current.value;
        props.metodMain(addNewMessageActive(mesage));
    }
    let mesageAdd = () => {

        props.metodMain(addMessageActive());
    }


    return (
        <div className={h.content}>
            <div> {masivNames} </div>
            <div>
                <textarea ref={text} onChange={mesageChenge} value={props.datadialogs.newmessage}></textarea>
                <button onClick={mesageAdd}>post</button>
                {masivMesages}
            </div>

        </div>
    )

}

export default Dialogs;