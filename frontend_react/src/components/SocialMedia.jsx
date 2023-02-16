import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import s from '../App.module.css';

const SocialMedia = () => {
  return (
    <div className={s.app__social}>
      <div className={s.app__social_wrap}>
        <BsLinkedin className={s.app_social_icon} />
      </div>
      <div className={s.app__social_wrap}>
        <FaFacebookF className={s.app_social_icon} />
      </div>
    </div>
  );
};

export default SocialMedia;
