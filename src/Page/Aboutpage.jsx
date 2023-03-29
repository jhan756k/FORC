import React, {useEffect} from 'react';
import Sticknav from '../Component/Sticknav';
import "../Style/Aboutpage.css";

const Aboutpage = () => {

    const handleScroll = () => {
        document.querySelector('.stick').style.backgroundColor = "rgba(255,255,255,1)";
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <div>
            <Sticknav/>
            <img src="/images/about.jpg" alt="logo" className="aboutimg" />
            <div className="abouttext">
                <h1>ABOUT US</h1>
                <p>자연 생태계 보존을 위한 &nbsp;연구를 진행하는 FORC 입니다.</p>
            </div>

            <div className="fields">
                <div className="forestfield">
                    
                </div>
                <div className="beekeepingfield">

                </div>
                <div className="pollutionfield">

                </div>
            </div>

        </div>
    );
};

export default Aboutpage;