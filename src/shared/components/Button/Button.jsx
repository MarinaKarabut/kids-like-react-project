import PropTypes from 'prop-types'

import styles from './Button.module.scss'


const Button =({ children,className, ...props}) =>{
    return <button  className={`${styles.btn} ${className}`} {...props}>{children}</button>
};

export default Button;

Button.defaultProps = {
    type: 'button',
    className: '',
    onClick: () => { }
}


Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    className: PropTypes.string,
}
