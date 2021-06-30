import {memo} from 'react';
import {v4} from 'uuid'

import NavbarMenuItem from "../NavbarMenuItem";
import {menuItems} from "./menuItems";

import styles from "./NavbarNav.module.scss";

const NavbarNav =()=> {
     const navbarMenuElements = menuItems.map(item => <NavbarMenuItem key={v4() }{...item} />)

    return (
        <ul className={styles.nav}>
            {navbarMenuElements}
        </ul>
    )
};

export default memo(NavbarNav);
