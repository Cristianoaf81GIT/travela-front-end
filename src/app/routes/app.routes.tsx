import React from 'react'
import {Switch, HashRouter, Redirect, Route} from 'react-router-dom'
import App from '../main/App'
import Checkout from '../checkout/checkout'

const AppRouter = (): JSX.Element => {
    return(
      <HashRouter>
        <Switch>
          <Route path='/travela' component={App}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path="/">
            <Redirect to='/travela'/>    
          </Route>
        </Switch>
      </HashRouter>
    )
}

export default AppRouter
