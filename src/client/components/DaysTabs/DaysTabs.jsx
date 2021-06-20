// import {useState} from 'react';
import { days } from './days'
import CurrentWeek from '../../../client/pages/MainPage/CurrentWeek'

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



//   const itemElements = tabs.map(({ id, day, dayDesk }, idx) => {
//         return (<li key={id} className={styles.btnItem} >
//             <button type="button" className={styles.daysBtn} onClick={() => onClick(idx)}><span className={styles.text}>{day}</span>
//                 <span className={styles.textDesk}>{dayDesk}</span></button>
//         </li>)
//     });

//      return (<div className={styles.daysMenu}>
//                 <h2 className={styles.weekTabletMob}>Неделя: {startOfWeek}-{endOfWeek}</h2>
//                 <ul className={styles.btnList}>
//                     {itemElements}
//                 </ul>
//             </div>)

// onClick={() => setActiveTab(idx)} className={activeTab === idx ? `${styles.tabListItem} ${styles.tabListActive}` : `${styles.tabListItem}`}