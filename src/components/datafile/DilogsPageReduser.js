const ADD_MESSAGES = 'ADD_MESSAGES';
const ADD_NEWMESAGE ='ADD-NEWMESAGE';

let startdata ={names: [
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
    newmessage:''
}

const DilogsPageReduser = (data=startdata,activ) =>{
if(activ.type===ADD_MESSAGES) {
        let mes = {
            id: 10,
            message: data.newmessage
        }
        data.messages.push(mes);
        data.newmessage = '';

    }else if(activ.type===ADD_NEWMESAGE){
        data.newmessage = activ.text;
        console.log(data.newmessage)

    }


    return data
}
export const addMessageActive =()=>{
    return  {type: ADD_MESSAGES} ;
}
export const addNewMessageActive =(message)=>{
    return  {type: ADD_NEWMESAGE, text: message} ;
}

export  default DilogsPageReduser;