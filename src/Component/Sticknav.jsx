import React, {useEffect} from 'react';
import "../Style/Sticknav.css"

const Sticknav = () => {

    const handleScroll = () => {
        const position = window.pageYOffset;

        if (position > 800) {
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
        <div className="stick">
            <div className="items">
                <div className="iwrap">
                    <a href="/" className="item">About</a>
                </div>
                <div className="iwrap">
                <a href="/" className="item">Campaign</a>
                </div>

                <a href="/" className="title">FORC</a>

                <div className="iwrap">
                <a href="/login" className="item">Join Us</a>
                </div>
                <div className="iwrap">
                <a href="/register" className="item">Donate</a>
                </div>
            </div>
        </div>
    );
};


export default Sticknav;