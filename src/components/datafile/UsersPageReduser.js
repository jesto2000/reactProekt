const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD-USERS';

let Initialstate = {Users: []};

const UsersPageReduser = (state = Initialstate, activ) => {
    switch (activ.type) {
        case FOLLOW:
            return {
                ...state, Users: state.Users.map(u => {
                        if (u.id === activ.UserID) {
                            return {...u, followed: true}

                        }
                        return u;

                    }
                )
            }

        case UNFOLLOW:
             return {
            ...state, Users: state.Users.map(u => {
                    if (u.id === activ.UserID) {
                        return {...u, followed: false}

                    }
                    return u;

                }
            )
        }
        case ADD_USERS:
            return {...state,Users: [...state.Users,...activ.Users]}

        default:
            return state;
    }
}
export const UnfollowAC = (UserID) => ({type: FOLLOW, UserID})
export const FollowAC = (UserID) => ({type: UNFOLLOW, UserID})
export const AddusersAC = (Users) => ({type: ADD_USERS, Users})


export default UsersPageReduser;