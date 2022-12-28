import React, { createContext, useState } from "react";
import Notification from "../components/controls/Notification";

export const NotificationContext = createContext();
const NotificationContextProvider = (props) => {
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });
    return (
        <NotificationContext.Provider
            value={{
                setNotify,
            }}
        >
            {props.children}
            <Notification notify={notify} setNotify={setNotify} />
        </NotificationContext.Provider>
    );
};
export default NotificationContextProvider;
