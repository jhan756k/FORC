import React, {useEffect} from 'react';
import "../Style/Navbar.css"
import Sticknav from './Sticknav';
import Slideshow from './Slideshow';

const Navbar = () => {

    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position);
        if (position === 0) {
            document.querySelector('.stick').style.backgroundColor = "transparent";
        } else {
            document.querySelector('.stick').style.backgroundColor = "rgba(255,255,255,1)";
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

            <Slideshow/>
            
            <div className="onimg">
                <Sticknav/>
                <div className="fullname">
                    <h1 className='fntit'>
                        Forest Organization of Research <br/>& Conservation
                    </h1>
                    <a className="imgabout" href='/about'>About Us</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;