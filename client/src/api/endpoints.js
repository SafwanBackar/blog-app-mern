export const authApi = 'https://blog-app-mern-production.up.railway.app/auth'
export const blogApi = 'https://blog-app-mern-production.up.railway.app/blogs'
export const headersBlog = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
}