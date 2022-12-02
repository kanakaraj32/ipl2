import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Welcome from './components/LatestMatch'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="raj">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={Welcome} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
