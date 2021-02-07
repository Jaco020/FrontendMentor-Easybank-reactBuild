import React from 'react';
import "./navbar.scss";
function NavItem(props) {
    return (
        <div className="navbar__item">
            {props.children}
        </div>
    )
}

export default NavItem;
