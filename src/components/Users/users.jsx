import React from 'react';
import h from './users.module.css';


const Users = (props) => {

    if (props.UsersData.length === 0) {

        props.getUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            }

        ])
    }
    return <div>{
        props.UsersData.map(u => <div key={u.id}>

            <img src={u.photoUrl} className={h.userPhoto}/>
            <div>
                {u.followed ?
                    <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> :
                    <button onClick={() => {
                        props.Follow(u.id)
                    }}>Follow</button>}
            </div>

        </div>)

    }
    </div>

}

export default Users;