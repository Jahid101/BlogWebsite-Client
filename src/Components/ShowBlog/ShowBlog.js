import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowBlog = () => {

    const [blog, setBlog] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/showBlog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id])

    return (
        <div>
            <img src={blog.imageURL} alt="" />
            <h1>{blog.title}</h1>
            <h5>{blog.blogDetails}</h5>
        </div>
    );
};

export default ShowBlog;
