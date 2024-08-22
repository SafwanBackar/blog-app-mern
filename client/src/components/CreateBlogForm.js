import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../services/blogApi';

function CreateBlogForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
  
    const handleTitleChange =(e)=>{
      setTitle(e.target.value)
  }
  const handleContentChange=(e)=>{
    setContent(e.target.value)
  }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await createBlog({ title, content });
      navigate('/');
    };
  
    return (
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:w-full lg:max-w-3xl">
            <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-4">Make a New Blog</h2>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
              <input onChange={handleTitleChange} id="title" name="title" type="text" required className="mt-2 block w-full lg:w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">Content</label>
              <textarea onChange={handleContentChange} id="content" name="content" required className="mt-2 block w-full h-[300px] lg:h-[400px] rounded-md border-0 py-1.5 text-[14pt] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"></textarea>
            </div>
            <div>
              <button type="submit" className="mt-6 flex w-full lg:w-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit Blog</button>
            </div>
          </div>
        </div>
      </form>
  
    );
}

export default CreateBlogForm