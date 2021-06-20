import React from 'react';
import {v4} from 'uuid'

import { menuItems } from './menuItems'
import AuthNavItem from '../AuthNavItem'

import styles from './AuthNav.module.scss'

const AuthNav = () => {
    const authNavEl = menuItems.map(item => <AuthNavItem key={v4()} {...item}/>)
    
    return (
        <ul className={styles.authNav}>
        {authNavEl}
        </ul>
    )
};

export default AuthNav;
