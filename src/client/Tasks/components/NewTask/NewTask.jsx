import {useState} from 'react';
import Modal from '../../../../shared/components/Modal';
import NewTaskModal from './NewTaskModal/NewTaskModal'
import styles from './NewTask.module.scss';

const NewTask = () => {
const [openModal, setOpenModal] = useState(false)
    const toggleModal = () => {
    setOpenModal(!openModal)
}
    return <>
        <div className={styles.newTaskWrapper}>
            <p className={styles.newTaskText}>Хочешь получить больше призов - добавь задачи </p>
            {openModal && (<Modal onClose={toggleModal}>
            <NewTaskModal/>
            </Modal>)}
            <button type='button' className={styles.newTaskBtn} onClick={toggleModal}></button>
            <button type='button' className={styles.newTaskBtnMobile} onClick={toggleModal}></button> 
        </div>
    </>
};
export default NewTask;