import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/BrainsMenu.module.scss';
import logo from '../../public/assets/Brains.png';

const BrainsSidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'statistika',
      label: 'Statistika',
      icon: '📊',
      path: '/statistic',
    },
    {
      id: 'oyun',
      label: 'Oyun',
      icon: '🎮',
      path: '/game',
    },
    {
      id: 'sinaq',
      label: 'Sınaq',
      icon: '📝',
      path: '/quiz',
    },
    {
      id: 'istifadeci',
      label: 'İstifadəçilər',
      icon: '👥',
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
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={styles.menuItem}
              onClick={() => handleItemClick(item.path)}
            >
              <span className={styles.menuIcon}>{item.icon}</span>
              <span className={styles.menuText}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrainsSidebar;
