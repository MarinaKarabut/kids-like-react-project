import { NavLink } from "react-router-dom";

import styles from './AuthNavItem.module.scss'

const AuthNavItem=({to, text})=> {
    return (
        <li  className={styles.authNavItem}>
            <NavLink exact to={to}className={styles.authNavLink} activeClassName={styles.active}>{text}</NavLink>
        </li>
    )
};

export default AuthNavItem;
