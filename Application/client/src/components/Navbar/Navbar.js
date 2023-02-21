import React  from 'react'
import { NavLink ,useNavigate} from 'react-router-dom';
import logo from "../images/logo.png"

import './Navbar.css';


const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
      sessionStorage.clear();
      localStorage.clear();
      navigate('/');
      window.location.reload(false);
        };
  
  return (
    
     
       <div className="navbar-container">
  <nav className="navbar navbar-expand "  >

  <NavLink  className="navbar-brand" to="/" ><img src={logo} alt="logo" style={{
    width:"40px",
    backgroundColor:"white"
  }}/> </NavLink>
  <button className="navbar-toggler" type="button " data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon " ></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item active" >
        <NavLink  className="nav-link" to="/" style={{color:'white',padding:'6px'}}>Dashboard <span className="sr-only">(current)</span></NavLink>
      </li>
    
      <li className="nav-item">
        <NavLink  className="nav-link" to="/contact" style={{color:'white',padding:'6px'}}>Contact</NavLink>
      </li>

    
      
      <li className="nav-item">
        <NavLink  className="nav-link" to="/addmember" style={{color:'white',padding:'6px'}}>Add_Member</NavLink>
      </li>

      <li className="nav-item">
        <NavLink  className="nav-link" to="/memberlist" style={{color:'white',padding:'6px'}}>Members_List</NavLink>
      </li>

      <li className="nav-item" >
        <NavLink  className="nav-link" to="/singup" onClick={logout} style={{color:'white',padding:'6px',}}>Logout</NavLink>
      </li>
   

    </ul>
    
  </div>
 
</nav>
<hr/>
 </div>
     

  )
}

export default Navbar;
