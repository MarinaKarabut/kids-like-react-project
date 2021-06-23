import React from 'react';
import { useSelector, shallowEqual} from 'react-redux';

import styles from './Balance.module.scss'

const Balance = () => {
    
    let balance = useSelector(state => state.auth.balance, shallowEqual)

    const updatedBalance = useSelector(state => state.task.updatedBalance, shallowEqual)
    
    if (updatedBalance) {
        balance=updatedBalance
    }
    
    return (<div className={styles.balanceContainer}>
        <p className={styles.text}>Баланс баллов:</p>
        <p className={styles.score}>{balance}</p>
    </div> );
};

export default Balance;
