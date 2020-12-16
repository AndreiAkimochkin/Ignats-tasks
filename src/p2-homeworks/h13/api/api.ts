import axios from 'axios'



type propsType= {
    body: {
        success: true
    }
}

type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors:Array<string>
    data: D
}



const instance =axios.create ({
    baseURL:'https://neko-cafe-back.herokuapp.com/auth/test',

});


export const API = {
    get() {
        return instance.get<propsType>('')
    },
    creat(title:string) {
        return instance.post<propsType>('', {title})
    },
    delete(todolistId: string) {
        return instance.delete<propsType>(`todo-lists/${todolistId}`)
    },
    update(todolistId: string, title:string) {
        return instance.put<propsType>(`todo-lists/${todolistId}`,{title})
    },

};