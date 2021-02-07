import React from 'react';
import "./hero.scss";
import Button from "../elements/Button";
import ImgMockup from "../../images/image-mockups.png"
function hero({pClick}) {
    return (
        <div className="showcase">
            <div className="showcase__wrapper">
                <div className="showcase__text">
                    <h1>Next generation<br/>digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.</p>
                    <Button></Button>
                </div>
                <div className="showcase__img">
                    <div id="background-intro"></div>
                    <img src={ImgMockup} id="background-mockup" alt=""></img>/
                </div>
                <div className={pClick ? "overlay overlay--active": "overlay"}></div>
            </div>
        </div>
    )
}

export default hero
