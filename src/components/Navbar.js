//understanding props
import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} overflow-y-hidden`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/textform">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/textform">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li>
        
      </ul>
     
      <div className={`form-check form-switch text-${props.mode==='dark'?'white':'black'}`}>
  <input className="form-check-input " type="checkbox" role="switch" onClick={()=>{props.ToggleMode(null)}} id="flexSwitchCheckDefault"/>
  <label className="textTransform form-check-label mx-2" htmlfor="flexSwitchCheckDefault">Dark Mode</label>
</div>

    </div>
  </div>
 </nav>    
</div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "set title here",
    aboutText: "about text here"
}