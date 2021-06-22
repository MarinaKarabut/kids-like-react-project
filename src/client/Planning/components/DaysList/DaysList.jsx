import { useState } from 'react'
import PropTypes from 'prop-types';

import { dayList } from './list'
import FormCheckbox from '../../../../shared/components/FormCheckbox'
import styles from './DaysList.module.scss'

const dayStatus = Array(7).fill(false)

const DaysList = ({days,onClick}) => {
  const [dayStatusList, setDayStatusList] = useState(dayStatus)
  console.log(days)

  const handleCheck = (idx) => {
    const arr = [...dayStatusList];
    arr[idx] = !arr[idx];
    setDayStatusList(arr)
  };

  onClick(dayStatusList)

  // const dayWeek = dayList.map(({ days, name }, idx) => <FormCheckbox key={name } label={date} name={name} checked={dayStatusList[idx]} onChange={()=>handleCheck(idx)}/>)
  const dayWeek = days.map(({ date,isActive}, idx) => <FormCheckbox key={idx } label={date} isActive={isActive} checked={dayStatusList[idx]} onChange={()=>handleCheck(idx)}/>)
    return (
        <div className={styles.checkboxList}>
            {dayWeek }
        </div>
        )
};

export default DaysList;


DaysList.defaultProps = {
    onClick: () => { }
}

DaysList.propTypes = {
   onClick: PropTypes.func,
}