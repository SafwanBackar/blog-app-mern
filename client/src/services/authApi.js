import { axiosInstaceAuth } from '../api/axios';

export const handleLogin = (formData) => axiosInstaceAuth.post('/login', formData)
export const handleSignUp = (formData) => axiosInstaceAuth.post('/register', formData)
export const handleLogout = async ()=> axiosInstaceAuth.post('/logout')