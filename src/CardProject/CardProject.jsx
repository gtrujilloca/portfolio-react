import React from 'react'
import './CardProject.css'

const CardProject = ({ project }) => {
  return (
    <article className="card card--project">
      <div className="card__image-container">
        <img src={project['project-image']} alt="landing page" className="card__image" />
      </div>
      <div className="project">
        <div className="project__tags">
          {
            project['project-tags'].map((tag,index) => (
              <Tag key={index} tag={tag} />
            ))
          }
        </div>
        <h2 className="card__title">{project['project-title']}</h2>
        <p className="card__text">{project['project-description']}</p>
        <div className="buttons">
          <a href={project['project-demo']} className="button button--primary" target="_blank">Demo</a>
          <a href={project['project-code']} className="button button--ghost" target="_blank">Code</a>
        </div>
      </div>
    </article>
  )
}

const Tag = ({tag}) => {
  return (
    <span className="project__tag">{tag}</span>
  )
}

export default CardProject
