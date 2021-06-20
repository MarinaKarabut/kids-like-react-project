import moment from 'moment';
import 'moment/locale/ru' 
import { Link } from 'react-router-dom';

import ProgressBar from '../../components/ProgressBar'
import planerDesktop from '../../../images/mainPageImg/planer-desktop.png'
import CurrentWeek from '../MainPage/CurrentWeek'
import Footer from '../../Footer'

import styles from './MainPage.module.scss'

const MainPage = () => {
    const dateNow = moment().format('dddd, DD-MM-YYYY');

    return (
        <section className={styles.mainPage}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div>
                        <CurrentWeek />
                        <div className={styles.currentDayContainer}>
                            <p className={styles.myTasks}>Мои задачи:</p>
                            <p className={styles.currentDay}>{dateNow}</p>
                        </div>   
                    </div>
                       <ProgressBar />
                </div>
                <div>
                    <p className={styles.mainPageText}>На этот день задач нет</p>
                    <Link to={'/planning'} className={styles.mainPageBtn}>Запланировать задачи</Link>
                    <img src={planerDesktop} alt="" />
                    <Footer/>
                </div>
            </div>
        </section>
        );
}
 
export default MainPage;