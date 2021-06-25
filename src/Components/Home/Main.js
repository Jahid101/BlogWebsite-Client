import React from 'react';
import Coffee from './Coffee';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
    return (
        <div className="bg-green-900">
            <Header></Header>
            <Coffee></Coffee>
            <Footer></Footer>
        </div>
    );
};

export default Main;
