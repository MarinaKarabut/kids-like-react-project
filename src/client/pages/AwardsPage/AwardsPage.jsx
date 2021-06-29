import React, { useState } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { alert, error} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import 'react-pnotify'

import { fetchAwards, buyAwards } from '../../../redux/awards/awards-operation'

import AwardsCard from '../../Awards/AwardsCard'
import Button from '../../../shared/components/Button'
import { ReactComponent as GiftBox } from './gift-box.svg';
import ProgressBar from '../../components/ProgressBar'
import Modal from '../../../shared/components/Modal'
import AwardsModal from '../../Awards/AwardsModal'
import Footer from '../../Footer'



import styles from './AwardsPage.module.scss'

const AwardsPage = () => {
    const ruGifts = useSelector(state => state.awards.awards, shallowEqual)

    const balance = useSelector(state => state.auth.balance, shallowEqual)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAwards())
    }, [dispatch])


    const [selectedAwards, setSelectedAwards] = useState([])

    const [openModal, setOpenModal] = useState(false);

    const priceSelectedAwards = ruGifts.filter(award => selectedAwards.includes(award.id))

    const totalPrice = priceSelectedAwards.reduce((acc, { price }) => acc + price, 0)

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const handelClick = () => {
        if (!selectedAwards.length) {
            alert({
                text: 'Не выбрано ни одного подарка',
                delay: 2000
            });
            return
        }
        if (totalPrice > balance) {
            error({
                text: 'Недостаточно баллов для выбора',
                delay: 2000
            });
            return
        }
        dispatch(buyAwards({ giftIds: selectedAwards }));
        setOpenModal(!openModal);
    }

    const addAwards = (id) => {
        if (!selectedAwards.includes(id)) {
            setSelectedAwards([...selectedAwards, id])
        }
    }


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
                    <AwardsCard ruGifts = {ruGifts} onClick={addAwards}/>
                </div>
                <div className={styles.awardsBtnContainer}>
                    
                    {openModal && (<Modal onClose={toggleModal}>< AwardsModal /></Modal>)}
                    <Button type='submit' className={styles.awardsBtn} onClick={handelClick}>Подтвердить</Button>  
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




