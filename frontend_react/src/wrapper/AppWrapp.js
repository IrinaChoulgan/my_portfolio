import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import s from '../App.module.css';

const AppWrapp = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`${s.app__container} ${classNames}`}>
        <SocialMedia />

        <div className={`${s.app__wrapper} ${s.app__flex}`}>
          <Component />

          <div className={s.copyright}>
            <p className={`${s.p_text} ${s.copyright_text}`}>@2022 IRINA</p>
            <p className={`${s.p_text} ${s.copyright_text}`}>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapp;
