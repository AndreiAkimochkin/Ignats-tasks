import React from "react";
import Message from "./Message";
import s from './../../p1-main/m1-ui/u1-app/App.module.css'

export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: Array<messageDataType> = [ {
    avatar: "https://turkiye-is-adresi.com/wp-content/uploads/2019/02/neo.png",
    name: "Neo",
    message: "Wake up Neo!The Matrix has u!",
    time: "00:00",
}
];

function HW1() {
    return (
        <div className={s.hw}>
            <span className={s.hwTitle}>Homework №1</span>
                <Message
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                message={messageData[0].message}
                time={messageData[0].time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
