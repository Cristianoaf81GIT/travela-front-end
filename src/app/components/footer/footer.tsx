import React from 'react'
import './footer.css'

export default class Footer extends React.Component {

  render(): JSX.Element {
    return(
      <div className='main-footer bg-primary'>
         <div className='row'>           
            <div className='col-md-10'>
              <p className='footer-contact'>
              contact@travela.com | +55 (35) 3621 4551
              </p>
            </div>  
          </div> 
      </div>
    )
  }

}