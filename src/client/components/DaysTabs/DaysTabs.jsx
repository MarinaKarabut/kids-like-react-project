import { useState } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types';
import { days } from './days'
import CurrentWeek from '../CurrentWeek'

import styles from './DaysTabs.module.scss'


const DaysTabs = ({ onClick }) => {
    const [currentDay, setCurrentDay] = useState(0)
    
    const selectedDay = (idx) => {
        onClick(idx);
        setCurrentDay(idx)
    }


    const dayWeekEl = days.map(({ id, day,shortDay }, idx) =>
        <li key={id} onClick={() => selectedDay(idx)}>
            <span className={idx !== currentDay? styles.dayTab : styles.dayTabActive} ><span className={ styles.text}>{day}</span></span>
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

DaysTabs.defaultProps = {
    onClick: ()=>{},

}

DaysTabs.propTypes = {
    title: PropTypes.func,

}


