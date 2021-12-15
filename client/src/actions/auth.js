import * as api from '../api'
import { AUTH } from '../constants/actionTypes'

export const login = (formData, navigate) => async (dispatch) =>{
    try {
        const {data} = await api.login(formData)
      
        dispatch({type: AUTH, payload:data})

        navigate('/')

    } catch (error) {
        console.log(error)
    }
}

export const register = (formData, navigate) => async (dispatch) =>{
    try {

        const {data} = await api.register(formData)

        dispatch({type: AUTH, payload:data})

        navigate('/')

    } catch (error) {
        console.log(error)
    }
}