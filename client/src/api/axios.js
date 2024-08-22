import axios from 'axios';

export const axiosInstanceGetBlog = axios.create({
  baseURL: 'https://blog-app-mern-production.up.railway.app/blogs',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosInstanceBlogCUD = axios.create({
    baseURL: 'https://blog-app-mern-production.up.railway.app/blogs',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
})

export const axiosInstaceAuth = axios.create({
    baseURL: 'https://blog-app-mern-production.up.railway.app/auth',
    headers: {
        'Content-Type': 'application/json',
    }
})