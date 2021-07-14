import React from 'react';
import h from './users.module.css';
import * as axios from 'axios';
import usphorto from '../../../src/resors/images/user.jpg';


const Users = (props) => {
    let getUsers =()=>{

    if (props.UsersData.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.getUsers(response.data.items)
        })
    }}

    // props.getUsers([ ])}

    return <div>
        <button onClick={getUsers}>Users</button>
        {props.UsersData.map(u => <div key={u.id}>

            <img src={u.photos.small!==null?u.photos.small:usphorto} className={h.userPhoto}/>
            <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
            <div>
                {u.followed ?
                    <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> :
                    <button onClick={() => {
                        props.followAA(u.id)
                    }}>Follow</button>}
                <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
            </div>

        </div>)

    }
    </div>

}

export default Users;