import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactsCardItem.module.scss'

function ContactsCardItem({ name, position,imageUrl, description }) {
    return (
        <li className={styles.contactCardItem}>
            <img src={imageUrl} alt="" />
            <div className={styles.contactCardFooter}>
            <h2 className={styles.contactName}>{name}</h2>
            <p className={styles.contactPosition}>{position}</p>
            <p className={styles.contactDescription}>{ description}</p>
            </div>
            
        </li>)
};

export default ContactsCardItem;

ContactsCardItem.defaultProps = {
    name: '',
    position: '',
    imageUrl: '',
    description:''

}

ContactsCardItem.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
}
