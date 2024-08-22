import axios from 'axios';
import  { axiosInstanceGetBlog } from '../api/axios';
import { blogApi } from '../api/endpoints';

export const getBlogs = () => axios.get(`${blogApi}`);
export const getBlogById = (id) => axios.get(`${blogApi}/${id}`);
export const getBlogsByUserId = (userId) => axiosInstanceGetBlog.get(`/user/${userId}`);
export const createBlog = (blogData) => axios.post(`${blogApi}/create`, blogData)
export const updateBlog = (id, blogData) => axios.put(`${blogApi}/${id}/edit`, blogData)
export const deleteBlog = (id) => axios.delete(`${blogApi}/${id}`)