import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ links }) => {
  return (
    <div className={styles.sidebar}>
      {links.map((link) => (
        <Link to={link.to} style={{ textDecoration: 'none', color: 'black' }}>
          <p>{link.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
