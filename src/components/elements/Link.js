import React from 'react';
import "./elements.scss";
function Link({children}) {
    return (
        <a href="#" className="a-link">
            {children}
        </a>
    )
}

export default Link
