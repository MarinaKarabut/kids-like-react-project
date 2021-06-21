import moment from 'moment';
import 'moment/locale/ru' 
import { Link } from 'react-router-dom';
import routes from '../../../app/routes'

import ProgressBar from '../../components/ProgressBar'
import planerDesktop from '../../../images/mainPageImg/planer-desktop.png'
import CurrentWeek from '../../components/CurrentWeek'
import Footer from '../../Footer'

import styles from './MainPage.module.scss'
import DaysTabs from '../../components/DaysTabs/DaysTabs';

const MainPage = () => {
    const dateNow = moment().format('dddd, DD-MM-YYYY');

    return (
        <section className={styles.mainPageContainer}>
            <div>
                <DaysTabs />
            </div>
            {/* <div className={styles.container}> */}
                <div className={styles.mainPage}>
                    <div className={styles.wrapper}>
                        <div className={styles.myTasksWrapper}>
                            <CurrentWeek />
                            <div className={styles.currentDayContainer}>
                                <p className={styles.myTasks}>Мои задачи:</p>
                                <p className={styles.currentDay}>{dateNow}</p>
                            </div>   
                        </div>
                        <div className={styles.mainPageWrapper}>
                            <ProgressBar />
                        </div>
                    </div>
                    <p className={styles.mainPageText}>На этот день задач нет</p>
                    <Link to={routes.planning} className={styles.mainPageBtn}>Запланировать задачи</Link>
                    <img src={planerDesktop} alt="" />
                    <div className={styles.mainPageFooterWrapper}>
                        <Footer/>
                    </div>
                </div>
            {/* </div> */}
            <div className={styles.mainPageWrapperMobile}>
                <ProgressBar/> 
            </div>
        </section>
        );
}
 
export default MainPage;