import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul className={classes.navbar__links}>
                <Link className={classes.navbar__link} to="/">Pomodoro</Link>
                <Link className={classes.navbar__link} to="/about-technique">About technique</Link>
            </ul>
        </nav>
    );
};

export default Navbar;