import React from 'react';
import BlogListView from '../../components/BlogListView';

function BlogList() {
  return (
    <>
      <p className="text-3xl font-bold text-center bg-gradient-to-bl from-blue-50 to-violet-50 py-8">
        All About Tech Blogs
      </p>
      <BlogListView/>
    </>
  );
}

export default BlogList;