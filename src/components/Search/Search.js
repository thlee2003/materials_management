import React, { useState } from 'react';
import styles from './Search.module.css';

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <div className={styles.div}>
      <input className={styles.input} type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button className={styles.button}>검색</button>
    </div>
  );
};

export default Search;
