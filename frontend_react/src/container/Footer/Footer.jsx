import React from 'react';

import { images } from '../../constants';
import { AppWrapp } from '../../wrapper';
import s from '../../App.module.css';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <h2 className={s.head_text}>You can contact with me</h2>

      <div className={style.app__footer_cards}>
        <div className={style.app__footer_card}>
          <img src={images.email} alt="email" />
          <a href="mailto:irinabarabash69gmail.com" className={s.p_text}>
            irinabarabash69gmail.com
          </a>
        </div>
        <div className={style.app__footer_card}>
          <img src={images.mobile} alt="phone" />
          <a href="tel:+38 (050) 1082231" className={s.p_text}>
            +38 (050) 1082231
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrapp(Footer, 'contact');
