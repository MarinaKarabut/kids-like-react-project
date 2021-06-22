import React from 'react';
import { shallowEqual, useSelector,useDispatch } from 'react-redux'

import styles from './ProgressBar.module.scss'

const ProgressBar = () => {
    const pointsPlanned = useSelector(state => state.task.points.rewardsPlanned, shallowEqual);
    const pointsGained = useSelector(state => state.auth.user.balance)


    return (
        <div className={styles.progressBarWrapper}>
            <p className={styles.weekPoints}>Заработано баллов за эту неделю: <span className={styles.score}>{pointsGained}</span></p>
            <p className={styles.weekPoints}>Запланировано баллов на эту неделю: <span className={styles.score}>{pointsPlanned? pointsPlanned: 0}</span></p>
                <div className={styles.progressBar}>
                    <span className={styles.points}><span className={styles.secondPoints}>{pointsGained}</span>/ {pointsPlanned? pointsPlanned: 0}</span>
                    <progress max="10" value="10" className={styles.progress}></progress>
                </div>  
            
            <div className={styles.progressBarMobile}>
                <p className={styles.progressBarMobileText}>Заработано баллов:</p>
                <div>
                    <span className={styles.points}><span className={styles.secondPoints}>{pointsGained}</span>/ {pointsPlanned? pointsPlanned: 0}</span>
                    <progress max="0" value="0" className={styles.progress}></progress>
                </div>
            </div>
        </div>
    )
};

export default ProgressBar;
