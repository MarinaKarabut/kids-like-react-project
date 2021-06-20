import {useState} from 'react';
import { useDispatch} from 'react-redux';
import {ReactComponent as GoggleSvg} from './google.svg'
import FormInput from '../../../shared/components/FormInput'
import Button from '../../../shared/components/Button'
import { fields } from './fields'
import { initialState } from './initialState'
import useForm from '../../../shared/hooks/useForm'
import { register, logIn } from '../../../redux/auth/auth-operations'

import styles from './LoginForm.module.scss'

const LoginForm = () => {
     const [actionType, setActionType] = useState("");
    const dispatch = useDispatch()

   const onSubmit = data => {
        const action = (actionType === "login") ? logIn(data) : register(data)
        dispatch(action)

  };
    
    const [data, , handleChange, handleSubmit] = useForm({ initialState,  onSubmit});
    return (
         <div className={styles.formContainer}>
                    <h1 className={styles.formTitle}>Выполняй задания,
                    <br/>получи классные призы!</h1>
                    <div className={styles.formGroup}>
                        <p className={styles.formText}>Вы можете авторизоваться с помощью Google Account:</p>
                        <Button className={styles.googleBtn}><GoggleSvg className={styles.googleLogo}/>Google</Button>
                        <p className={styles.formText}>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</p>
                        <form onSubmit={handleSubmit}>
                            <span className={styles.star}>*</span><FormInput {...fields.email} value={data.email} onChange={handleChange }/>
                            <span className={styles.star}>*</span><FormInput {...fields.password} value={data.password} onChange={handleChange} />
                            <div className={styles.buttonContainer}>
                                <Button type="submit" className={styles.button } onClick={() => setActionType("login")}>Войти</Button>
                                <Button type="submit" className={styles.button } onClick={() => setActionType("register")}>Зарегистрироваться</Button>
                            </div>  
                        </form>
                    </div>
                </div>
    )
};

export default LoginForm;
