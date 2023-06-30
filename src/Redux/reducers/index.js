import { combineReducers } from 'redux'
import { login, submitLoading } from './login'
import { users } from './users'
import { user } from './user'
import { loading } from './loading'

export default combineReducers({
    login,
    submitLoading,
    users,
    user,
    loading
})
