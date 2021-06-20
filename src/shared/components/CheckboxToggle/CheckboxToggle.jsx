import PropTypes from 'prop-types'
import { v4 } from 'uuid';

import styles from './CheckboxToggle.module.scss'

function CheckboxToggle({label, className, ...checkboxProps}) {
  const id = v4();
    return (
        <div className={styles.switch}>
          <div className={styles.switchControl}>
            <input id={id} className={ `${styles.switchToggle} ${className}`} type="checkbox" {...checkboxProps} />
            <label aria-hidden="true" className={styles.switchTrack} htmlFor={id}>
                <span className={styles.switchIcon}></span>
            </label>
            <div aria-hidden="true" className={styles.switchMarker}></div>
          </div>
        </div>
    )
};

export default CheckboxToggle;


CheckboxToggle.defaultProps = {
    // checked:false,
    label: '',
    className: '',
    onChange: () => { }
}


CheckboxToggle.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string
}

