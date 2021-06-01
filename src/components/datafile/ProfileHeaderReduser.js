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

const ProfileHeaderReduser = (data=startdata,activ) =>{
    if(activ.type===ADD_POST){
        let post = {
            id: 10,
            post: data.newpost
        }
        data.posts.push(post);
        data.newpost = '';


    }else if(activ.type===ADD_NEWPOST){
        data.newpost = activ.text;
        console.log(data.newpost);


    }


    return data
}
export const addPostActive =()=>{
    return  {type: ADD_POST} ;
}
export const addNewPostActive =(message)=>{
    return  {type: ADD_NEWPOST, text: message} ;
}

export  default ProfileHeaderReduser;