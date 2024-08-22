import axios from 'axios';
import  { axiosInstanceBlogCUD, axiosInstanceGetBlog } from '../api/axios';
import { blogApi } from '../api/endpoints';

export const getBlogs = () => axios.get(`${blogApi}`);
export const getBlogById = (id) => axios.get(`${blogApi}/${id}`);
export const getBlogsByUserId = (userId) => axiosInstanceGetBlog.get(`/user/${userId}`);
export const createBlog = (blogData) => axiosInstanceBlogCUD.post(`/create`, blogData)
export const updateBlog = (id, blogData) => axiosInstanceBlogCUD.put(`/${id}/edit`, blogData)
export const deleteBlog = (id) => axiosInstanceBlogCUD.delete(`/${id}`)