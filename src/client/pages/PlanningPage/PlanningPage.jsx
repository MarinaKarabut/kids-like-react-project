import { shallowEqual, useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'

import CurrentPlanningWeek from '../../Planning/components/CurrentPlanningWeek'
import PlannigPoints from '../../Planning/components/PlannigPoints'
import TasksList from '../../Tasks/components/TasksList'
import NewTasks from '../../Tasks/components/NewTask'
import Footer from '../../Footer'
import {addTask} from '../../../redux/task/tasks-operations'

import styles from './PlanningPage.module.scss'


const PlanningPage = () => {
    
    let points = useSelector(state => state.auth.rewardsPlanned, shallowEqual);
    const updatedWeekPlannedRewards = useSelector(state => state.task.updatedRewardsPlanned, shallowEqual);
    if (updatedWeekPlannedRewards) {
        points=updatedWeekPlannedRewards
    }
    
    const tasks = useSelector(state => state.task.task, shallowEqual)

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(addTask())
    // }, [dispatch])
 
        return (
            <section className={styles.planningPage}>
                <div className={styles.container}>
                    <div className={styles.planningPageContainer}>
                        <CurrentPlanningWeek />
                        <div className={styles.planningPageWrapper}>
                             <PlannigPoints points={points}/>
                            <NewTasks />
                        </div>
                    </div>    
                    <TasksList tasks={ tasks}/>
                    <div className={ styles.planningPageFooterWrapper}>
                       <Footer/> 
                    </div>    
                </div>
                <div className={styles.planningPageWrapperMobile}>
                        <PlannigPoints points={points} />
                        <NewTasks />
                </div>
            </section>
            
        )
};

export default PlanningPage;


