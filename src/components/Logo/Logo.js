import React from 'react';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={styles.div}>
      <Link to="/main">
        <img src="img/i-won_logo-01.jpg" alt="logo" className={styles.logo} />
      </Link>
    </div>
  );
};

export default Logo;
