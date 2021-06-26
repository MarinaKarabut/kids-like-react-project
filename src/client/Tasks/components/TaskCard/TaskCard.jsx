import { useState } from 'react'
import { useDispatch} from 'react-redux'
import PropTypes from 'prop-types';
import moment from 'moment'

import CheckboxToggle from '../../../../shared/components/CheckboxToggle'
import { ReactComponent as Completed } from '../../icons/completed.svg'
import { ReactComponent as InCompleted } from '../../icons/incompleted.svg'
import {taskSwitchActive} from '../../../../redux/task/tasks-operations'

import styles from './TaskCard.module.scss'



const TaskCard = ({ _id, title, reward, imageUrl, days , active}) => {
    const currentDay = moment().format('YYYY-MM-DD');
    const completedTask = days[active].isCompleted;
    const date = days[active].date;
    const exactDate = currentDay === date;
    const expiredDate = date < currentDay;
    

    const [completed, setCompleted] = useState(completedTask)

    const dispatch = useDispatch()
    
    const toggleCompleted = (id) => {
        // setCompleted(!completed)
        dispatch(taskSwitchActive(id, currentDay))
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
                    {exactDate && <CheckboxToggle onClick={() => toggleCompleted(_id)} />}
                    {expiredDate && completed && <Completed />}
                    {expiredDate && !completed && <InCompleted />}
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