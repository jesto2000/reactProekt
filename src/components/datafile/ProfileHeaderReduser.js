import {whenMapStateToPropsIsMissing} from "react-redux/lib/connect/mapStateToProps";

const ADD_POST = 'ADD-POST';
const ADD_NEWPOST = 'ADD-NEWPOST';

let startdata = {
    posts: [
        {id: 1, post: 'aaadd'},
        {id: 2, post: 'aacxvaa'},
        {id: 3, post: 'aaaaxcvxc'},
        {id: 4, post: 'aaaadddddavv'},
        {id: 5, post: 'aavvvvvvaaabbbb'},
    ],
    newpost: ''
};

const ProfileHeaderReduser = (state = startdata, activ) => {
    switch (activ.type) {
        case ADD_POST:
            let post = {
                id: 10,
                post: state.newpost
            }
            return {...state,
posts: [...state.posts,post],
                newpost: ''

            }



        case ADD_NEWPOST:
            state.newpost = activ.text;
            console.log(state.newpost);
            return {...state,
            newpost: activ.text
            }



        default:
            return state;
    }
}
export const addPostActive = () => {
    return {type: ADD_POST};
}
export const addNewPostActive = (message) => {
    return {type: ADD_NEWPOST, text: message};
}

export default ProfileHeaderReduser;