import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styles from "../styles/DateAndTime.module.scss";


interface Props {
  id: number;
  onDelete: (id: number) => void;
  onChange: (
    value: string,
    type: string,
    id: number
  ) => void;
}

export const DateAndTime: React.FC<Props> = ({ id, onDelete, onChange }) => {

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <DatePicker label="мм.дд.гггг" 
        className={styles.datePicker}
        onChange={value => onChange(value as string, 'date', id)} />
      </div>
      <div className={styles.input}>
        <TimePicker
        className={styles.timePicker}
         onChange={value => onChange(value as string, 'time', id)} />
      </div>
      <div >
        <button className={styles.deleteButton} 
        onClick={() => onDelete(id)}></button>
      </div>
    </div>
  );
};
