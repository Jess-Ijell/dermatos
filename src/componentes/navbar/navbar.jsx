import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from "react";
import './navbar.css'
/*import logo from '../../assets/lpgp.svg'*/

const Menuu = () => (
  <>
  <p><a href="#inicio">Inicio</a></p>
  <p><a href="#info">Información</a></p>
  <p><a href="#camara">Análisis</a></p>
  </>        
)

const Navbar = () => 
{
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
        <div className="navbar">
          <div className="navbar-links">
            <div className="navbar-links_logo">
              {/* img src={logo} alt "logo" */}
            </div>
            <div className="navbar-links_container">
              <Menuu />
            </div>
          </div>
          <div className="navbar-links-sign">
            <p>sign in</p>
            <p>sign up</p>
          </div>
          <div className="navbar-menu">
            {toggleMenu
            ? <RiCloseLine color ="#fff" size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color ="#fff" size={27} onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
              <div className="navbar-menu_container scale-up-center">
                <div className="navbar-menu_containter-links">
                  <Menuu />
                  <div className="navbar-menu_container-links-sign">
                    <p>sign in</p>
                    <p>sign up</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Navbar