import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css'; // Confirm this path is correct

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>
          🌟 Welcome to the Phonebook App! 📖 Your go-to hub for keeping all
          your contacts easily accessible. Get ready to connect 🤝 and stay in
          touch with everyone that matters to you! 🌐 Feel free to explore all
          this simple app and let me know how much you love it! 🎉
        </h1>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
