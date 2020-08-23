import React from 'react'
import planeLogo from '../../assets/plane.svg'
import './navbar.css'

export default class NavBar extends React.Component {


  render(): JSX.Element {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        
        <p className="navbar-brand">
          <span>
            <img src={planeLogo} alt='plane' className='navlogo'/>           
          
          </span>
          
        </p>
        <h3 className='brand-title'>Travel A</h3>
      </nav>
    )
  }

}

