import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import {Routes, Route} from 'react-router-dom';
import Login from '../Login/Login';
import React from 'react';
import useToken from './useToken';
import Singup from '../Singup/Singup';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import FourOFour from '../FourOFour/FourOFour';
import AddMember from '../AddMember/AddMember';
import MemberList from '../MemberList/MemberList';


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    
    return( 
      <>
      <Routes>

     <Route exact path="/"  element={<Login setToken={setToken} />} /> 
     <Route path="*" element={<FourOFour/>}/>
      <Route  exact path="/singup"  element={<Singup />}/>
      <Route  exact path="/addmember"  element={<AddMember />}/>
      <Route  path="/memberlist"  element={<MemberList />}/>
      <Route path="/login" element={<Login />}/>
      </Routes>
      </>
      
      )
  }

  return (
  <>

 
<Navbar/>
    <Routes>
  
    <Route path="/" element={<Dashboard />}/>
   <Route path="/preferences" element={<Preferences/>}/>
   <Route path="/login" element={<Login />}/>
   <Route path="*" element={<FourOFour/>}/>
   <Route  exact path="/addmember"  element={<AddMember />}/>
   <Route path="/contact" element={<Contact />}/>
   <Route  path="/memberlist"  element={<MemberList />}/>
  
    </Routes>

  </>
  );
}

export default App;










// import './App.css';
// import Dashboard from '../Dashboard/Dashboard';
// import Preferences from '../Preferences/Preferences';
// import {Routes, Route} from 'react-router-dom';
// import Login from '../Login/Login';
// import React,{useState} from 'react';
// import useToken from './useToken';
// import Singup from '../Singup/Singup';
// import Navbar from '../Navbar/Navbar';
// import Contact from '../Contact/Contact';
// import FourOFour from '../FourOFour/FourOFour';
// import AddMember from '../AddMember/AddMember';
// import MemberList from '../MemberList/MemberList';


// function App() {

//   const { token, setToken } = useToken();

//   if(!token) {
    
//     return( 
//       <>
//       <Routes>

     
//      <Route exact path="/"  element={<Login setToken={setToken} />} /> 
//      <Route path="*" element={<FourOFour/>}/>
//       <Route  exact path="/singup"  element={<Singup />}/>
//       {/* <Route  exact path="/addmember"  element={<AddMember />}/> */}
//       {/* <Route  path="/memberlist"  element={<MemberList />}/> */}
//       </Routes>
//       </>
      
//       )
//   }

//   return (
//   <>

 
// {/* <Navbar/> */}


// <Home />
//     <Routes>
    
//     {/* <Route path="/" element={<Dashboard />}/>
//    <Route path="/preferences" element={<Preferences/>}/>
//    <Route path="/login" element={<Login />}/>
//    <Route path="*" element={<FourOFour/>}/>
//    <Route  exact path="/addmember"  element={<AddMember />}/>
//    <Route path="/contact" element={<Contact />}/>
//    <Route  path="/memberlist"  element={<MemberList />}/> */}
   
   
//    </Routes>

//   </>
//   );
// }


// const Home = () => {  
// //   function useUser(){
  
// // const a=1;
// //     return a;
    
// //     }

//   const { usertype, setUsertype } = useState('1');


//   if(usertype==1) {
    
//     return( 
//       <>
//       <Routes>
//       <Route path="/" element={<Dashboard setUsertype={setUsertype} />}/>
//    <Route path="/preferences" element={<Preferences/>}/>
//    <Route path="/login" element={<Login />}/>
//    <Route path="*" element={<FourOFour/>}/>
//    <Route  exact path="/addmember"  element={<AddMember />}/>
//    <Route  path="/memberlist"  element={<MemberList />}/>
//    <Route path="/contact" element={<Contact />}/>
//     </Routes>
     
     
    
  
    
//       </>
      
//       )
//   }

//   return (
//   <>

 
// <Navbar/>
//     <Routes>
//     <Route path="/" element={<Dashboard  setUsertype={setUsertype}/>} />
//      <Route path="*" element={<FourOFour/>}/>
//      </Routes>
   

//   </>
//   );
// }


// export default App;