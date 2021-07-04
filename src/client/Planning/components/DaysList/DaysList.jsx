import { useState } from 'react'
import PropTypes from 'prop-types';
import {v4} from 'uuid'

import { dayList } from './list'
import FormCheckbox from '../../../../shared/components/FormCheckbox'
import styles from './DaysList.module.scss'

const dayStatus = Array(7).fill(false)

const DaysList = ({ isActive}) => {
  const [dayStatusList, setDayStatusList] = useState(dayStatus)

  const handleCheck = (idx) => {
    const arr = [...dayStatusList];
    arr[idx] = !arr[idx];
    setDayStatusList(arr)
  };

  isActive(dayStatusList)

  const dayWeek = dayList.map(({ days, name }, idx) => <FormCheckbox key={v4()}  label={days} name={name} checked={dayStatusList[idx]} onChange={()=>handleCheck(idx)}/>)
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