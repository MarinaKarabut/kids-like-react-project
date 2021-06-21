import React from 'react';
import moment from 'moment';

import styles from './CurrentWeek.module.scss'

const CurrentWeek=()=> {
    const startOfWeek = moment()
    .startOf('isoweek')
    .format('DD');
  const endOfWeek = moment()
    .endOf('isoweek')
   .format('DD MMMM');

  return (
      <p className={styles.currentWeek}>Неделя: {startOfWeek} - {endOfWeek}</p>)
};

export default CurrentWeek;
