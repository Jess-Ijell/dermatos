import React from 'react'
import './header.css';
// import pics from '../../assets/pics.png'
// import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="_header section_padding" id="home">
      <div className="_header-content">
        <h1 /* className="gradient_text" */> Dermatos: an app to dectct melanomas </h1>
        <p>tilizamos inteligencia artificial entrenada para detectar el porcentaje de probabilidad de que un lunar sea un melanoma.</p>

        <div className="_header-content_input">
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">ANALISIS</button>
        </div>

        {/* <div className="_header-content_pics">
          <img src={pics} alt="pics" />
          <p> aca iría texto bla bla bla bla bla bla blablablablablablablabla </p>
        </div> 
        <div className="header-image">
          <img src={ai} alt="ai"/>
        </div> */}

      </div>
    </div>
  )
}

export default Header