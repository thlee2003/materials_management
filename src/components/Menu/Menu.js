import React from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.in}>
        <Link to="/Main" style={{ textDecoration: 'none' }}>
          <p className={styles.p}>재고</p>
        </Link>
        <Link to="/Material" style={{ textDecoration: 'none' }}>
          <p className={styles.p}>자재</p>
        </Link>
        <Link to="/BOMList" style={{ textDecoration: 'none' }}>
          <p className={styles.p}>BOM</p>
        </Link>
        <Link to="/ProjectList" style={{ textDecoration: 'none' }}>
          <p className={styles.p}>프로젝트</p>
        </Link>
        <Link to="/ProduceList" style={{ textDecoration: 'none' }}>
          <p className={styles.p}>제품</p>
        </Link>
        <Link to="/SaleList" style={{ textDecoration: 'none' }}>
          <p className={styles.p}>판매</p>
        </Link>
        <Link to="/AS" style={{ textDecoration: 'none' }}>
          <p className={styles.p}>AS</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
