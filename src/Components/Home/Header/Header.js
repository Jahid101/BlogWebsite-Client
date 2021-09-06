import React from 'react';
import './Header.css';
import art from '../../../images/art.jpg';
import tech from '../../../images/tech.jpg';
import food from '../../../images/food.jpg';


const Header = () => {
    return (
        <div className="row mt-2 headerContainer headerBg mb-2">
            <div className="col-md-4 headerLeft">
                <h5 style={{ fontSize: '65px' }} >Welcome To<br /> <span className="text-warning">NewsPortal</span> </h5>
                <br />
                <p style={{ fontSize: '25px' }}>Check out todays hot news</p>
                <br />
                <a href="#blog">
                    <button className="btn btn-info mr-5">See News</button>
                </a>
            </div>

            <div className="col-md-8 container">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={food} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={tech} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Header;
