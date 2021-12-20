import React from 'react'
import Experience from '../Experience/Experience'

const CardExperiences = ({experiences}) => {
  return (
    <article className="card card--experience" id="card--experience">
      <h2 className="card__title">Experiences</h2>
      {
        experiences.map((ex, index) => (
          <Experience key={index} experience={ex}/>
        ))
      }
    </article>
  )
}

export default CardExperiences
