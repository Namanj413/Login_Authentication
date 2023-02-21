import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import singup from "../images/singup.jpg";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    
  }
  from 'mdb-react-ui-kit';

import "@fortawesome/fontawesome-free/css/all.min.css";






const Singup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: ""
  });

  let name,value;

  const handleInputs=(e) =>{
  
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  } 
  
  
const PostData = async (e) =>{
  e.preventDefault();

  const { name, email, phone,  password, } =user;

  const res= await fetch('http://localhost:8080/singup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, email, phone,password
    })
  })
  const data = await res.json();
  if(res.status ===422 || !data){
    window.alert("invailed Regestration");
    console.log("invailed Regestration");
  }else{
    window.alert(" Regestration Sucess");
    console.log("Regestration Sucess");

    navigate("/login");
  }

 }


  return (
  <>
   
   <div style={{
      height:"140vh",
      marginTop:"-15%",
      marginBottom:'0%',
      backgroundSize: 'cover',
       backgroundImage: `url(${singup})` }}>
       <br/>

 <div style={{marginTop:"20%"}}> 
<br/>
  <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='8' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
      
        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
        <form>
         <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput value={user.name} onChange={handleInputs} label='Your Name' id='form1' name="name" type='text' className='w-100'/>
          </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput value={user.email} onChange={handleInputs} label='Your Email' id='form2' name="email" type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput value={user.phone} onChange={handleInputs} label='Your Phone' id='form3' name="phone" type='text'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput value={user.password} onChange={handleInputs} label='your password' id='password' name="password" type='password'/>
        </div>

        {/* <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div> */}

        <MDBBtn className='mb-4' size='lg'onClick={PostData}>Register</MDBBtn>
        <Link to="/"> <MDBBtn className='mb-4' size='lg'>Already User</MDBBtn> </Link>

      </form>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
        
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
</div>

   </div>
  </>
  );
}

export default Singup;
