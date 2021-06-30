import {useState} from 'react'
import { useSelector, shallowEqual} from 'react-redux';
import {NavLink} from "react-router-dom";
import {v4} from 'uuid'

import { ReactComponent as LogOut } from '../UserMenu/logout.svg';
import Modal from '../../../../../shared/components/Modal'
import LogOutModal from '../../components/UserMenu/LogOutModal'

import {menuItems} from '../Navigation/NavbarNav/menuItems'


import styles from './UserMenuMob.module.scss'

const UserMenuMob = () => {

    const email = useSelector(state => state.auth.user.email, shallowEqual)

    const [openModal, setOpenModal] = useState(false)

    const toggleModal = () => {
    setOpenModal(!openModal)
}

    const navbarMenuElements = menuItems.map(({to, text}) => <li key={v4()} className={styles.navbarMenuItem}>
        <NavLink exact to={to} className={styles.navbarMenuLink} activeClassName={styles.active}>{text}</NavLink>
    </li>)

    return (
        <>
        <div className={styles.burgerMenuUser}>
            <span className={ styles.firstLetter}>{email.slice(0, 1).toUpperCase()}</span>
            <span className={ styles.email}>{email}</span>
            {openModal && (<Modal onClose={toggleModal}>
        <LogOutModal onClose={toggleModal}/>
        </Modal>)}
            <LogOut onClick={toggleModal} className={styles.btnLogOut}></LogOut>
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
