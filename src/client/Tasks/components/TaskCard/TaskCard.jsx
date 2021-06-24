import { useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import moment from 'moment'

import SelectDay from '../../../Planning/components/SelectDay'
import CheckboxToggle from '../../../../shared/components/CheckboxToggle'
import { ReactComponent as Completed } from '../../icons/completed.svg'
import { ReactComponent as InCompleted } from '../../icons/incompleted.svg'
import {taskSwitchActive} from '../../../../redux/task/tasks-operations'

import styles from './TaskCard.module.scss'



const TaskCard = ({ _id, title, reward, imageUrl, days}) => {
    const location = useLocation();
    const currentDay = moment().format('YYYY-MM-DD');


    const [completed, setCompleted] = useState(false)
    console.log(completed)

    const dispatch = useDispatch()
    
    const toggleCompleted = (id) => {
        setCompleted(!completed)
        dispatch(taskSwitchActive(id, { date: currentDay }))
    }


    return (
        <li className={styles.item}>
            <div className={styles.tasksImg}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles.description}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.score}>{reward} балла</p>
                </div>
                <div>
                    {location.pathname === "/" && <CheckboxToggle checked={completed} onChange={() => toggleCompleted(_id)} />}
                    {/* {location.pathname === "/" && exactDate && <CheckboxToggle checked={completed}/>} */}
                    {/* {location.pathname === "/" && expiredDate && completed? (<Completed />):(<InCompleted />)} */}
                    {location.pathname === "/planning" && <SelectDay id={_id}  days={days}/>}
                </div>
            </div>
        </li>
    );
}

TaskCard.defaultProps = {
    title: '',
    reward: '',
    imageUrl: '',
}

TaskCard.propTypes = {
    title: PropTypes.string,
    reward: PropTypes.number,
    imageUrl: PropTypes.string,
}

export default TaskCard;