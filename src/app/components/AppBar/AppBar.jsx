import { useSelector,  shallowEqual} from "react-redux";

import Logo from '../../../shared/components/Logo'
import AuthNav from './components/Auth/AuthNav'
import UserMenu from './components/UserMenu'
import NavbarNav from './components/Navigation/NavbarNav'
import Balance from './components/Balance'

import styles from './AppBar.module.scss'

const AppBar = () => {
    
    const isAuthenticated = useSelector(state =>state.auth.isAuthenticated, shallowEqual);
    return (
        <header className={styles.mainPageContainer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logoWrapper}>
                        <Logo />
                        {isAuthenticated && <Balance />}
                    </div>
                    <div className={styles.navbarContainer}>
                        <div className={styles.authNavContainer}>
                            {isAuthenticated && <NavbarNav />}
                        </div>
                        <div>
                            {isAuthenticated ? <UserMenu /> : <AuthNav />}
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    )
};

export default AppBar;
