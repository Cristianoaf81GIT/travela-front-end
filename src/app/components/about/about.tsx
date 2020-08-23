import React from 'react'
import './about.css'


export default class About extends React.Component {

  render(): JSX.Element {
    return (
      <div className='about-container'>
        <h3>About Travel A</h3>
        <p>
        Travel A is a travel company with more than x.. years
        of experience in the market. with more than xxx... employees
         specialized in providing the best for your trip.<br/>
        .Want to travel safely and comfortably? then fill out 
        the form and wait for one of our attendants to contact you.
         Travel A, you dream  and we realize.
        </p>
      </div>
    )
  }
}