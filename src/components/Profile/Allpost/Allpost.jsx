import React from 'react';
import h from './Allpost.module.css';
import Post from "./Post/Post";
import Headerpost from "./Headerpost/Headerpost";
import {chengePost} from "../../datafile/data";
import Headerpost_W from "./Headerpost/Headerpost_W";

const Allpost = (props) => {
    let posts = props.PostsData.posts;

    let MayPost =posts.map(p=><Post postmesage={p.post} nomer={p.id} />);

    return (
        <div className={h.post}>
            <Headerpost_W/>

            {MayPost}
        </div>


    )

}


export default Allpost;