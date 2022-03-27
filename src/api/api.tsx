import Axios from 'axios';
import Cookies from "universal-cookie";


const getInstance = (token?: string) => {
    return Axios.create({
        withCredentials: false,
        baseURL: `https://reqres.in/`,
        headers: token ? {
            'Authorization': `Bearer ${token}`
        } : {}
    });
};

export const cookies = new Cookies();
export const cookieOpts: { path: string, sameSite: boolean | 'none' | 'lax' | 'strict' } = {
    path: '/',
    sameSite: 'strict'
};

export const authApi = {

    register: (email: string, password: string): Promise<{ token: string }> => {

        return getInstance()
            .post(`api/register`, {email, password})
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },

    login: (email: string, password: string): Promise<{ token: string }> => {

        return getInstance()
            .post(`api/login`, {email, password})
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};

export const usersApi = {

    getUsers: (page: number, per_page: number) => {
        return getInstance()
            .get(`/api/users`, {params: {per_page, page}})
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};