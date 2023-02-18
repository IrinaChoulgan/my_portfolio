import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import s from '../App.module.css';

const SocialMedia = () => {
  return (
    <div className={s.app__social}>
      <div className={s.app__social_wrap}>
        <a href="https://www.linkedin.com/in/irina-choulgan/" target="_blank" rel="noreferrer">
          <BsLinkedin className={s.app_social_icon} />
        </a>
      </div>
      <div className={s.app__social_wrap}>
        <a href="https://www.facebook.com/profile.php?id=100010612179473" target="_blank" rel="noreferrer">
          <FaFacebookF className={s.app_social_icon} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
