import React, {useState} from 'react'
import './Header.css'

const rootStyles = document.documentElement.style;

const themeData = [
  {
    icon: 'sun.svg',
    text: 'Light mode'
  },
  {
    icon: 'moon.svg',
    text: 'Dark mode'
  },
];

const Header = ({setLanguage}) => {
  const [theme, setTheme] = useState(themeData[1]);

  const handleTheme = () => {
    document.body.classList.toggle('dark');
    theme.icon === 'moon.svg'
    ? setTheme(themeData[0])
    : setTheme(themeData[1])
  }

  const handleChangeColor = (color) => {
    rootStyles.setProperty('--primary-color', color)
  }

  return (
    <header className="header">
      <div className="switches">
        <div id="toggle-theme" className="toggle-theme" onClick={handleTheme}>
          <img  id="toggle-icon" src={`assets/icons/${theme.icon}`} alt="icon theme" className="toggle-theme__icon"/>
          <p id="toggle-text" className="toggle-theme__text">{theme.text}</p>
        </div>
      </div>
      <div id="flags" className="flags">
        <div className="flags__item" onClick={() => setLanguage('es')} data-language="es">
          <img src="assets/icons/ea.svg" alt="spanish"/>
        </div>
        <div className="flags__item" onClick={() => setLanguage('en')} data-language="en">
          <img src="assets/icons/gb.svg" alt="english"/>
        </div>
      </div>
      <div id="toggle-colors" className="colors">
        <div onClick={() => handleChangeColor('hsl(214,84%,56%')} data-color="hsl(214, 84%, 56%)" className="colors__item colors__items--blue"></div>
        <div onClick={() => handleChangeColor('hsl(150,84%,56%')} data-color="hsl(150, 84%, 56%)" className="colors__item colors__items--green"></div>
        <div onClick={() => handleChangeColor('hsl(276,84%,56%')} data-color="hsl(276, 84%, 56%)" className="colors__item colors__items--purple"></div>
        <div onClick={() => handleChangeColor('hsl(46,84%,56%')} data-color="hsl(46, 84%, 56%)" className="colors__item colors__items--orange"></div>
      </div>
    </header>
  )
}

export default Header
