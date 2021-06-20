import React from 'react';

import { contacts } from './contacts'
import ContactsCardItem from '../ContactsCardItem'

import styles from './ContactsCardList.module.scss'

function ContactsCardList() {
    const contactsCardEl = contacts.map(({ id, ...contact }) => <ContactsCardItem key={id} {...contact} />)
    console.log(contacts);
    return (
        <ul className={styles.contactsList}>
            {contactsCardEl}
         </ul>)
};

export default ContactsCardList;
