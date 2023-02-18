import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapp } from '../../wrapper';
import { urlFor, client } from '../../client';
import s from '../../App.module.css';
import style from './Skills.module.css';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className={s.head_text}>Skills & Experience</h2>

      <div className={style.app__skills_container}>
        <motion.div className={style.app__skills_list}>
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`${style.app__skills_item} ${s.app_flex}`}
              key={index}
            >
              <div className={s.app__flex} style={{ backgroundColor: skill.bgColor }}>
                <img className={style.skills_img} src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className={s.p_text}>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className={style.app__skills_exp}>
          {experiences.map((experience, index) => (
            <motion.div className={style.app__skills_exp_item} key={experience.year}>
              <div className={style.app__skills_exp_year}>
                <p className={s.bold_text}>{experience.year}</p>
              </div>
              <motion.div className={style.app__skills_exp_works} key={index}>
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className={style.app__skills_exp_work}
                      key={index}
                    >
                      <h4 className={s.bold_text}>{work.name}</h4>
                      <p className={s.p_text}>{work.company}</p>
                    </motion.div>

                    <div className={style.skills_tooltip}>{work.desc}</div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrapp(Skills, 'skills');
