import React from 'react'
import { Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import { Home, Music, Visuals, Social } from './Components/Pages'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/music' component={Music} />
        <Route path="/visuals" component={Visuals} />
        <Route path="/social" component={Social} />
      </Switch>
    </>
  )
}

export default App
