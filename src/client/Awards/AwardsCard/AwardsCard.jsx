import { useSelector, shallowEqual } from 'react-redux'
import PropTypes from 'prop-types';
import AwardsCardItem from '../AwardsCardItem'
import {v4} from 'uuid'

import styles from './AwardsCard.module.scss'

const AwardsCard = ({ onClick }) => {
    const ruGifts = useSelector(state => state.awards.awards, shallowEqual)

    const awardsCardEl = ruGifts.map(({ id, ...gift }) => <AwardsCardItem key={v4()}{...gift} onClick={() => onClick(id)}/>)
        
    return (
        <ul className={styles.awardsCardList}>
            {awardsCardEl}
        </ul>)

}
    

export default AwardsCard;

AwardsCard.defaultProps = {
    ruGifts: [],
}

AwardsCard.propTypes = {
    ruGifts: PropTypes.array,
}
