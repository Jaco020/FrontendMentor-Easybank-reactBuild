import React from 'react';
import "./elements.scss";
import LogoImg from "../../images/logo.svg";
import LogoImgWhite from "../../images/logo-white.svg";
function Logo({className}) {
    const checkLogo = ()=>{
        if(className==="white") return LogoImgWhite
        else return LogoImg
    }
    return (
        <img src={checkLogo()} alt="Logo"/>
    )
}

export default Logo;
