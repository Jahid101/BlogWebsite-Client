import React from 'react';
import './Header.css';
import art from '../../../images/art.jpg';
import tech from '../../../images/tech.jpg';
import food from '../../../images/food.jpg';
import fire from '../../../images/fire.jpg';
import covid from '../../../images/covid.jpg';
import { Link } from 'react-router-dom';


const Header = () => {


    return (

        <div className="row mt-2 headerContainer headerBg mb-2">
            <div className="col-md-4 headerLeft">
                <h2 className="text-center mb-4 text-warning">Top News</h2>

                <div className="text-center topNewsCard topNewsCardDesign">
                    <img className="mt-2" style={{ width: '50%' }} src={fire} alt="" />
                    <h3 className="text-center text-dark">Fire on House</h3>
                    <Link to="/showTopNews1" className="btn btn-sm btn-success">See More</Link>
                </div>
                <div className="text-center topNewsCard topNewsCardDesign">
                    <img className="mt-2" style={{ width: '50%' }} src={covid} alt="" />
                    <h3 className="text-center text-dark">New Vaccine for Covid</h3>
                    <Link to="/showTopNews2" className="btn btn-sm btn-success">See More</Link>
                </div>

            </div>


            {/* Slider */}
            <div className="col-md-8 container">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={art} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block text-warning mb-5">
                                <h1>News of Art</h1>
                                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsum officiis voluptates sint exercitationem sed natus veritatis perspiciatis id, repellendus quae blanditiis modi architecto aperiam corporis voluptatem fugit saepe repellat!</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={tech} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block text-warning mb-5">
                                <h1>News of Technologies</h1>
                                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsum officiis voluptates sint exercitationem sed natus veritatis perspiciatis id, repellendus quae blanditiis modi architecto aperiam corporis voluptatem fugit saepe repellat!</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={food} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block text-warning  mb-5">
                                <h1>News of Food</h1>
                                <h5 className="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsum officiis voluptates sint exercitationem sed natus veritatis perspiciatis id, repellendus quae blanditiis modi architecto aperiam corporis voluptatem fugit saepe repellat!</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Header;
