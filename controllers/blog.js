const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username');
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBlogById = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id).populate('author', 'username');
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.createBlog = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newBlog = new Blog({
            title,
            content,
            author: req.user._id
        });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    
    try {
        const blog = await Blog.findOneAndUpdate(
            { _id: id, author: req.user._id },
            req.body,
            { new: true }
        );
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    
    try {        
        const blog = await Blog.findOneAndDelete({ _id: id, author: req.user._id });
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json({ message: 'Blog deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserBlogs = async (req, res) => {
    try {
        const userId = req.user._id;
        const blogs = await Blog.find({ author: userId });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
