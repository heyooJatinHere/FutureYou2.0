import React from 'react'
import Home from './pages/Home.jsx'
import { Route, Switch } from 'wouter'

const App = () => {
  return (
    <div>
      {/* <h1 className='text-red-400'>App</h1> */}
      <Switch>
      <Route path="/" component={Home} />

     
      {/* Optionally a fallback route */}
      <Route>
        <div className="text-center mt-20">
          <h1>404 - Page Not Found</h1>
        </div>
      </Route>
      </Switch>
    </div>
  )
}

export default App