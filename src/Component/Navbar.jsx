import React from 'react';
import "../Style/Navbar.css"

const Navbar = () => {

    return (
        <div className="wrap">
            <div className="image">
                <img src="/images/mountain.jpg" alt="Logo" className='img'/>
            </div>
            <div className="onimg">
                <div className="items">
                    <div className="iwrap">
                        <a href="/" className="item">About</a>
                    </div>
                    <div className="iwrap">
                    <a href="/" className="item">Campaign</a>
                    </div>
                    <div className="iwrap">
                    <a href="/" className="title">FORC</a>
                    </div>
                    <div className="iwrap">
                    <a href="/login" className="item">Join Us</a>
                    </div>
                    <div className="iwrap">
                    <a href="/register" className="item">Donate</a>
                    </div>
                </div>
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