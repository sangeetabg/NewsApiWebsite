import React, { Component } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import ContactUs from './Component/ContactUs'
import Navbar from './Component/Navbar'
import Newsapi from './NewApi/Newsapi'




export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
        
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/news" element={<Newsapi/>}/>
        </Routes>
      </Router>
        
      </>
    )
  }
}

export default App


