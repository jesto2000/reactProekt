import React from 'react';
import h from './Post.module.css';

const Post = (prop) => {
    return (
        <div className={h.post}>
            {prop.postmesage}------{prop.nomer}
        </div>

    )

}

export default Post;