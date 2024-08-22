import axios from 'axios';
import { axiosInstaceAuth } from '../api/axios';

export const handleLogin = (formData) => axios.post('https://blog-app-mern-production.up.railway.app/login', formData)
export const handleSignUp = (formData) => axiosInstaceAuth.post('/register', formData)
export const handleLogout = async ()=> axiosInstaceAuth.post('/logout')