import React from 'react';

const MarqueeItem = ({ image, name, designation }) => {
    return (
        <div className="marquee-item">
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <p className="desig">{designation}</p>
        </div>
    );
};

export default MarqueeItem;
