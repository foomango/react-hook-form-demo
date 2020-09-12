import React from 'react'

import LiveDemo from './components/LiveDemo'
import HtmlForm from './components/HtmlForm'
import BasicReactForm from './components/BasicReactForm'
import ReactHookForm from './components/ReactHookForm'
import ReactHookFormV2 from './components/ReactHookForm'

import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Live Demo</Link>
          </li>
          <li>
            <Link to="/">HTML Form</Link>
          </li>
          <li>
            <Link to="/basic-react-form">BasicReactForm</Link>
          </li>
          <li>
            <Link to="/react-hook-form">React Hook Form</Link>
          </li>
          <li>
            <Link to="/react-hook-form-v2">React Hook Form</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/html-form">
            <HtmlForm />
          </Route>
          <Route path="/basic-react-form">
            <BasicReactForm />
          </Route>
          <Route path="/react-hook-form">
            <ReactHookForm />
          </Route>
          <Route path="/react-hook-form-v2">
            <ReactHookFormV2 />
          </Route>
        </Switch>
        <Route path="/">
          <LiveDemo />
        </Route>
      </div>
    </Router>
  )
}

export default App
