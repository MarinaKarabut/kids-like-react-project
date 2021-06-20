import PropTypes from 'prop-types'

import { v4 } from 'uuid';


import styles from './FormRadio.module.scss'

const FormRadio = ({ label, className, ...props}) => {
    const id = v4();

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} className={`${styles.radioInput} ${className}`} type="radio" {...props}/>
        </div>
            )
	
}
 
export default FormRadio


FormRadio.defaultProps = {
    checked: false,
    className: '',
    onChange: () => { }
}


FormRadio.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    checked: PropTypes.bool
}
