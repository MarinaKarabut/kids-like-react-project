import React from 'react';

import styles from './ProgressBar.module.scss'

const ProgressBar=() =>{
    return (
        <div className={styles.progressBarWrapper}>
                <p className={styles.weekPoints}>Заработано баллов за эту неделю: <span className={styles.score}>0</span></p>
                <p className={styles.weekPoints}>Запланировано баллов на эту неделю: <span className={styles.score}>0</span></p>
                <div className={styles.progressBar}>
                    <span className={styles.secondPoints}>{0}/{0}</span>
                    <progress max="10" value="10" className={styles.progress}></progress>
                </div>  
            
            <div className={styles.progressBarMobile}>
                <p className={styles.progressBarMobileText}>Заработано баллов:</p>
                <div>
                    <span className={styles.secondPoints}>{0}/{0}</span>
                    <progress max="10" value="10" className={styles.progress}></progress> 
                </div>
            </div>
        </div>
    )
};

export default ProgressBar;
