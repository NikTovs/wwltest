import styles from '../styles/CustomSelect.module.scss';
import infoIcon from '../assets/images/Info.svg';
import { useEffect } from 'react';

function CustomSelect(props: {
    id: string, 
    placeholder: string, 
    labelName: string, 
    list: string[],
    infoText: string,
    onChange: any 
}) {


    return (
        <div className={styles.selectContainer}>
            <div className={styles.titleContainer}>
            <label className={styles.label} htmlFor={props.id}>{props.labelName}</label>
            <img src={infoIcon} alt="" width={20} height={20}/>
            </div>
            <select className={styles.select}
            onChange={(e) => {props.onChange(e.target.value)}}>
                <option value="">{props.placeholder}</option>
               {
                props.list.map((item) =>
                <option value={item} key={'key' + item}>{item}</option>)
               }
            </select>
        </div>
    );
}

export default CustomSelect;
