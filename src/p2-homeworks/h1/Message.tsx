import React from "react";
import {messageDataType} from "./HW1";
import s from './Message.module.css'

function Message(props:messageDataType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}><img className={s.image} src={props.avatar} alt="avatar"/></div>
            <div className={s.message_content}>
                <div className={s.message_body}>
                    <div className={s.user_name}>{props.name}</div>
                    <div className={s.user_message}>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
