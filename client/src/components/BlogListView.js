import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { truncateText } from '../services/blogData';
import { getBlogs } from '../services/blogApi';

function BlogListView() {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        getBlogs().then((response) => setBlogs(response.data));
      }, []);
    return (
        <>
            <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex flex-col items-center justify-center">
            <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {blogs.map((blog) => (
                <div key={blog._id} className="bg-white rounded-lg border p-4 flex flex-col">
                    <div className="px-1 py-4 flex-grow">
                    <div className="font-bold text-xl mb-2">{blog.title}</div>
                    <p className="text-gray-700 text-base">
                        {truncateText(blog.content, 100)}
                    </p>
                    </div>
                    <div className="px-1 pt-4 mt-auto">
                    <p className="text-blue-500 hover:underline">
                        <Link to={`/blog/${blog._id}`}>Read More</Link>
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </>
    )
}

export default BlogListView