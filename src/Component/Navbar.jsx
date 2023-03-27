import React, {useEffect} from 'react';
import "../Style/Navbar.css"
import Sticknav from './Sticknav';

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

    const images = [
        "/images/afternoon.jpg",
        "/images/mountain.jpg",
        "/images/bird.jpg",
    ];

    let i = 0;
    setInterval(() => {
        document.querySelector('.img').src = images[i];
        i++;
        if (i === images.length) {
            i = 0;
        }
    }, 10000);

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