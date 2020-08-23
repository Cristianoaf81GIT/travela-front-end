import React from 'react'
import './checkout.css'
import {Link, withRouter} from 'react-router-dom'
import {RouteComponentProps} from 'react-router'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

interface Props extends RouteComponentProps<any>{}


class Checkout extends React.Component<Props> {

  componentDidMount() {
    const isCheckout = (localStorage.getItem('checked') === 'true')
    console.log(typeof isCheckout)
    if ( !isCheckout )
      this.props.history.push('/')
  }

  render() : JSX.Element {
    return(        
      <div className="App">
      <NavBar/>
      <img src={logo} className="logo" alt="logo" />
        <div className='text-container'>
          <p>
            Thank you for sending us your travel details,
            soon one of our attendants will contact you.
          </p>
          <Link to='/'>
          <FontAwesomeIcon icon={faBackward} />&nbsp;
            back
          </Link>
        </div>
      <Footer/>
    </div>      
    )
  }

}

export default withRouter(Checkout)