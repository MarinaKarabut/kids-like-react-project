import PropTypes from 'prop-types';
import AwardsCardItem from '../AwardsCardItem'

import styles from './AwardsCard.module.scss'

const AwardsCard = ({ ruGifts}) => {
     
    const awardsCardEl = ruGifts.map(({ id, ...gift }) => <AwardsCardItem key={id}{...gift} />)
        
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
