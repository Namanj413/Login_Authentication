import React from 'react';
import Homeimg from "../images/daniel-olahh.jpg";

import Dashbottom from './Dashbottom';


function Dashboard() {
  return(
   <>
        <div style={{
      height:"140vh",
      weight:"auto",
      backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      marginTop:"-15%",
      marginBottom:'0%',
       backgroundImage: `url(${Homeimg})` 
      }}>
   <div style={{
    colour:"white",
   }}>
   
   </div>
    </div>
   
      
      <Dashbottom/>
      
   
   



   </>
  );
}

export default Dashboard;