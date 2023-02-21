import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Homeimg from "../images/login.jpg";

function MemberList() {
 
  const [data, setData] = useState([]);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = () => {
    fetch("http://localhost:8080/memberlist").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  };

 
  // const handleInputs=(e) =>{
  
    
  //   value=e.target.value;
  //   setDel(value);
  //   console.log(value);
  //   console.log("value line");
  //   deletemember();
  // }   
  






  const deletemember = async (e) =>{
    var email= e.target.getAttribute("data-email");
    // setDel(value);
    window.location.reload();
    console.log();
      console.log("value line");
      // console.log(del);
      const res= await fetch('http://localhost:8080/deletemember', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:email
        })
        
      })
      
      const data = await res.json();
      if(res.status === 422 || !data){
        window.alert("invailed email");
        console.log("invailed email");
      }else{
        window.alert(" Delete Member Sucess");
        console.log("Delete Member Sucess");
        }
    
     }
    

  // console.log(data);

  return (
    <>
      {" "}
      <div
        style={{
          minHeight:"140vh",
          // height: "125vh",
          marginTop: "-15%",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${Homeimg})`,
        }}
      >
        <br />
        <div style={{ marginTop: "15%" }}>
          {data.length > 0 ? (data.map((data) => (
              <div
                style={{
                  width: "70%",
                  marginTop: "1%",
                  marginLeft:"2%"
                }}
              >
                {/* <div  name="name" type='text' >  Hi Email:{value= data.email} {data.email} </div> */}
                <ListGroup>
                  <ListGroup.Item variant="primary">
                    ID: {data._id} <br /> Name: {data.name} 
                    <br /> Email: {data.email}  <br /> Role: {data.role} <br />{" "}
                    AddedBy: {data.addedby}{" "}

                  
                    <Button
                      variant="danger"
                      style={{ marginLeft: "80%", marginTop: "-9%" }}
                      data-email= {data.email}
                      onClick ={(e)=>{deletemember(e)}}
                      
                    >
                      Delete User
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            ))
          ) : (
            <p>Loding</p>
          )}
        </div>
      </div>
    </>
  );
}

export default MemberList;
