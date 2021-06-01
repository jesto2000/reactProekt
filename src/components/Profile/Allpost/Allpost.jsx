import React from 'react';
import h from './Allpost.module.css';
import Post from "./Post/Post";
import Headerpost from "./Headerpost/Headerpost";
import {chengePost} from "../../datafile/data";

const Allpost = (props) => {
// let nnn = props.addPost;
//   nnn('nnnnnnnnnnn');
    let posts = props.baza;

    let MayPost =posts.map(p=><Post postmesage={p.post} nomer={p.id} />);

    return (
        <div className={h.post}>
            <Headerpost metodMain={props.matodMain}

                        newpost={props.newpost}
            />

            {MayPost}
        </div>


    )

}


export default Allpost;