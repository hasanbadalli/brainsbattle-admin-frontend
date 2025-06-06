// components/layout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import BrainsSidebar from '../components/burgermenu/BrainsMenu'; // mövcud komponent

import styles from '../../styles/Layout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <BrainsSidebar />
      <div className={styles.pageContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
