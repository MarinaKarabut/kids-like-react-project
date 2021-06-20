import Logo from '../../shared/components/Logo'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoWrapper}>
                <Logo logo={styles.logoText} icon={styles.icon}/>
            </div>
            <span className={styles.text}>Делаем жизнь родителей и детей изи :&#10089;</span>
            <span className={styles.text}>2021</span>         
        </footer>);
}

export default Footer