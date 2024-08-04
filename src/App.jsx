import React from 'react'
import { BrowserRouter, Switch,Route} from 'react-router-dom/cjs/react-router-dom.min'
import Home from './pages/Home'
import Details from "./pages/Details"
import OrderHistory from './pages/OrderHistory'

const App = () => {
  return (
    <BrowserRouter>
     
    <Switch>
    
      <Route  path="/" exact>
         <Home />
      </Route>
      <Route  path="/:id" >
         <Details />
      </Route>
      <Route path="/order-history">
        <OrderHistory />
      </Route>
    
    </Switch>
   
    </BrowserRouter>
  )
}

export default App