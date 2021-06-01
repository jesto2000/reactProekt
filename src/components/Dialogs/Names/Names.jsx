import h from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Names = (props) => {
    let rout = "/dialogs/" + props.id;

    return <div className={h.names}>
        <NavLink to={rout} activeClassName={h.active}>{props.name}</NavLink>
    </div>

}

export default Names;