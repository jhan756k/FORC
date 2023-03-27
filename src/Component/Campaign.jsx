import React from 'react';
import "../Style/Campaign.css"

const Campaign = ({img, title}) => {
    return (
        <div>
            <div className="camc">
                
                <div className="campimg">
                    <img src={img} alt="" className="cimg" />
                </div>

                <div className="overcamp">
                    <div className="ctitle">{title[0]}</div>
                    <div className="ctitle">{title[1]}</div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
