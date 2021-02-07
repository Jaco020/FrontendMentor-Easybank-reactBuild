import React from 'react';
import "./feature.scss";

function featItem({icon,head,children}) {
    return (
        <div className="feature__item">
            <img src={icon} alt="icon"></img>
            <h2>{head}</h2>
            <p>{children}</p>
        </div>
    )
}

export default featItem
