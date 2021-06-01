import React from 'react';
import h from './Headerpost.module.css';
import {addNewPostActive, addPostActive} from "../../../datafile/ProfileHeaderReduser";


const Headerpost = (props) => {


    let text = React.createRef();

    let mesageAlert = () => {
        props.metodMain(addPostActive())
    }
    let newText = () => {
        let message = text.current.value;
        props.metodMain(addNewPostActive(message));
    }

    return (
        <div className={h.post}>
            <img src={'https://im0-tub-ru.yandex.net/i?id=170ac5e984cc74bb6a098dd54293c294-l&ref=rim&n=13&w=768&h=768'}/>

                <textarea ref={text} onChange={newText} value={props.newpost}/>

            <button onClick={mesageAlert}>post</button>

        </div>


    )

}

export default Headerpost;