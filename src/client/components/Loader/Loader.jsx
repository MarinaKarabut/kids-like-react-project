import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.scss';

function LoaderComponent() {
  return (
    <div className={styles.wrapper}>
      <Loader
        type="ThreeDots"
        color='#FFBC33'
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default LoaderComponent;