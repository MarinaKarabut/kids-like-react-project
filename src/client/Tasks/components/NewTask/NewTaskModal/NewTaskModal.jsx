import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';


import Button from '../../../../../shared/components/Button';
import FormInput from '../../../../../shared/components/FormInput';
import { fields } from './fields';
import { initialState } from './initialState';
import useForm from '../../../../../shared/hooks/useForm';
import newTaskFoto from './images/newTaskFoto.png'
import { ReactComponent as LogoSvg } from './images/newTaskLogo.svg';
import { ReactComponent as EditSvg } from './images/edit.svg';
import {addTask} from '../../../../../redux/task/tasks-operations'

import s from './NewTaskModal.module.scss';


const NewTaskModal = () => {

    const dispatch = useDispatch();
    const onSubmit = useCallback((data) => dispatch(addTask(data)), [dispatch]);
    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });


    return <>
            <div className={s.newTask}>
                <div className={s.wrapperFoto}>
                    <img src={newTaskFoto} alt="TaskFoto" className={s.newTaskFoto}/>
                    <LogoSvg className={s.logoSvg} />
                </div>
                <div>
                <form
                    onSubmit={handleSubmit}
                    className={s.form}
                    autoComplete="off"
                >   <div className={s.editSvgWrapper}>
                        <EditSvg className={s.editSvg}/>
                        <FormInput {...fields.title} value={data.title} onChange={handleChange} className={s.input} />
                    </div>
                    <div className={s.editSvgWrapper}>
                        <EditSvg className={s.editSvg}/>
                        <FormInput {...fields.reward} value={data.reward} onChange={handleChange} className={s.input} />
                    </div>
                    <div className={s.buttonContainer}>
                    <Button type="submit" className={s.button}>Ок</Button>
                    </div>
                </form>
                </div>
            </div>
        </>
    
}

export default NewTaskModal;