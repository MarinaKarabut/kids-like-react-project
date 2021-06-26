import PropTypes from 'prop-types';


import SelectDay from '../SelectDay'


import styles from './PlanningTaskCard.module.scss'



const PlanningTaskCard = ({ _id, title, reward, imageUrl, days }) => {
    return (
        <li className={styles.item}>
            <div className={styles.tasksImg}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles.description}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.score}>{reward} балла</p>
                </div>
                <div>
                    <SelectDay id={_id}  days={days}/>
                </div>
            </div>
        </li>
    );
}

PlanningTaskCard.defaultProps = {
    title: '',
    reward: '',
    imageUrl: '',
}

PlanningTaskCard.propTypes = {
    title: PropTypes.string,
    reward: PropTypes.number,
    imageUrl: PropTypes.string,
}

export default PlanningTaskCard;
