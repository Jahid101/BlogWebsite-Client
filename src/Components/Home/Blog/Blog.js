import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blog.css';


const Blog = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('https://floating-savannah-09787.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    

    return (
        <div className="mt-2 blogBg" id="blog">
            <h1 className="text-center mt-2 mb-3 text-light" style={{ color: 'black', fontSize: '55px' }}>News</h1>
            <div className="row">
                {
                    blog.map(blog => <BlogCard blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;
