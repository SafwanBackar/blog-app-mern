import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deleteBlog, getBlogById } from '../services/blogApi'
import { jwtDecode } from "jwt-decode";
function BlogView() {
    const { id } = useParams();
  
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getBlogById(id).then((response) => setBlog(response.data));    
  }, [id]);

  const handleDelete = async () => {
    await deleteBlog(id, localStorage.getItem('token'));
    navigate('/');
  };
  const userId = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : ''
  return (
    <>
       <div className="flex flex-col">
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{blog.title}</h1>
            <p className="text-gray-600">
                Published on {blog.createdAt?.split('T')[0]} by {blog.author?.username || 'User'}
            </p>
            </div>
        </div>
        <div className="bg-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 mb-8">
                <img src="https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Featured" className="mb-8 w-full max-w-lg h-auto mx-auto rounded-lg"/>
                <div className="prose max-w-none">
                <p>{blog.content}</p>
                </div>
                { userId.id && blog?.author?._id?.toString() === userId.id.toString() &&
                <div className="flex justify-start space-x-4 mt-4">
                    <Link to={`/blog/${blog._id}/edit`}>
                    <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900">
                        Edit
                    </button>
                    </Link>
                    <button onClick={handleDelete} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete
                    </button>
                </div>
                }
            </div>

            {/* Recent Posts. Static for now. Populate Required. */}
            <div className="w-full md:w-1/4 px-4">
                <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h2>
                <ul className="list-none">
                    <li className="mb-2">
                    <p className="text-gray-700 hover:text-gray-900">Blog Post 1</p>
                    </li>
                    <li className="mb-2">
                    <p className="text-gray-700 hover:text-gray-900">Blog Post 2</p>
                    </li>
                    <li className="mb-2">
                    <p className="text-gray-700 hover:text-gray-900">Blog Post 3</p>
                    </li>
                    <li className="mb-2">
                    <p className="text-gray-700 hover:text-gray-900">Blog Post 4</p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default BlogView