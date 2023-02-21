import React, { useState } from 'react';
import loginimg from "../images/login.jpg";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



async function loginUser(credentials) {
 
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
   }).then(data => data.json())
  
  }

const Login = ({ setToken }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
      
    });

//  Saving role in  setusertype then we will 
// understand the who is the user or is admin
console.log(token.roletype);
console.log("token uper hai")
    setUserType(token.roletype);
    setToken(token);

    //  setting user in local storage for testing purpose
  localStorage.setItem('role',token.roletype);
  }

 

  return (
   <> <div style={{
    height:"140vh",
      width:"auto",
      backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      marginTop:"-15%",
      marginBottom:'0%',
       backgroundImage: `url(${loginimg})` 
    }}> 
   
    <br/>
     <div className="login-wrapper" style={{marginTop:"22%"}}>
   <form onSubmit={handleSubmit}>
 <MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
    <br/>
      <MDBCardImage img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" /> 
    </MDBCol>

    <MDBCol md='6'>
    
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">Welcome To Login</span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

          <MDBInput wrapperClass='mb-4' value={email} label='Email address' id='formControlLg' type='text' size="lg" onChange={e => setEmail(e.target.value)} />
          <MDBInput wrapperClass='mb-4' value={password} label='Password' id='formControlLg' type='password' size="lg" onChange={e => setPassword(e.target.value)}/>

        <MDBBtn className="mb-4 px-5" color='dark' size='lg' type="submit">Login</MDBBtn>
        <a className="small text-muted" href="#!">Forgot password?</a>
       <Link className="mb-5 pb-lg-2" style={{color: '#393f81'}} to="/singup"> Don't have an account ? Register here</Link>

        <div className='d-flex flex-row justify-content-start'>
          <a href="#!" className="small text-muted me-1">Terms of use.</a>
          <a href="#!" className="small text-muted">Privacy policy</a>
        </div>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>

</form>
</div>
 </div>
   </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
