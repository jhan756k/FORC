import React, {useEffect} from 'react';
import "../Style/Navbar.css"
import Sticknav from './Sticknav';

const Navbar = () => {

    const handleScroll = () => {
        const position = window.pageYOffset;

        if (position > document.querySelector('.img').height) {
            document.querySelector('.stick').style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        } else {
            document.querySelector('.stick').style.backgroundColor = "transparent";
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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