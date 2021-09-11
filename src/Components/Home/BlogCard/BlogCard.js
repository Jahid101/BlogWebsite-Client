import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const BlogCard = ({ blog }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const handleClick = (id, category) => {
        if (category === 'Sports') {
            if (loggedInUser.email) {
                history.push(`/showBlog/${id}`);
            }
            else {
                alert('Login Required')
            }
        }
        else if (category === 'International') {
            if (loggedInUser.email) {
                history.push(`/showBlog/${id}`);
            }
            else {
                alert('Login Required')
            }
        }
        else {
            history.push(`/showBlog/${id}`);
        }
    }


    let day = new Date().toDateString();

    return (
        <div onClick={() => handleClick(blog._id, blog.category)} class="col-md-3 row container blogCardInfo cardDesign mt-5 p-3 btn">
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
