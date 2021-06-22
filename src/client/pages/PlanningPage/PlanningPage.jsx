import { shallowEqual, useSelector } from 'react-redux'

import CurrentPlanningWeek from '../../Planning/components/CurrentPlanningWeek'
import PlannigPoints from '../../Planning/components/PlannigPoints'
import TasksList from '../../Tasks/components/TasksList'
import NewTasks from '../../Tasks/components/NewTask'
import Footer from '../../Footer'

import styles from './PlanningPage.module.scss'


const PlanningPage = () => {
    const points = useSelector(state => state.task.points.updatedWeekPlannedRewards, shallowEqual);
    const tasks = useSelector(state => state.task.task, shallowEqual)
 
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


