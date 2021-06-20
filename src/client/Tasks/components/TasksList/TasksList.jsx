import React from 'react'
import {v4} from 'uuid'
import PropTypes from 'prop-types';
import { shallowEqual, useSelector } from 'react-redux'

import TaskCard from '../TaskCard'

import styles from './TasksList.module.scss'

const TasksList = () => {
    const tasks = useSelector(state => state.task.task, shallowEqual)

    const tasksElements = tasks.map(task => <TaskCard key={v4()} {...task} ></TaskCard>)
    return (
        <ul className={styles.list}>{
            tasksElements}
        </ul>
    )
}

TasksList.defaultProps = {
    tasks: [],
}

TasksList.propTypes = {
    tasks: PropTypes.array,
}

export default TasksList;

