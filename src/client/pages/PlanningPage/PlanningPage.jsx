import {useEffect} from 'react'
import { shallowEqual, useSelector,useDispatch } from 'react-redux'

import CurrentPlanningWeek from '../../Planning/components/CurrentPlanningWeek'
import PlannigPoints from '../../Planning/components/PlannigPoints'
import TasksList from '../../Tasks/components/TasksList'

import {fetchTasks} from '../../../redux/task/tasks-operations'


 
import NewTasks from '../../Tasks/components/NewTask'
import Footer from '../../Footer'

import styles from './PlanningPage.module.scss'




const PlanningPage = () => {

    // const points = useSelector(state => state.task.task.points);
    // console.log(points);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])
 
        return (
            <section className={styles.planningPage}>
                <div className={styles.container}>
                    <div className={styles.planningPageContainer}>
                        <CurrentPlanningWeek />
                        <div className={styles.planningPageWrapper}>
                             <PlannigPoints points={ 0}/>
                            <NewTasks />
                        </div>
                    </div>    
                    <TasksList />
                    <div className={ styles.planningPageFooterWrapper}>
                       <Footer/> 
                    </div>
                    
                    
                </div>
                <div className={styles.planningPageWrapperMobile}>
                        <PlannigPoints points={0} />
                        <NewTasks />
                    </div>
            </section>
        )
};

export default PlanningPage;


