import React from 'react';
import "./navbar.scss";
import Link from "../elements/Link";
function NavMenu({className}) {
    return (
        <ul className={className}>
            <li className="navbar__menu-item"><Link>Home</Link></li>
            <li className="navbar__menu-item"><Link>About</Link></li>
            <li className="navbar__menu-item"><Link>Contact</Link></li>
            <li className="navbar__menu-item"><Link>Blog</Link></li>
            <li className="navbar__menu-item"><Link>Careers</Link></li>
        </ul>
    )
}

export default NavMenu
