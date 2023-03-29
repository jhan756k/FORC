import React from 'react';
import "../Style/Member.css"

const Member = ({img, name, position, explain}) => {
    return (
        <div className="mwrap">
            <img src={img} alt="" />
            <div className="mtext">
                <h1>{name}</h1>
                <h2>{position}</h2>
                <p>{explain}</p>
            </div>
        </div>
    );
};

export default Member;