import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types';


import TaskCard from '../TaskCard'

import styles from './TasksList.module.scss'

const TasksList = ({ tasks, active}) => {
    const tasksElements = tasks.map((task) => <TaskCard key={v4()} active={ active} {...task} ></TaskCard>)
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

