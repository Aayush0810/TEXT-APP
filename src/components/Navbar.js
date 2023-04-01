//understanding props
import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} overflow-y-hidden`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <div className="bg-primary mx-2 rounded" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.ToggleMode('primary')}} ></div>
      <div className="bg-danger mx-2 rounded" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.ToggleMode('danger')}} ></div>
      <div className="bg-success mx-2 rounded" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.ToggleMode('success')}} ></div>
      <div className="bg-warning mx-2 rounded" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.ToggleMode('warning')}} ></div> */}

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