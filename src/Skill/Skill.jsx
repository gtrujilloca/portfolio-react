import React from 'react'
import './Skill.css'

const Skill = ({skill}) => {
  return (
    <article className="card">
    <h2 className="card__title">{skill['skill-title']}</h2>
    <small className="small">{skill['skill-subtitle']}</small>
    <div className="skills">
      <div className="skills__header">
        <span className="skills__start-level">{skill['skill-time'][0]}</span>
        <span className="skills__start-level">{skill['skill-time'][1]}</span>
      </div>
    </div>
    <div className="skills">
      {
        skill['skill-info'].map((info,index) => (
          <SkillInfo key={index} info={info}/>
        ))
      }
    </div>
  </article>
  )
}

const SkillInfo = ({info}) => {
  return (
    <div className="skills__item">
    <p className="skills__tech">{info['teach']}</p>
    <div className={`skills__bar skills__bar--${info['percentage']}`}></div>
  </div>
  )
}

export default Skill
