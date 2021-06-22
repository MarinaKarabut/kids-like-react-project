import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {fetchAwards} from '../../../redux/awards/awards-operation'

import AwardsCard from '../../Awards/AwardsCard'
import Button from '../../../shared/components/Button'
import { ReactComponent as GiftBox } from './gift-box.svg';
import ProgressBar from '../../components/ProgressBar'
import Modal from '../../../shared/components/Modal'
import AwardsModal from '../../Awards/AwardsModal'
import Footer from '../../Footer'
// import NewTask from '../../Tasks/components/NewTask'

import styles from './AwardsPage.module.scss'

const AwardsPage = () => {
    const ruGifts = useSelector(state => state.awards.awards, shallowEqual)
    console.log(ruGifts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAwards())
    }, [dispatch])

    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal(!openModal);
    };

 

    return (
        <section className={styles.awardsPageContainer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                   <div className={styles.awardsGiftsBox}>
                        <GiftBox />
                        <h2 className={styles.awardsTitle}>мои призы</h2>
                    </div>
                    <div className={styles.awardsPageWrapper}>
                        <ProgressBar/>   
                    </div>
                                    
                </div>              
                <div className={styles.awardsCardContainer}>
                    <AwardsCard ruGifts={ ruGifts}/>
                </div>
                <div className={styles.awardsBtnContainer}>
                    {openModal && (<Modal onClose={toggleModal}><AwardsModal /></Modal>)}
                    <Button className={styles.awardsBtn} onClick={toggleModal}>Подтвердить</Button>  
                </div>
                <Footer />
            </div>
            <div className={styles.awardsPageWrapperMobile}>
                    <ProgressBar/> 
                </div>
        </section>
       
    )
};

export default AwardsPage;




