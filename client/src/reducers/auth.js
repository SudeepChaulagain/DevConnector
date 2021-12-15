import { AUTH } from '../constants/actionTypes'

const initialState = {
    authData: null,
    dashboardData: null
}
export default (state = initialState, action) =>{
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.payload}))
            return {...state, authData:action.payload}
        default:
            return state
    }
}