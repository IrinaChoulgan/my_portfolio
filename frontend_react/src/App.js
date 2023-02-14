import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';

import s from './App.module.css';

const App = () => {
  return (
    <div className={s.app}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
