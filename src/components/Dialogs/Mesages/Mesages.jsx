import h from "./../Dialogs.module.css";

import React from "react";

const Messages = (prop) => {
    return <div className={h.messages}>{prop.messages} mesages {prop.id} </div>

}
export default Messages;