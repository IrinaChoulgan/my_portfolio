import React from 'react';
import { motion } from 'framer-motion';

import { AppWrapp } from '../../wrapper';
import { images } from '../../constants';
import style from './Header.module.css';
import s from '../../App.module.css';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};

const Header = () => {
  return (
    <div className={`${style.app__header} ${s.app__flex}`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={style.app__header_info}
      >
        <div className={style.app__header_badge}>
          <div className={`${style.badge_cmp} ${s.app__flex}`}>
            <span className={style.badge_emoji}>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className={s.p_text}>Hello, I am</p>
              <h1 className={style.head_text}>Iryna</h1>
            </div>
          </div>
          <div className={`${style.tag_cmp} ${s.app__flex}`}>
            <p className={s.p_text}>Frontend Developer</p>
            <p className={s.p_text}>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={style.app__header_img}
      >
        <img className={style.app__header_foto} src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className={style.overlay_circle}
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={style.app__header_circles}
      >
        {[images.js, images.react, images.git].map((circle, index) => (
          <div className={`${style.circle_cmp} ${s.app__flex}`} key={`circle-${index}`}>
            <img className={style.circle_img} src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapp(Header, 'home');
