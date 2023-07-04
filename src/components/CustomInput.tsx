import React, {ChangeEvent} from 'react';
import styles from '../styles/CustomInput.module.scss';

function CustomInput(props: {
    id: string, 
    placeholder: string, 
    labelName: string, 
    value?: string,
    onChange: any,
    subLabel?: string,
    error?: string,
    isTextArea?: boolean}) {
  return (
    <div className={styles.inputContainer}>
    <label className={styles.label} htmlFor={props.id}>
      {props.labelName}
    <span className={styles.subLabel}>
      {props.subLabel ? props.subLabel : ''}
    </span>
    </label>
    {props.isTextArea ? (
        <textarea
        className={styles.textarea} 
        placeholder={props.placeholder} 
        id={props.id} 
        onChange={(e) => {props.onChange(e.target.value)}}
        />
    ) : (
        <input 
        className={styles.input} 
        placeholder={props.placeholder} 
        id={props.id}
        onChange={(e) => {props.onChange(e.target.value)}}
        />
    )}
    </div>
  );
}

export default CustomInput;
