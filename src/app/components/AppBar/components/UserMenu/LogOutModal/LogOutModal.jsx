import {useState} from 'react';
import { useDispatch} from 'react-redux';

import {logOut} from '../../../../../../redux/auth/auth-operations'
import Button from '../../../../../../shared/components/Button'

import styles from './LogOutModal.module.scss'

function LogOutModal({onClose}) {

    const dispatch = useDispatch()
    const onLogout = ()=>dispatch(logOut())

    return (
    <div className={styles.logOutModalContainer}>
        <p className={styles.logOutModalText}>Вы точно хотите выйти?</p>
        <div className={styles.logOutModalBtnContainer}>
            <Button className={styles.logOutModalBtn} onClick={onLogout}>Да</Button>
            <Button onClick={onClose}>Нет</Button>  
        </div>
        
    </div>)
};

export default LogOutModal;
