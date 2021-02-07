import React from 'react';
import Logo from "../elements/Logo";
import Button from "../elements/Button";
import Social from "./Social";
import FooterMenu from "./FoterMenu";
import "./footer.scss";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__item">
                    <Logo className="white"/>
                    <Social/>
                </div>
                <div className="footer__item">
                    <FooterMenu/>
                </div>
                <div className="footer__item right-align">
                    <Button/>
                    <p className="small">&copy; Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
            
    )
}

export default Footer
