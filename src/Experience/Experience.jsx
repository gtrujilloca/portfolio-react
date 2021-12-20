import React from 'react'
import './experience.css'

const Experience = ({experience}) => {
  return (
    <div className="experience">
      <img src={experience['company-logo']} alt="logo" className="experience__image"/>
      <div className="experience__info">
        <p className="experience__time">
          {experience['job-dates']}
        </p>
        <h3 className="experience__job"> {experience['job-title']}</h3>
        <p className="experience__description">
          {experience['job-description']}
        </p>
      </div>
    </div>
  )
}

export default Experience
