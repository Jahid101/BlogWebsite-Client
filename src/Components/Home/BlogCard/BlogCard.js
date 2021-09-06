import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogCard = ({ blog }) => {

    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/showBlog/${id}`);
    }

    let day = new Date().toDateString();

    return (
        <div onClick={() => handleClick(blog._id)} class="col-md-3 row container blogCardInfo cardDesign mt-5 p-3 btn">
            <div>
                <img src={blog.imageURL} alt="" />
                <div>
                    <h2 className="text-center mt-4 ">{blog.title}</h2>
                    <p className="text-center">{blog.category}</p>
                    <h6><FontAwesomeIcon icon={faCalendarTimes} /> {day}</h6>
                    <button className="btn btn-success">See More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
