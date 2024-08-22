import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EditBlog from './pages/blogs/EditBlog';
import BlogList from './pages/blogs/BlogList';
import CreateBlog from './pages/blogs/CreateBlog';
import Header from './components/Header';
import ShowBlog from './pages/blogs/ShowBlog';
import Login from './pages/LoginPage';
import Signup from './pages/Signup';

function App() {
  
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/blogs" />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<ShowBlog />} />
          <Route path="/blogs/create" element={<CreateBlog />} />
          <Route path="/blog/:id/edit" element={<EditBlog />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;