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
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/users/signup`,
            payload,
            {headers}
        )
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
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/users/login`,
            payload,
            {headers}
        )
        const loginUser = JSON.stringify(response.data)
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