import axios from 'axios';
import { axiosInstaceAuth } from '../api/axios';
import { authApi } from '../api/endpoints';

export const handleLogin = (formData) => axios.post(`${authApi}/login`, formData)
export const handleSignUp = (formData) => axios.post(`${authApi}/register`, formData)
export const handleLogout = async ()=> axiosInstaceAuth.post(`${authApi}/logout`)