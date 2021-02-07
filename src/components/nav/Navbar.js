import React,{useState,useEffect} from 'react';
import "./navbar.scss";
import NavItem from "./NavItem";
import Logo from "../elements/Logo";
import NavMenu from "./NavMenu";
import Button from "../elements/Button";

import menuIconOpen from "../../images/icon-hamburger.svg";
import menuIconClose from "../../images/icon-close.svg";
function Navbar({pClick,pSetClick}) {
    const [btn, setBtn] = useState(true);
    const showBtn = ()=>{
        if (window.innerWidth<=950){
            setBtn(false);
        }else{
            setBtn(true);
        }
    }
    useEffect(() => {
        showBtn();
    },[]);
    window.addEventListener('resize',showBtn);
    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <NavItem>
                    <Logo/>
                </NavItem>
                <NavItem>
                    <NavMenu className={pClick ? "navbar__menu navbar__menu--active" : "navbar__menu"} />
                    <div className="navbar__menu-icon" onClick={()=> pSetClick(!pClick)}>
                        <img src={pClick ? menuIconClose : menuIconOpen} alt="menu" className={pClick ? "navbar__menu-icon--active" : ""}></img>
                    </div>
                </NavItem>
                {btn && <NavItem> <Button/> </NavItem>}
            </div>
        </nav>
    )
}

export default Navbar