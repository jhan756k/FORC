import React from 'react';
import "../Style/Navbar.css"
import Sticknav from './Sticknav';

const Navbar = () => {

    return (
        <div className="wrap">
            <div className="image">
                <img src="/images/mountain.jpg" alt="Logo" className='img'/>
            </div>
            <div className="onimg">
                <Sticknav/>
                <div className="fullname">
                    <h1 className='fntit'>
                        Forest Organization of Research <br/>& Conservation
                    </h1>
                    <button className="imgabout">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;