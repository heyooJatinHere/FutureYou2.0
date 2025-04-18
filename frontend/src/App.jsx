import React from 'react'
import Home from './pages/Home.jsx'
import { Route, Switch } from 'wouter'
import DynamicQuiz from './components/Quiz.jsx'

const App = () => {
  return (
    <div>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/quiz" component={DynamicQuiz} />
     
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