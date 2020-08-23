import React from 'react'
import './mainContainer.css'
import Form from '../form/form'
import About from '../about/about'


export default class MainContainer extends React.Component {

  render():JSX.Element {

    return(
      <div className='main-container'>
        <Form/>
        <About/>
      </div>
    )

  }

}