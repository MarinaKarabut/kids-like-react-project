import { useSelector, shallowEqual } from 'react-redux';
// import { getAwards } from '../../../../redux/awards/awards-selectors';

import cat from './images/cat.png';

import styles from './AwardsModal.module.scss';

const RewardModal = () => {
    const awards = useSelector((state => state.awards.awards), shallowEqual);

    const itemElements = awards.map(item => (
        <li key={item.id}>
            <div className={styles.rewardImg}>
                <img src={item.imageUrl} alt="" className={styles.reward} />
            </div>
            <p className={styles.rewardTitle}>{item.title}</p>
        </li>
    ))


    return (
        <div className={styles.modalContainer}>
            <div className={styles.imgContainer}>
                <img src={cat} alt="" className={styles.imgModal} />
            </div>
            <h2 className={styles.title}>Поздравляем! Ты получаешь:</h2>
            <ul className={styles.rewardList}>
                {itemElements}
            </ul>
        </div>
     );
}

export default RewardModal;