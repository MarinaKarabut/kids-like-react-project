import { useSelector, shallowEqual, useDispatch} from 'react-redux';

import {logOut} from '../../../../../redux/auth/auth-operations'
import { ReactComponent as LogOut } from '../UserMenu/logout.svg';


import styles from './UserMenuMob.module.scss'

const UserMenuMob = () => {

    const email = useSelector(state => state.auth.user.email, shallowEqual)

    const dispatch = useDispatch()

    const onLogout = ()=>dispatch(logOut())

    return (
        <div className={styles.container}>
            <span className={ styles.firstLetter}>{email.slice(0, 1).toUpperCase()}</span>
            <span className={ styles.email}>{email}</span>
            <LogOut onClick={onLogout} className={styles.btnLogOut}></LogOut>
        </div>
    )
};

export default UserMenuMob;
