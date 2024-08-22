import axios from 'axios';
// axios instance 

export const getBlogs = () => axios.get(`https://blog-app-mern-production.up.railway.app/blogs`);
export const getBlogById = (id) => axios.get(`${process.env.REACT_APP_BLOG_API_URL}/${id}`);
export const getBlogsByUserId = (userId) => axios.get(`${process.env.REACT_APP_BLOG_API_URL}/user/${userId}`);
export const createBlog = (blogData) =>
  axios.post(`${process.env.REACT_APP_BLOG_API_URL}/create`, blogData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
export const updateBlog = (id, blogData) =>
  axios.put(`${process.env.REACT_APP_BLOG_API_URL}/${id}/edit`, blogData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
export const deleteBlog = (id) =>
  axios.delete(`${process.env.REACT_APP_BLOG_API_URL}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
