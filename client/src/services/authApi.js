import axios from 'axios';
import { axiosInstaceAuth } from '../api/axios';

export const handleLogin = (formData) => axios.post('https://blog-app-mern-production.up.railway.app/auth/login', formData)
export const handleSignUp = (formData) => axios.post('https://blog-app-mern-production.up.railway.app/auth/register', formData)
export const handleLogout = async ()=> axiosInstaceAuth.post('https://blog-app-mern-production.up.railway.app/auth/logout')