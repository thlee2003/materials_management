import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.div}>
      <img src="img/i-won_logo-01.jpg" alt="logo" className={styles.logo} />
    </div>
  );
};

export default Logo;
