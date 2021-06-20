
import { shallowEqual, useSelector } from 'react-redux'

import AwardsCardItem from '../AwardsCardItem'



import styles from './AwardsCard.module.scss'

const AwardsCard = () => {
 
    const ruGifts = useSelector(state => state.awards.awards,shallowEqual)

    const awardsCardEl = ruGifts.map(({ id, ...gift }) => <AwardsCardItem key={id}{...gift} />)
        
    return (
        <ul className={styles.awardsCardList}>
            {awardsCardEl}
        </ul>)

}
    

export default AwardsCard;
