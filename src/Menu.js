import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {

    return (
        <div className="menu">
            <div className="menu__container">
                <ul className="menu__list">
                    <li className="menu__list-item">
                    <NavLink to="/" className={({isActive}) => `menu__link  ${isActive ? "menu__link_active" : ""}`}>Настройки</NavLink> 
                    </li>
                    <li className="menu__list-item">
                        <NavLink to="/about" className={({isActive}) => `menu__link  ${isActive ? "menu__link_active" : ""}`}>О приложении</NavLink>
                    
                    </li>
                    <li className="menu__list-item">
                        <NavLink to="/help" className={({isActive}) => `menu__link  ${isActive ? "menu__link_active" : ""}`}>Задать вопрос</NavLink>
                    
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;