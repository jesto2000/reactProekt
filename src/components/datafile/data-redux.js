import {combineReducers, createStore} from "redux";
import ProfileHeaderReduser from "./ProfileHeaderReduser";
import DilogsPageReduser from "./DilogsPageReduser";
import UsersPageReduser from "./UsersPageReduser";



let metods = combineReducers({
    dataPosts:ProfileHeaderReduser,
    dataDialogs:DilogsPageReduser,
    dataUsers:UsersPageReduser



})



let data = createStore(metods);

window.data = data;


 export default data;