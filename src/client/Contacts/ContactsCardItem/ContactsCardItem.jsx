import React from 'react';


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
