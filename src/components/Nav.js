import React from "react";
import { Link } from "react-router-dom";
import piggy from "../assets/porco.png";

const Nav = () => {
    return (
        <div className="navWrapper">
            <span className="headerText">HogWild</span>
            <div className="TwirlyPig">
                <img src={piggy} className="App-logo" alt="piggy" />
            </div>
            <span className="normalText">
                A React App for County Fair Hog Fans
            </span>
            <ul className="nav-add">
                <li><Link to='/Filter'>Filter</Link></li>
                <li><Link to='/Sort'>Sort</Link></li>
            </ul>
        </div>
    );
};

export default Nav;
