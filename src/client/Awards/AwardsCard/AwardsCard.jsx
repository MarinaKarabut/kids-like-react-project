import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'
import PropTypes from 'prop-types';
import { v4 } from 'uuid'

import { fetchAwards} from '../../../redux/awards/awards-operation'
import AwardsCardItem from '../AwardsCardItem'

import styles from './AwardsCard.module.scss'

const AwardsCard = ({ onClick }) => {
       
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAwards())
    }, [dispatch])


    const ruGifts = useSelector(state => state.awards.awards, shallowEqual)
    const awardsCardEl = ruGifts.map(({id, ...gift}) => <AwardsCardItem key={v4()}{...gift} onClick={() => onClick(id)} />)
        
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
