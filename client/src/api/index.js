import axios from 'axios'

export const login = (formData) => axios.post('/api/auth/login', formData)
export const register = (formData) => axios.post('/api/auth/register', formData)
