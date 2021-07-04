import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {taskUpdate} from '../../../../redux/task/tasks-operations'
import DaysList from '../DaysList'
import Button from '../../../../shared/components/Button'

import styles from './SelectDay.module.scss'



const SelectDay = ({days, id}) => {
    const [showDayList, setShowDayList] = useState(false)

    const [daysActive, setDaysActive] = useState([])

    const dispatch = useDispatch()

    const toggleCheckList = () => {
        setShowDayList(!showDayList);
    }

    const onClickHandler = (id) => {
        toggleCheckList()
        dispatch(taskUpdate(id, daysActive))
    }
    const switchActiveDays = (arrActives) => {
        setDaysActive(arrActives)
        
    }

    
    return (
        <>
            {showDayList && <DaysList  days={days} isActive={switchActiveDays}/>}
            {!showDayList ?
                (<Button className={styles.selectBtn} aria-haspopup="true"
                    aria-expanded={showDayList} onClick={toggleCheckList}>
                    <span className={styles.selectBtnWrapper}>+</span>
                </Button>) :
                (<Button type="submit" className={styles.selectBtn} onClick={()=>onClickHandler(id)}>
                    <span className={styles.selectBtnWrapper}>ok</span>
                </Button>)}
        </>
    )
};

export default SelectDay;
