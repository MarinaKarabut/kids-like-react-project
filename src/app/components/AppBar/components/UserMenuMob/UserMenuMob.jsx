import { useSelector, shallowEqual, useDispatch} from 'react-redux';
import {NavLink} from "react-router-dom";
import {logOut} from '../../../../../redux/auth/auth-operations'
import { ReactComponent as LogOut } from '../UserMenu/logout.svg';

import {menuItems} from '../Navigation/NavbarNav/menuItems'


import styles from './UserMenuMob.module.scss'

const UserMenuMob = () => {

    const email = useSelector(state => state.auth.user.email, shallowEqual)

    const dispatch = useDispatch()

    const onLogout = ()=>dispatch(logOut())

    const navbarMenuElements = menuItems.map(({to, text}) => <li className={styles.navbarMenuItem}>
        <NavLink exact to={to} className={styles.navbarMenuLink} activeClassName={styles.active}>{text}</NavLink>
    </li>)

    return (
        <>
        <div className={styles.burgerMenuUser}>
            <span className={ styles.firstLetter}>{email.slice(0, 1).toUpperCase()}</span>
            <span className={ styles.email}>{email}</span>
            <LogOut onClick={onLogout} className={styles.btnLogOut}></LogOut>
        </div>  
        
        <div>
            <ul className={styles.nav}>
                {navbarMenuElements}
            </ul>
        </div>
    </>
    )
};

export default UserMenuMob;
