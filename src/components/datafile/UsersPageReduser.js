const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD-USERS';

let Initialstate = {users: []};

const UsersPageReduser = (state = Initialstate, activ) => {
    switch (activ.type) {
        case FOLLOW:

            return {
                ...state, users: state.users.map(u => {
                        if (u.id === activ.UserID) {
                            return {...u, followed: true}

                        }
                        return u;

                    }
                )
            }

        case UNFOLLOW:

             return {
            ...state, users: state.users.map(u => {
                    if (u.id === activ.UserID) {
                        return {...u, followed: false}

                    }
                    return u;

                }
            )
        }
        case ADD_USERS: {
            return {...state, users: [...state.users, ...activ.Users]}
        }
        default:
            return state;
    }
}
export const UnfollowAC = (UserID) => ({type: UNFOLLOW, UserID})
export const FollowAC = (UserID) => ({type: FOLLOW, UserID})
export const AddusersAC = (Users) => ({type: ADD_USERS, Users})


export default UsersPageReduser;