import { useSelector, shallowEqual } from 'react-redux';

import cat from './images/cat.png';

import styles from './AwardsModal.module.scss';

const RewardModal = () => {
    const awards = useSelector((state => state.awards.awards), shallowEqual);

    const awardsId = useSelector((state => state.awards.selectedAwards), shallowEqual)

    const selectedAwards = awards.filter(award => awardsId.includes(award.id))

    
    const itemElements = selectedAwards.map(item => (
        <li key={item.id} className={styles.rewardsContainer}>
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