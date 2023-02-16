import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapp } from '../../wrapper';
import style from './About.module.css';
import s from '../../App.module.css';

import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    }, []);
  });
  return (
    <>
      <h2 className={s.head_text}>
        I know that <span>Good Apps</span>
        <br />
        means <span>Success</span>
      </h2>

      <div className={style.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className={style.app__profile_item}
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className={s.bold_text} style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className={s.p_text} style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapp(About, 'about');
