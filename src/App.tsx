import React from 'react'
import { Route, Switch, RouteComponentProps } from "react-router-dom"
import styled from 'styled-components'
//components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer'
//pages
import { Home, Music, Visuals, Social } from './Pages'

type LinkProps = {
  title: string
}

const ContentWrapper = styled.div`
  height: 100%;
  flex-direction: column; 
`

function App() {
  return (
    <>
      <ContentWrapper>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/music' component={Music} />
          <Route path="/visuals" component={Visuals} />
          <Route path="/social" component={Social} />
        </Switch>
        <Footer />
      </ContentWrapper>

    </>
  )
}

export default App
