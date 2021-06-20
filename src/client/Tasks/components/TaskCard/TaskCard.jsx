
import PropTypes from 'prop-types';

import SelectDay from '../../../Planning/components/SelectDay'


import styles from './TaskCard.module.scss'

const TaskCard = ({ _id, title, reward, imageUrl}) => {

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
                    <SelectDay id={_id }/>
                </div>
            </div>
        </li>
    );
}

TaskCard.defaultProps = {
    title: '',
    reward: '',
    imageUrl: '',
}

TaskCard.propTypes = {
    title: PropTypes.string,
    reward: PropTypes.number,
    imageUrl: PropTypes.string,
}

export default TaskCard;