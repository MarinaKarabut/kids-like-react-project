import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ReactComponent as LogoSite } from '../../../images/Logo.svg';


import styles from './Logo.module.scss'

const Logo = ({logo, icon}) => {
    return (
            <Link to='/' className={styles.logo}>
                <span className={`${styles.text} ${logo}`}>KidsLike</span>
                <LogoSite className={`${styles.img} ${icon}`}/>
            </Link>
    )
}

export default Logo

Logo.defaultProps = {
    className: '',
}

 Logo.propTypes = {
    className: PropTypes.string,
}
