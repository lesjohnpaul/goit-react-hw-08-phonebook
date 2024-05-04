import React from 'react';
import styles from './Footer.module.css'; // Make sure this path matches the location of your CSS file

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} Phonebook App
    </footer>
  );
};
