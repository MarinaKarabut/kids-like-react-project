import React from 'react';
import { useSelector, shallowEqual} from 'react-redux';

import styles from './Balance.module.scss'

const Balance = () => {
    
    const balance = useSelector(state => state.auth.user.balance, shallowEqual)
    
    return (<div className={styles.balanceContainer}>
        <p className={styles.text}>Баланс баллов:</p>
        <p className={styles.score}>{balance}</p>
    </div> );
};

export default Balance;
