import { useState } from "react";
import { DateAndTimeType } from "../types/dateAndTimeType";
import { DateAndTime } from "./DateAndTime";
import styles from '../styles/DateAndTime.module.scss';

export const DateAndTimeController = () => {
  const [componentsList, setComponentsList] = useState<DateAndTimeType[]>([]);

  const onDelete = (id: number) => {
    const tmpList = componentsList;
    setComponentsList(tmpList?.filter((item) => item.id !== id));
  };

  const changeData = (
    value: string,
    type: "date" | "time",
    id: number
  ) => {
    const newVal: DateAndTimeType[] = componentsList;
    newVal?.forEach((val, index) => {
      if (newVal[index].id === id) {
        newVal[index][type] = value;
      }
    });
  };

  const addData = () => {
    const tmp = componentsList;
    tmp.push({ id: tmp.length + 1, date: "", time: "" });
    setComponentsList(tmp);
  };

  const eraseAll = () => {
    setComponentsList([]);
  };

  return (
    <div className={styles.mainContainer}>
      {componentsList?.map((item, index) => (
        <DateAndTime
          key={index + "dataAndTime"}
          id={componentsList[index].id!}
          onDelete={onDelete}
          onChange={(value, type, id) => {
            changeData(value, type as "date" | "time", id);
          }}
        />
      ))}
      <div className={styles.buttons}>
        <button onClick={addData} className={styles.addData}>
          Добавить дату
        </button>
        <button onClick={eraseAll} className={styles.eraseAll}>
          Очистить
        </button>
      </div>
    </div>
  );
};
