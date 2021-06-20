import React from 'react'
import {NavLink} from "react-router-dom";

import styles from "./NavbarMenuItem.module.scss";

const NavbarMenuItem = ({to, text}) => {
    return (
        <li className={styles.navbarMenuItem}>
            <NavLink exact to={to} className={styles.navbarMenuLink} activeClassName={styles.active}>{text}</NavLink>
        </li>
    )
}

export default NavbarMenuItem;