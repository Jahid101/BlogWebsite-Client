import React from 'react';
import pic1 from '../../images/1.jpg';
import pic2 from '../../images/2.jpg';
import pic3 from '../../images/3.jpg';
import pic4 from '../../images/4.jpg';

const Coffee = () => {

    return (
        <div className=" grid grid-rows-2 gap-0 md:grid-flow-col text-white">
            <div className="menu-card p-12 mt-12">
                <img src={pic1} alt="mutton" className="h-full rounded mb-2 shadow w-full" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Brazilian Coffee</h2>
                    <p>Delicious and Nutritious</p>
                    <span className="mb-5">$16</span>
                </div>
            </div>

            <div className="menu-card p-12 mt-20">
                <img src={pic3} alt="mutton" className="h-full rounded mb-2 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">COLD BREW COFFEE</h2>
                    <p>Delicious and Nutritious</p>
                    <span>$12</span>
                </div>
            </div>

            <div className="menu-card p-12 mt-12">
                <img src={pic2} alt="mutton" className="h-full rounded mb-2 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">CAPPUCCINO</h2>
                    <p className="mb-2">Delicious and Nutritious</p>
                    <span>$35</span>
                </div>
            </div>

            <div className="menu-card p-12 mt-20">
                <img src={pic4} alt="mutton" className="h-full rounded mb-2 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">ESPRESSO MACCHIATO</h2>
                    <p className="mb-2">Delicious and Nutritious</p>
                    <span>$45</span>
                </div>
            </div>

        </div>
    );
};

export default Coffee;
