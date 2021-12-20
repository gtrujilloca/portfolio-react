import React from 'react'
import CardExperiences from '../CardExperiences/CardExperiences'
import CardHobbies from '../CardHobbies/CardHobbies'
import CardProfile from '../CardProfile/CardProfile'
import './LeftContainer.css'

const LeftContainer = ({profile, experiences}) => {
  return (
    <section className="column column--left">
      <CardProfile profile={profile}/>
      <CardExperiences experiences={experiences}/>
      <CardHobbies/>
    </section>
  )
}

export default LeftContainer
