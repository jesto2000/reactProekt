const ADD_MESSAGES = 'ADD_MESSAGES';
const ADD_NEWMESAGE = 'ADD-NEWMESAGE';

let startdata = {
    names: [
        {id: 1, namechar: 'aaaaa'},
        {id: 2, namechar: 'bbbbb'},
        {id: 3, namechar: 'ccccc'},
        {id: 4, namechar: 'ddddd'},
        {id: 5, namechar: 'fffff'},
        {id: 6, namechar: 'ggggg'},
    ],
    messages: [
        {id: 1, message: 'Hello1, how a you??'},
        {id: 2, message: 'Hello2, how a you??'},
        {id: 3, message: 'Hell3, how a you??'},
        {id: 4, message: 'Hello4, how a you??'},
        {id: 5, message: 'Hello5, how a you??'},
        {id: 6, message: 'Hello6, how a you??'},
    ],
    newmessage: ''
}

const DilogsPageReduser = (state = startdata, activ) => {
    switch (activ.type) {
        case ADD_MESSAGES:
            let newmes = {
                id: 10,
                message: state.newmessage
            }


            return {
                ...state,
                messages: {...state.messages, newmes},
                newmessage: ''
            }

        case ADD_NEWMESAGE:
            console.log(state.newmessage);
            return {
                ...state,
                newmessage: activ.text
            }


        default:
            return state;
    }
}
export const addMessageActive = () => ({
    type: ADD_MESSAGES
})
export const addNewMessageActive = (message) => ({type: ADD_NEWMESAGE, text: message})

export default DilogsPageReduser;