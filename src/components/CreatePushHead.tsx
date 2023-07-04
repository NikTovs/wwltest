import styles from "../styles/CreatePush.module.scss";
import questionIcon from "../assets/images/guestion-ico.svg";
import usersIcon from "../assets/images/users-ico.svg";

export const CreatePushHead = () => {

    return (
        <>
        <h2 className={styles.title}>Пуши</h2>
      <div className={styles.titleContainer}>
        <div className={styles.leftSideTitleContainer}>
          <h4 className={styles.subTitle}>Создать новое пуш уведомление</h4>
          <img src={questionIcon} alt="" width={32} height={32} />
        </div>
        <div className={styles.rightSideTitleContainer}>
          <div className={styles.infoBlock}>
            <div className={styles.infoImgBlock}>
              <img src={usersIcon} alt="" width={40} height={40} />
            </div>
            <div className={styles.infoDataBlock}>
              <p className={styles.name}>Счетчик аудитории</p>
              <p className={styles.value}>0</p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}