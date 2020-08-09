import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from "react-router-dom";
import PageTitle from './Components/PageTitle'
import Menu from './Components/Menu'
import Music from './Components/Music'
import Visuals from './Components/Visuals'
import Social from './Components/Social'

function App() {


  return (
    <>
      <PageTitle />
      <Menu />
      <Switch>
        <Route exact path="/" />
        <Route path='/music' component={Music} />
        <Route path="/visuals" component={Visuals} />
        <Route path="/social" component={Social} />
      </Switch>
    </>
  )
}

export default App
