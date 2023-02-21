import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import Homeimg from "../images/login.jpg";

function Contact() {
  return (
    <>  
    <div style={{ 
      height:"125vh",
      marginTop:'-15%',
      weight:"100%",
      backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
         backgroundImage: `url(${Homeimg})` 
      }}>
      <br/>
    <div style={{
      marginTop:"21%",
      justifyContent:'center',
      display:"flex",
      padding:"2px",
      border:"3px"
    }}>
     <form id='form' className='text-center' style={{ width: '100%', maxWidth: '400px' ,backgroundColor:"white",padding:"15px",border:"2px"}}>
    <h2>Contact us</h2>

    <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

    <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

    <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

    <MDBTextArea wrapperClass='mb-4' label='Message' />
<br/>
    <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

    <MDBBtn color='primary' block className='my-4'>
      Send
    </MDBBtn>
  </form>

</div>
</div>
  </>
 
  );
}

export default Contact;