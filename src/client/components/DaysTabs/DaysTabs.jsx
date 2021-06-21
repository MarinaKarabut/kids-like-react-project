// import {useState} from 'react';
import { days } from './days'
import CurrentWeek from '../CurrentWeek'

import styles from './DaysTabs.module.scss'

// const [activeDay, setActiveDay] = useState(0)


const DaysTabs = () => {
    const dayWeekEl = days.map(({ id, day,shortDay }, idx) =>
        <li key={id}>
            <span className={styles.dayTab}><span className={styles.text}>{day}</span></span>
            <span className={ styles.dayTabMob}>{shortDay}</span>
        </li>)
    
    return (
        <div className={styles.daysTabs}>
            <div className={styles.weekTab}>
               <CurrentWeek/> 
            </div>
            <div>
                <ul className={styles.daysTabsList}>{dayWeekEl}</ul>
            </div>
             
        </div>
       
    )
};

export default DaysTabs;



