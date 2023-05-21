import React from 'react';
import styles from '../styles/Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src='/logo.svg' alt='' className={styles.logo} />
            <img src='/menu.svg' alt='' className={styles.menu} />
        </header>
    );
};
