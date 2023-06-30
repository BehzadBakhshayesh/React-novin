import axios from '../../Tools/instanceOfAxios'
import { message } from 'antd'

export const login = () => {
    return {
        type: 'LOGIN',
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

export const submitLoading = (data) => {
    return {
        type: 'SUBMIT_LOADING',
        payload: data
    }
}

export const loginRequest = (values) => {
    return dispatch => {
        dispatch(submitLoading(true))
        axios({
            method: 'POST',
            url: '/login',
            data: { ...values }
        })
            .then(response => {
                if (response.status === 200) {
                    dispatch(login())
                    localStorage.setItem('token', response.data.token)
                }
            })
            .catch(error => message.error(`${error}`))
            .finally(() => dispatch(submitLoading(false)))

    }
}