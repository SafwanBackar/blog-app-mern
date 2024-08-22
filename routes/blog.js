const express = require('express');
const { getAllBlogs, createBlog, updateBlog, deleteBlog, getBlogById, getUserBlogs } = require('../controllers/blog');
const authHandler = require('../middleware/auth-handle-hook')
const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById)
router.post('/create', authHandler, createBlog);
router.put('/:id/edit', authHandler,updateBlog);
router.delete('/:id', authHandler,deleteBlog);
router.get('/user/:userId', authHandler, getUserBlogs);


module.exports = router;
