import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import BrainsSidebar from '../../components/burgermenu/BrainsMenu';
import styles from '../../styles/Statistic.module.scss';

const Statistic = () => {


  const data = [
  { name: 'Yan', value: 50 },
  { name: 'Fev', value: 42 },
  { name: 'Mart', value: 38 },
  { name: 'Apr', value: 45 },
];

const incomeData = [
  { name: 'Yan', value: 47 },
  { name: 'Fev', value: 40 },
  { name: 'Mart', value: 36 },
  { name: 'Apr', value: 44 },
];
  return (
    <div className={styles.pageWrapper}>
      <BrainsSidebar />
      <div className={styles.content}>
        <div className={styles.topStats}>
          <div className={styles.statBox}>
            <h4>Ümumi istifadəçi sayı</h4>
            <p className={styles.number}>10234 <span className={styles.up}>+12%</span></p>
            <span className={styles.info}>keçən aydan <b>1293</b> daha çox</span>
          </div>
          <div className={styles.statBox}>
            <h4>Ümumi duel sayı</h4>
            <p className={styles.number}>23531 <span className={styles.up}>+19%</span></p>
            <span className={styles.info}>keçən aydan <b>3442</b> daha çox</span>
          </div>
          <div className={styles.statBox}>
            <h4>AI abunəçi sayı</h4>
            <p className={styles.number}>3534 <span className={styles.down}>-19%</span></p>
            <span className={styles.infotwo}>keçən aydan <b>324</b> daha az</span>
          </div>
        </div>

        
        <div className={styles.middleSection}>
      <div className={styles.chartBox}>
        <h4>Sınaq satışları <span className={styles.period}>Yan–Apr</span></h4>
        <ResponsiveContainer width="85%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#1193D0" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.chartBox}>
        <h4>Sınaq satışından gəlir <span className={styles.period}>Yan–Apr</span></h4>
        <ResponsiveContainer width="85%" height={400}>
          <BarChart data={incomeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#1193D0" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
     <div className={styles.summaryBox}>
        <h5>Ümumi satış sayı</h5>
        <p className={styles.numberSmall}>
          259 <span className={styles.up}>+6%</span>
        </p>

        <h5>Ümumi gəlir</h5>
        <p className={styles.numberSmall}>
          ₼1232 <span className={styles.up}>+4%</span>
        </p>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Statistic;
