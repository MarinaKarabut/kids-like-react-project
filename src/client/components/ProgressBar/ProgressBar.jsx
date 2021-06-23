import React from 'react';
import { shallowEqual, useSelector,useDispatch } from 'react-redux'

import styles from './ProgressBar.module.scss'

const ProgressBar = () => {
    let pointsPlanned = useSelector(state => state.auth.rewardsPlanned, shallowEqual);
    let pointsGained = useSelector(state => state.auth.rewardsGained)
     const updatedWeekPlannedRewards = useSelector(state => state.task.updatedRewardsPlanned, shallowEqual);
    if (updatedWeekPlannedRewards) {
        pointsPlanned=updatedWeekPlannedRewards
    }
    const updatedWeekGainedRewards=useSelector(state => state.task.updatedRewardsGained, shallowEqual);
    if (updatedWeekGainedRewards) {
        pointsGained=updatedWeekGainedRewards
    }


    const counterProgress = (pointsPlanned, pointsGained) => {
        const percent = (pointsGained * 100 / pointsPlanned).toFixed()
        return percent 
    }

    const progress=counterProgress(pointsPlanned,pointsGained )
 
    return (
        <div className={styles.progressBarWrapper}>
            <p className={styles.weekPoints}>Заработано баллов за эту неделю: <span className={styles.score}>{pointsGained}</span></p>
            <p className={styles.weekPoints}>Запланировано баллов на эту неделю: <span className={styles.score}>{pointsPlanned}</span></p>
                <div className={styles.progressBar}>
                    <span className={styles.points}><span className={styles.secondPoints}>{pointsGained}</span>/ {pointsPlanned}</span>
                    <progress max="100" value={progress} className={styles.progress}></progress>
                </div>  
            
            <div className={styles.progressBarMobile}>
                <p className={styles.progressBarMobileText}>Заработано баллов:</p>
                <div>
                    <span className={styles.points}><span className={styles.secondPoints}>{pointsGained}</span>/ {pointsPlanned}</span>
                    <progress max="100" value={progress} className={styles.progress}></progress>
                </div>
            </div>
        </div>
    )
};

export default ProgressBar;
