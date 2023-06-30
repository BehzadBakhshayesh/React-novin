import axios from '../../Tools/instanceOfAxios'
import { message } from 'antd'
import { loading } from './loading'

export const users = (data) => {
    return {
        type: 'USERS',
        payload: data
    }
}

export const getUsers = (page) => {
    return dispatch => {
        dispatch(loading(true))
        axios({
            method: 'GET',
            url: `/users?page=${page}`
        })
            .then(response => {
                if (response.status === 200) {
                    dispatch(users(response.data.data))
                }
            })
            .catch(error => message.error(`${error}`))
            .finally(() => dispatch(loading(false)))

    }
}