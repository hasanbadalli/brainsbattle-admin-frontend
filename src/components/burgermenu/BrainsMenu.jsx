import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../../styles/BrainsMenu.module.scss';
import logo from '../../public/assets/Brains.png';

import { Gamepad2, FileEdit, Users, BarChart3, BarChart4, BarChartIcon, BarChartBig, BarChartBigIcon } from 'lucide-react';

const BrainsSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      id: 'statistika',
      label: 'Statistika',
      icon: <BarChartBigIcon size={20} />,
      path: '/statistic',
    },
    {
      id: 'oyun',
      label: 'Oyun',
      icon: <Gamepad2 size={20} />,
      path: '/game',
    },
    {
      id: 'sinaq',
      label: 'Sınaq',
      icon: <FileEdit size={20} />,
      path: '/quiz',
    },
    {
      id: 'istifadeci',
      label: 'İstifadəçilər',
      icon: <Users size={20} />,
      path: '/user',
    },
  ];

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarMenu}>
        <div className={styles.logoSection}>
          <div className={styles.logoPlaceholder}>
            <img src={logo} alt="BrainsBattle Logo" className={styles.logoImage} />
          </div>
        </div>

        <div className={styles.menuSection}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <div
                key={item.id}
                className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                onClick={() => handleItemClick(item.path)}
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                <span className={styles.menuText}>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrainsSidebar;
