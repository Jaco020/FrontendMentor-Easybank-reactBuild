import React from 'react';
import "./feature.scss";
import ImgApi from "../../images/icon-api.svg";
import ImgBudget from "../../images/icon-budgeting.svg";
import ImgOn from "../../images/icon-onboarding.svg";
import ImgOnline from "../../images/icon-online.svg";
import FeatItem from "./FeatItem";
function Feaure() {
    return (
        <div className="feature">
            <div className="feature__wrapper">
                <h1>Why choose Easybank?</h1>
                <p className="sectionP">We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.</p>
                <div className="feature__grid">
                    <FeatItem icon={ImgOnline} head="Online Banking"> Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</FeatItem>
                    <FeatItem icon={ImgBudget} head="Simple Budgeting">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</FeatItem>
                    <FeatItem icon={ImgOn} head="Fast Onboarding">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</FeatItem>
                    <FeatItem icon={ImgApi} head="Open API">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</FeatItem>
                </div>
            </div>
        </div>
    )
}

export default Feaure
