import React, { Fragment } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import Routers from '../../Routers/Routers'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
function Layout() {
  return (
    <Router>
        <Fragment>
            <Header/>
            <div><Routers/></div>
            <Footer/>
        </Fragment>
    </Router>
  )
}

export default Layout
