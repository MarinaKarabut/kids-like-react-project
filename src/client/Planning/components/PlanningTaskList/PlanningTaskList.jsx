import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types';


import PlanningTaskCard from '../PlanningTaskCard'

import styles from './PlanningTaskList.module.scss'

const PlanningTaskList = ({ tasks}) => {
    const tasksElements = tasks.map((task) => <PlanningTaskCard key={v4()} {...task} />)
    return (
        <ul className={styles.list}>{
            tasksElements}
        </ul>
    )
}

PlanningTaskList.defaultProps = {
    tasks: [],
}

PlanningTaskList.propTypes = {
    tasks: PropTypes.array,
}

export default PlanningTaskList;
