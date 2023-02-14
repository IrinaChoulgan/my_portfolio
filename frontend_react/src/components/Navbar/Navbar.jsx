import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import style from './Navbar.module.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={style.app__navbar}>
      <div className={style.app__navbar_logo}>
        <img className={style.app__navbar_img} src={images.logo} alt="logo" />
      </div>
      <ul className={style.app__navbar_links}>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className={style.app__flex} key={`link-${item}`}>
            <div className={style.app__navbar_div} />
            <a className={style.app__navbar_link} href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className={style.app__navbar_menu}>
        <HiMenuAlt4 className={style.app__navbar_svg} onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
            <HiX className={style.app__navbar_close} onClick={() => setToggle(false)} />
            <ul className={style.app__navbar_list}>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    className={style.app__navbar_menu_link}
                    onClick={() => setToggle(false)}
                    href={`#${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
