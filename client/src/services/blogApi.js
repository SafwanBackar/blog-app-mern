import  { axiosInstanceBlogCUD, axiosInstanceGetBlog } from '../api/axios';

export const getBlogs = () => axiosInstanceGetBlog.get('/all-blogs');
export const getBlogById = (id) => axiosInstanceGetBlog.get(`/${id}`);
export const getBlogsByUserId = (userId) => axiosInstanceGetBlog.get(`/user/${userId}`);
export const createBlog = (blogData) => axiosInstanceBlogCUD.post(`/create`, blogData)
export const updateBlog = (id, blogData) => axiosInstanceBlogCUD.put(`/${id}/edit`, blogData)
export const deleteBlog = (id) => axiosInstanceBlogCUD.delete(`/${id}`)