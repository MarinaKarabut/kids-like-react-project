import { useSelector, shallowEqual } from 'react-redux'
import PropTypes from 'prop-types';
import { v4 } from 'uuid'

import AwardsCardItem from '../AwardsCardItem'

import styles from './AwardsCard.module.scss'

const AwardsCard = ({ ruGifts, onClick }) => {
    const awardsCardEl = ruGifts.map((gift) => <AwardsCardItem key={v4()}{...gift} onClick={onClick} />)
        
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
