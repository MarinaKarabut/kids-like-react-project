import PropTypes from 'prop-types'

import styles from './PlannigPoints.module.scss'

const PlannigPoints = ({points}) => {
    return (
        <div className={styles.plannigPointsWrapper}>
            <p className={styles.planningPointsText}>Определены задач на</p>
            <span className={styles.planningPointsNumber}>{points}</span>
            <span className={styles.planningPoints}>баллов</span>           
        </div>
    )
};

export default PlannigPoints;


PlannigPoints.defaultProps = {
    points: 0,
}


PlannigPoints.propTypes = {
    points: PropTypes.number,
}