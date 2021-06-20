import family1 from './images/family1.png';
import family2 from './images/family2.png';
import robot from './images/robot.png';
import gamepad from './images/gamepad.png';
import gamepadMob from './images/gamepadMob.png'
import family1Tab from './images/family1Tab.png'
import family2Tab from './images/family2Tab.png'
import gamepadTab from './images/gamepadTab.png';


import styles from './AuthPage.module.scss'
import LoginForm from '../../components/LoginForm';
import Footer from '../../Footer'

const AuthPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.authPageContainer}>
                    <div className={styles.imgWrapper}>
                        <div className={styles.imgContainer}>
                            <img src={family1} alt="family" width='372' height='306'/>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={robot} alt="robot" width='276' height='219'/>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={gamepad} alt="gamepad" width='279' height='264'/>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={family2} alt="family" width='359' height='290'/>
                        </div>
                    </div>
                    <div className={styles.authWrapper}>
                        <LoginForm />
                    </div>  
            </div>
            <div className={styles.authFooterWrapper}>
                     <Footer/>   
                    </div> 
            </div>
             <div className={styles.imgWrapperMob}>
            <img src={gamepadMob} alt="" />
        </div>
            <div className={styles.imgWrapperTab}>
                <div className={styles.imgTab1}>
                    <img src={family1Tab} alt="" />
                </div>
                <div className={styles.imgTab2}>
                    <img src={gamepadTab} alt="" />
                </div>
                <div className={styles.imgTab3}>
                    <img src={family2Tab} alt="" />
                </div>
            </div>
            </>
        
    )
};

export default AuthPage;
