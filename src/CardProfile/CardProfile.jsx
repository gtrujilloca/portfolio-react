import React from 'react'
import './CardProfile.css'

const CardProfile = ({profile}) => {
  return (
    <article className="card card--profile">
      <div className="card__image-container">
        <img src="assets/images/profile.png" alt="profile" />
      </div>
      <div className="card__header">
        <h2 className="card__title no-margin">Carlos  Alberto Garcia Trujillo</h2>
        <p className="card__subtitle" data-section="profile" data-value="rol">{profile.rol}</p>
      </div>
      <div className="card__body">
        <div className="card__link">
          <i className="fas fa-envelope icon"></i>
          <a href="mailto:gtrujilloca@gmail.com">gtrujilloca@gmail.com</a>
        </div>
        <div className="card__link">
          <i className="fas fa-phone-alt icon"></i>
          <a href="tel:3013116212">+56 3013116212</a>
        </div>
        <p className="card__text" data-section="profile" data-value="description">
          {profile.description}
        </p>
      </div>
    </article>
  )
}

export default CardProfile
