import React from 'react';
import PropTypes from 'prop-types';

import CheckboxToggle from '../../../shared/components/CheckboxToggle'


import styles from './AwardsCardItem.module.scss'

const AwardsCardItem=({title, price,imageUrl}) =>{
    return (
        <li>
            <div className={styles.awardsImg}>
                <img   src={imageUrl} alt="" />
            </div>
            <div className={styles.awardsCardFooter}>
                <div>
                    <p className={styles.awardsTitle}>{title}</p>
                    <p className={styles.awardsPrice}>{price} баллов</p> 
                </div>
                <CheckboxToggle/>
            </div>
        </li>)
};

export default AwardsCardItem;

AwardsCardItem.defaultProps = {
    title: '',
    price: '',
    imageUrl: '',
}

AwardsCardItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
}