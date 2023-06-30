import axios from '../../Tools/instanceOfAxios'
import { message } from 'antd'
import { loading } from './loading'

export const user = (data) => {
    return {
        type: 'USER',
        payload: data
    }
}

export const getUser = (id) => {
    return dispatch => {
        dispatch(loading(true))
        axios({
            method: 'GET',
            url: `/users/${id}`
        })
            .then(response => {
                if (response.status === 200) {
                    dispatch(user(response.data.data))
                }
            })
            .catch(error => message.error(`${error}`))
            .finally(() => dispatch(loading(false)))

    }
}