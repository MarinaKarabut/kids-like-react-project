import { useState } from 'react'
import { useSelector } from 'react-redux';

import styles from './PlannigPoints.module.scss'

const PlannigPoints = ({points}) => {
    
    return (
        <div className={styles.plannigPointsWrapper}>
            <p className={styles.planningPointsText}>Определены задач на</p>
            <span className={styles.planningPointsNumber}>{points}</span>
            <span className={styles.planningPoints}>баллов</span>           
        </div>
    )
};

export default PlannigPoints;
