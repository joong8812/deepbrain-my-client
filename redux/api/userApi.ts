import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export interface UserType {
    userid: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    address: string;
}
export const signupApi = async (payload : {
    userid: string,
    password: string,
    email: string,
    name: string,
    phone: string,
    birth: string,
    address: string
}) => {
    try {
        alert('process 4: API entry')
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/users/signup`,
            payload,
            {headers}
        )
        alert('진행 6 : 응답성공 ' + JSON.stringify(response.data))
        return response.data
    } catch (err) {
        return err;
    }
}

export const loginApi = async (payload : {
    userid: string,
    password: string
}) => {
    try {
        alert('process 4: API entry - login')
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/users/login`,
            payload,
            {headers}
        )
        const loginUser = JSON.stringify(response.data)
        alert('진행 6 : 응답성공 - login' + JSON.stringify(loginUser))
        localStorage.setItem("loginUser", loginUser)
        return response.data
    } catch (err) {
        return err;
    }
}

export const logoutApi = async () => {
    try {
        const response: AxiosResponse<unknown, UserType[]> = await axios.get(
            `${SERVER}/users/logout`,
            {headers}
        )
    } catch(err) {
        return err;
    }
}