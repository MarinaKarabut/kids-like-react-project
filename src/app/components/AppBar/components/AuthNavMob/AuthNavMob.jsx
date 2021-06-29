import { menuItems } from '../Auth/AuthNav/menuItems'
import { NavLink } from "react-router-dom";
import {v4} from 'uuid'

import styles from './AuthNavMob.module.scss'

const  AuthNavMob = () => {
    const authNavEl = menuItems.map(({to, text}) => 
    <li  key={v4()} className={styles.authNavItem}>
        <NavLink exact to={to}className={styles.authNavLink} activeClassName={styles.active}>{text}</NavLink>
    </li>)
    
    return (
        <ul className={styles.authNav}>
        {authNavEl}
        </ul>
    )
}
 
export default AuthNavMob;