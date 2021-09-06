import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="row mt-2 headerContainer headerBg">
            <div className="col-md-4 headerLeft">
                <h5 style={{ fontSize: '65px' }} >Welcome To<br /> <span className="text-warning">NewsPortal</span> </h5>
                <br />
                <p style={{ fontSize: '25px' }}>Check out todays hot news</p>
                <br />
                <a href="#blog">
                    <button className="btn btn-info mr-5">See News</button>
                </a>
            </div>

            <div className="col-md-8">
                
            </div>
        </div>
    );
};

export default Header;
