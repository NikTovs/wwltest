import React from 'react';
import styles from '../styles/Layout.module.scss';
import { CreatePushPage } from '../pages/CreatePushPage';

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideNav}>
      </div>
      <div className={styles.mainContent}>
        <CreatePushPage />
      </div>
    </div>
  );
}

export default Layout;
