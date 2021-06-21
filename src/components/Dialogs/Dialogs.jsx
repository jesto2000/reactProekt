import React from 'react';
import h from './Dialogs.module.css';
import Names from "./Names/Names";
import Messages from "./Mesages/Mesages";



const Dialogs = (props) => {

    let names = props.DialogsData.names;


    let masivNames = names.map(p => <Names name={p.namechar} id={p.id}/>);
    let masivMesages = props.DialogsData.messages.map(p => <Messages messages={p.message} id={p.id}/>);

    let text = React.createRef();

    let mesageChenge = () => {
        let mesage = text.current.value;
        props.addNewMesage(mesage);
    }
    let mesageAdd = () => {

        props.addMesege();
    }


    return (
        <div className={h.content}>
            <div> {masivNames} </div>
            <div>
                <textarea ref={text} onChange={mesageChenge} value={props.DialogsData.newmessage}></textarea>
                <button onClick={mesageAdd}>post</button>
                {masivMesages}
            </div>

        </div>
    )

}

export default Dialogs;