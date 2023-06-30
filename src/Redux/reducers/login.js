export const login = (state = false, action) => {

    switch (action.type) {
        case 'LOGIN': return true
        case 'LOGOUT': return false
        default: return state
    }
}

export const submitLoading = (state = false, action) => {
    switch (action.type) {
        case 'SUBMIT_LOADING': return action.payload
        default: return state
    }
}
