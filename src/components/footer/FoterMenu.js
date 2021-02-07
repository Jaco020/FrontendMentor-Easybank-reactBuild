import React from 'react';
import Link from "../elements/Link";
import "./footer.scss";
function FoterMenu() {
    return (
        <div className="footer__menu">
            <div className="footer__menu-column">
                <div className="footer__menu-item">
                    <Link>About Us</Link>
                </div>
                <div className="footer__menu-item">
                    <Link>Contact</Link>
                </div>
                <div className="footer__menu-item">
                    <Link>Blog</Link>
                </div>
            </div>
            <div className="footer__menu-column">
                <div className="footer__menu-item">
                    <Link>Careers</Link>
                </div>
                <div className="footer__menu-item">
                    <Link>Support</Link>
                </div>
                <div className="footer__menu-item">
                    <Link>Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default FoterMenu
