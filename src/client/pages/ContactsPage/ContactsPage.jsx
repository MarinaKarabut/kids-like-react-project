import ContactsCardList from '../../Contacts/ContactsCardList'
import Footer from '../../Footer'

import styles from './ContactsPage.module.scss'

const ContactsPage = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.container}>
                <h1 className={ styles.contactsTitle}>Наша команда</h1>
                <p className={ styles.contactsText}>Всегда готовы к новым вызовам!</p>
                <ContactsCardList />
                <div className={styles.contactsFooterWrapper}>
                   <Footer/> 
                </div>
                
        </div> 
        </section>
       
        
     );
}
 
export default ContactsPage;