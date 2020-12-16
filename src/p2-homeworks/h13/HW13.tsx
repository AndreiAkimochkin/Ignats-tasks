import React, {useEffect, useState} from 'react'
import {API} from "./api/api";


export const Get = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        API.get().
        then((res)=>{setState(res.data)})

    }, []);

    return <div> {JSON.stringify(state)}</div>
}

export const Create = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        API.creat('NEW YEAR !!!!!').
        then((res)=>{setState(res.data)})
    }, []);

    return <div> {JSON.stringify(state)}</div>
};

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null);

    useEffect(() => {
        const todolistId = '82dfb0f7-ed64-4491-9a99-1b08fae577c0';
        API.delete(todolistId).
        then((res)=>{setState(res.data)})
    }, []);

    return <div> {JSON.stringify(state)}</div>
};

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const todolistId = 'ce69fe8f-50fe-420c-bde6-0912f1baeb61';
        API.update(todolistId, 'MERY CRISTMAS').
        then((res)=>{setState(res.data)})
    }, []);

    return <div> {JSON.stringify(state)}</div>
};
