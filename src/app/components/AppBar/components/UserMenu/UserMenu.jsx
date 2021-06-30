import {useState} from 'react'
import { useSelector, shallowEqual} from 'react-redux';

import { ReactComponent as LogOut } from '../UserMenu/logout.svg';
import Modal from '../../../../../shared/components/Modal'
import LogOutModal from '../../components/UserMenu/LogOutModal'


import styles from './UserMenu.module.scss'

const UserMenu = () => {

    const email = useSelector(state => state.auth.user.email, shallowEqual)

    const [openModal, setOpenModal] = useState(false)
    const toggleModal = () => {
    setOpenModal(!openModal)
}

    return (
        <div className={styles.container}>
            <span className={ styles.firstLetter}>{email.slice(0, 1).toUpperCase()}</span>
            <span className={ styles.email}>{email}</span>
            {openModal && (<Modal onClose={toggleModal}>
        <LogOutModal onClose={toggleModal}/>
        </Modal>)}
            <LogOut onClick={toggleModal} className={styles.btnLogOut}></LogOut>
        </div>
    )
};

export default UserMenu;