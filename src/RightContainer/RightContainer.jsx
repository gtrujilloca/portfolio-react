import React from 'react'
import CardProject from '../CardProject/CardProject';
import Skill from '../Skill/Skill'
import './RightContainer.css'

const RightContainer = ({projects, skills}) => {
  return (
    <section className="column column--right" id="column--right">
      {
        skills.map((skill,index) => (
          <Skill key={index} skill={skill}/>
        ))
      }
      {
        projects.map((project,index) => (
          <CardProject key={index} project={project} />
        ))
      }
    </section>
  )
}

export default RightContainer
