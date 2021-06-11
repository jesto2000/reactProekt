import {combineReducers, createStore} from "redux";
import ProfileHeaderReduser from "./ProfileHeaderReduser";
import DilogsPageReduser from "./DilogsPageReduser";



let metods = combineReducers({
    dataPosts:ProfileHeaderReduser,
    dataDialogs:DilogsPageReduser



})



let data = createStore(metods);

window.data = data;


 export default data;