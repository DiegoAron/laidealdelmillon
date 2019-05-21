import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";


import Home from '../pages/Home.jsx'
import Home2 from '../pages/Home2.jsx'

class Navbar extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/2">Home2</Link>
            </li>
     </ul>
       
  <Route exact path="/" component={Home}/>
  <Route path="/2" component={Home2}/>

  {/* <Route path="/about" component={About}/> */}
 

</BrowserRouter>
      
    )
  }
}

export default Navbar
