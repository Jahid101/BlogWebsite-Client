import React, { useEffect, useState } from 'react';
import BlogCard from '../Home/BlogCard/BlogCard';


const MoreNews = () => {


    const [blog, setBlog] = useState([]);
    const [categorySearch, setCategorySearch] = useState('');
    const [donateForSearch, setDonateForSearch] = useState('');
    const [categoryData, setCategoryData] = useState([]);


    useEffect(() => {
        fetch('https://floating-savannah-09787.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    let uniqCategory = [];
    for (let i = 0; i < blog.length; i++) {
        let element = blog[i].category;
        let index = uniqCategory.indexOf(element);
        if (index === -1) {
            uniqCategory.push(element);
        }
    }
    console.log(uniqCategory)


    const handleCategorySearch = (e) => {
        setCategorySearch(e.target.value);
    }
    console.log(categorySearch)


    const searchByCategory = () => {
        fetch('https://floating-savannah-09787.herokuapp.com/categoryName?category=' + categorySearch)
            .then(res => res.json())
            .then(data => {
                if (data[0]) {
                    console.log(data[0])
                    setCategoryData(data)
                }
            })
    }
    console.log(categoryData)


    const handleNameClick = () => {
        if (categorySearch === '') {
            alert('Select a Category First');
        }
        else {
            searchByCategory();
        }
    }


    return (
        <div>
            <div className="d-flex justify-content-center mt-5">

                <select onChange={handleCategorySearch} name="donationFor" id="browsers" class="form-control w-50">
                    <option value=""></option>
                    {
                        uniqCategory.map(uniqCategory =>
                            <option value={uniqCategory}>{uniqCategory}</option>
                        )
                    }
                </select>

                <button onClick={handleNameClick} className="btn btn-primary ms-1">Search by Category</button>
            </div>

            <div className="row">
                {
                    categoryData.map(blog => <BlogCard blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default MoreNews;
